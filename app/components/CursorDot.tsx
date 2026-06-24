"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_MQ = "(min-width: 1280px) and (pointer: fine) and (hover: hover)";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  /* Inject cursor:none at runtime, sits after all static stylesheets,
     guaranteed to win the cascade on every browser */
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const dot = dotRef.current;
    if (!dot) return;
    const onMove = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-[32px] w-[32px] rounded-full bg-white"
      style={{
        mixBlendMode: "difference",
        willChange: "transform",
        transform: "translate(-100px, -100px)",
      }}
    />
  );
}
