"use client";

import { useState } from "react";

export default function ResearcherBubble() {
  const [active, setActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setActive((a) => !a)}
      className={[
        "group relative inline-flex cursor-pointer items-center gap-2 align-middle rounded-full",
        "border transition-all duration-300 ease-out",
        active
          ? "px-6 py-[6px] border-white/70 bg-white/30 shadow-[0_0_28px_rgba(255,255,255,0.35)]"
          : "px-3 py-1 border-white/25 bg-white/10 hover:px-6 hover:py-[6px] hover:border-white/70 hover:bg-white/30 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)]",
      ].join(" ")}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
      aria-pressed={active}
    >
      {/* Magnifying glass */}
      <span className="relative flex shrink-0 items-center justify-center">
        <svg
          width="14"
          height="14"
          viewBox="0 0 13 13"
          fill="none"
          aria-hidden="true"
          className={[
            "transition-all duration-300",
            active ? "scale-[1.2]" : "group-hover:scale-[1.2]",
          ].join(" ")}
        >
          <circle
            cx="5.5"
            cy="5.5"
            r="3.8"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.3"
          />
          <line
            x1="8.4"
            y1="8.4"
            x2="11.8"
            y2="11.8"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>

        {/* Pulse ring on active */}
        {active && (
          <span className="pointer-events-none absolute inset-[-4px] rounded-full border border-white/50 animate-ping" />
        )}
      </span>

      <span className={`transition-colors duration-300 ${active ? "text-white" : "text-white/90 group-hover:text-white"}`}>
        researcher
      </span>
    </button>
  );
}
