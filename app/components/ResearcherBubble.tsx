"use client";

export default function ResearcherBubble() {
  const scrollToResearch = () => {
    const el = document.getElementById("about");
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToResearch}
      className={[
        "group relative inline-flex cursor-pointer items-center gap-2 align-middle rounded-full px-3 py-1",
        "border border-white/25 bg-white/10 transition-all duration-300 ease-out origin-center",
        "hover:scale-110 hover:border-white/70 hover:bg-white/30 hover:shadow-[0_0_28px_rgba(255,255,255,0.35)]",
        "active:scale-105",
      ].join(" ")}
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <span className="relative flex shrink-0 items-center justify-center">
        <svg
          width="14"
          height="14"
          viewBox="0 0 13 13"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          <circle cx="5.5" cy="5.5" r="3.8" stroke="rgba(255,255,255,0.9)" strokeWidth="1.3" />
          <line x1="8.4" y1="8.4" x2="11.8" y2="11.8" stroke="rgba(255,255,255,0.9)" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-white/90 transition-colors duration-300 group-hover:text-white">
        researcher
      </span>
    </button>
  );
}
