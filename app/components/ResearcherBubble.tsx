"use client";

import { useState } from "react";

export default function ResearcherBubble() {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setActive((a) => !a)}
      className={[
        "inline-flex cursor-pointer items-center gap-1.5 align-middle rounded-full px-3 py-1",
        "border transition-all duration-200",
        active
          ? "scale-105 border-white/50 bg-white/25 shadow-[0_0_12px_rgba(255,255,255,0.2)]"
          : "border-white/25 bg-white/10 hover:scale-105 hover:border-white/40 hover:bg-white/18 hover:shadow-[0_0_8px_rgba(255,255,255,0.12)]",
      ].join(" ")}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      aria-pressed={active}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        aria-hidden="true"
        className={`transition-transform duration-200 ${active ? "scale-110" : ""}`}
      >
        <circle
          cx="5.5"
          cy="5.5"
          r="3.8"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1.3"
        />
        <line
          x1="8.4"
          y1="8.4"
          x2="11.8"
          y2="11.8"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      <span className={`transition-all duration-200 ${active ? "text-white" : "text-white/90"}`}>
        researcher
      </span>
    </button>
  );
}
