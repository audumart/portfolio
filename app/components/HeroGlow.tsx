"use client";

import { useEffect, useRef } from "react";

/* Ambient light drifting behind the hero name. A single instance, so it owns
   its own context; everything browser-only happens after mount. The CSS
   gradient underneath is the fallback for machines that refuse WebGL. */

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

/* Two value-noise taps per pixel, output premultiplied so the grid shows
   through. Alpha tops out at 0.32, so no input can blow the area out. */
const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = vec2(uv.x * aspect, uv.y) * 1.6;
  float t = uTime * 0.04;

  float n = noise(p + vec2(t, -t * 0.6));
  float m = noise(p * 2.1 - vec2(t * 1.3, t * 0.4) + n);
  float f = 0.6 * n + 0.4 * m;

  vec2 c = uv - vec2(0.5, 0.62);
  c.x *= aspect * 0.55;
  float mask = exp(-dot(c, c) * 3.5);
  float edge = smoothstep(0.0, 0.15, uv.y) * smoothstep(1.0, 0.85, uv.y)
             * smoothstep(0.0, 0.08, uv.x) * smoothstep(1.0, 0.92, uv.x);

  float a = smoothstep(0.35, 0.85, f) * mask * edge * 0.32;
  vec3 col = mix(vec3(0.467, 0.553, 0.663), vec3(0.878, 0.882, 0.867), smoothstep(0.5, 0.9, f));
  gl_FragColor = vec4(col * a, a);
}
`;

const FRAME_MS = 1000 / 30;
/* The glow is low-frequency, so half-resolution is indistinguishable once
   upscaled and quarters the fill cost on a full-width canvas. */
const RENDER_SCALE = 0.5;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
}

export default function HeroGlow({
  className = "",
  forceFallback = false,
}: {
  className?: string;
  forceFallback?: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const fallback = () => { wrap.dataset.gl = "off"; };
    if (forceFallback) { fallback(); return; }

    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      failIfMajorPerformanceCaveat: true,
    });
    const vs = gl && compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = gl && compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const prog = gl && vs && fs ? gl.createProgram() : null;
    if (!gl || !vs || !fs || !prog) { fallback(); return; }

    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { fallback(); return; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
    const uRes = gl.getUniformLocation(prog, "uRes");
    const uTime = gl.getUniformLocation(prog, "uTime");

    const start = performance.now();
    let raf = 0;
    let last = 0;
    let onScreen = false;
    let lost = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const draw = (now: number) => {
      // Wrap time so the noise input stays small enough for mediump floats
      const t = ((now - start) / 1000) % 2000;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const tick = (now: number) => {
      raf = 0;
      if (now - last >= FRAME_MS) { last = now; draw(now); }
      schedule();
    };

    function schedule() {
      const running = !lost && onScreen && !reduced.matches && document.visibilityState === "visible";
      if (running && !raf) raf = requestAnimationFrame(tick);
      if (!running && raf) { cancelAnimationFrame(raf); raf = 0; }
    }

    const resize = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * RENDER_SCALE));
      const h = Math.max(1, Math.round(canvas.clientHeight * RENDER_SCALE));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        if (!lost) draw(performance.now());
      }
    };

    const onMotionChange = () => { if (!lost) draw(performance.now()); schedule(); };
    const onLost = (e: Event) => {
      e.preventDefault();
      lost = true;
      schedule();
      fallback();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      schedule();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", schedule);
    reduced.addEventListener("change", onMotionChange);
    canvas.addEventListener("webglcontextlost", onLost);

    resize();
    draw(performance.now());
    wrap.dataset.gl = "on";

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", schedule);
      reduced.removeEventListener("change", onMotionChange);
      canvas.removeEventListener("webglcontextlost", onLost);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, [forceFallback]);

  return (
    <div ref={wrapRef} aria-hidden="true" className={`hero-glow pointer-events-none select-none ${className}`}>
      <div className="hero-glow-fallback absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0 size-full" />
    </div>
  );
}
