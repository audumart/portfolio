"use client";

import { useState, useRef, useCallback, useEffect } from "react";

/* ── colour math ──────────────────────────────────────────────── */

function hsvToHex(h: number, s: number, v: number): string {
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if      (h < 60)  { r = c; g = x; b = 0; }
  else if (h < 120) { r = x; g = c; b = 0; }
  else if (h < 180) { r = 0; g = c; b = x; }
  else if (h < 240) { r = 0; g = x; b = c; }
  else if (h < 300) { r = x; g = 0; b = c; }
  else              { r = c; g = 0; b = x; }
  const hex = (n: number) =>
    Math.round((n + m) * 255).toString(16).padStart(2, "0");
  return `#${hex(r)}${hex(g)}${hex(b)}`;
}

function hexToHsv(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d   = max - min;
  let h = 0;
  if (d !== 0) {
    if      (max === r) h = (((g - b) / d) % 6) * 60;
    else if (max === g) h = ((b - r) / d + 2) * 60;
    else                h = ((r - g) / d + 4) * 60;
    if (h < 0) h += 360;
  }
  return [h, max === 0 ? 0 : d / max, max];
}

/* ── helpers ──────────────────────────────────────────────────── */

function clientXY(e: MouseEvent | TouchEvent): { x: number; y: number } {
  if ("touches" in e) {
    const t = e.touches[0] ?? e.changedTouches[0];
    return { x: t.clientX, y: t.clientY };
  }
  return { x: e.clientX, y: e.clientY };
}

/* ── component ────────────────────────────────────────────────── */

export default function DesignerSwatch() {
  const [open, setOpen] = useState(false);
  const [hue, setHue]   = useState(258);
  const [sat, setSat]   = useState(0.62);
  const [val, setVal]   = useState(0.91);
  const [hexInput, setHexInput] = useState("6B52E8");

  const color    = hsvToHex(hue, sat, val);
  const hueColor = hsvToHex(hue, 1, 1);

  const svRef      = useRef<HTMLDivElement>(null);
  const hueRef     = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLSpanElement>(null);
  const dragSV  = useRef(false);
  const dragHue = useRef(false);

  /* sync hex display */
  useEffect(() => {
    setHexInput(color.slice(1).toUpperCase());
  }, [color]);

  /* close on outside click or touch */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = "touches" in e ? e.touches[0]?.target : e.target;
      if (popoverRef.current && !popoverRef.current.contains(target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler as EventListener);
    document.addEventListener("touchstart", handler as EventListener);
    return () => {
      document.removeEventListener("mousedown", handler as EventListener);
      document.removeEventListener("touchstart", handler as EventListener);
    };
  }, [open]);

  const pickSV = useCallback((x: number, y: number) => {
    if (!svRef.current) return;
    const rect = svRef.current.getBoundingClientRect();
    setSat(Math.max(0, Math.min(1, (x - rect.left) / rect.width)));
    setVal(Math.max(0, Math.min(1, 1 - (y - rect.top) / rect.height)));
  }, []);

  const pickHue = useCallback((x: number) => {
    if (!hueRef.current) return;
    const rect = hueRef.current.getBoundingClientRect();
    setHue(Math.max(0, Math.min(360, ((x - rect.left) / rect.width) * 360)));
  }, []);

  /* global mouse + touch move / up */
  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragSV.current && !dragHue.current) return;
      const { x, y } = clientXY(e);
      if (dragSV.current)  pickSV(x, y);
      if (dragHue.current) pickHue(x);
    };
    const onUp = () => { dragSV.current = false; dragHue.current = false; };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove as EventListener, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("touchend", onUp);
    };
  }, [pickSV, pickHue]);

  return (
    <span
      ref={popoverRef}
      className="relative inline-flex items-center align-middle"
      onClick={() => setOpen((o) => !o)}
    >
      {/* ── trigger: dark bar ── */}
      <span
        aria-label="Open colour picker"
        role="button"
        tabIndex={0}
        className={[
          "inline-flex items-center gap-[6px] rounded-[5px] border px-[7px] py-[3px]",
          "transition-all duration-200 cursor-pointer",
          open
            ? "border-[#555] bg-[#1c1c1c] shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
            : "border-[#3a3a3a] bg-[#1c1c1c] hover:border-[#555] hover:bg-[#242424]",
        ].join(" ")}
      >
        <span
          className="shrink-0 rounded-[3px] border border-white/20"
          style={{ width: 12, height: 12, background: color }}
        />
        <span className="text-[1em] text-white/90 leading-none">designer</span>
      </span>

      {/* ── floating panel ── */}
      {open && (
        <div
          className="absolute left-0 top-[calc(100%+10px)] z-50 w-[228px] select-none overflow-hidden rounded-[8px] border border-[#404040] bg-[#1e1e1e] shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          style={{ animation: "picker-in 0.18s ease-out both" }}
          onMouseDown={(e) => e.stopPropagation()}
          onTouchStart={(e) => e.stopPropagation()}
        >
          {/* Saturation–value gradient */}
          <div
            ref={svRef}
            className="relative h-[152px] w-full"
            style={{
              background: `linear-gradient(to bottom, transparent, #000),
                           linear-gradient(to right, #fff, ${hueColor})`,
              touchAction: "none",
            }}
            onMouseDown={(e) => { dragSV.current = true; pickSV(e.clientX, e.clientY); }}
            onTouchStart={(e) => { dragSV.current = true; const t = e.touches[0]; pickSV(t.clientX, t.clientY); }}
          >
            <div
              className="pointer-events-none absolute h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.4)]"
              style={{ left: `${sat * 100}%`, top: `${(1 - val) * 100}%` }}
            />
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-[10px] p-[10px]">
            {/* Preview + hue slider */}
            <div className="flex items-center gap-[8px]">
              <div
                className="shrink-0 h-[26px] w-[26px] rounded-[4px] border border-white/10"
                style={{ background: color }}
              />
              <div
                ref={hueRef}
                className="relative h-[10px] flex-1 rounded-full"
                style={{
                  background: "linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)",
                  touchAction: "none",
                }}
                onMouseDown={(e) => { dragHue.current = true; pickHue(e.clientX); }}
                onTouchStart={(e) => { dragHue.current = true; pickHue(e.touches[0].clientX); }}
              >
                <div
                  className="pointer-events-none absolute top-1/2 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow-md"
                  style={{ left: `${(hue / 360) * 100}%`, background: hueColor }}
                />
              </div>
            </div>

            {/* Hex input */}
            <div className="flex items-center gap-[6px] rounded-[4px] border border-[#383838] bg-[#2a2a2a] px-[8px] py-[5px]">
              <span className="font-mono text-[11px] text-[#666]">#</span>
              <input
                type="text"
                value={hexInput}
                maxLength={6}
                spellCheck={false}
                onChange={(e) => {
                  const v = e.target.value.replace(/[^0-9a-fA-F]/g, "").toUpperCase();
                  setHexInput(v);
                  if (v.length === 6) {
                    const [h, s, vv] = hexToHsv(`#${v}`);
                    setHue(h); setSat(s); setVal(vv);
                  }
                }}
                className="w-full bg-transparent font-mono text-[12px] text-white outline-none"
              />
              <button
                type="button"
                aria-label="Copy hex"
                onClick={(e) => { e.stopPropagation(); navigator.clipboard?.writeText(color); }}
                className="shrink-0 text-[#666] hover:text-white transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <rect x="4" y="4" width="7" height="7" rx="1" opacity=".6" />
                  <rect x="1" y="1" width="7" height="7" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </button>
            </div>

            {/* HSB readout */}
            <div className="flex gap-[6px]">
              {[
                { label: "H", value: Math.round(hue) },
                { label: "S", value: Math.round(sat * 100) },
                { label: "B", value: Math.round(val * 100) },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-1 flex-col items-center gap-[2px] rounded-[3px] border border-[#383838] bg-[#2a2a2a] py-[4px]"
                >
                  <span className="font-mono text-[10px] text-white">{value}</span>
                  <span className="font-mono text-[9px] text-[#555]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
