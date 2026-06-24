"use client";

interface VideoShowcaseProps {
  src: string;
  alt?: string;
  className?: string;
}

export default function VideoShowcase({ src, alt = "", className = "" }: VideoShowcaseProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-[5px] bg-black ${className}`}>
      <div className="relative w-full" style={{ paddingTop: "45.47%" }}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            animation: "showcase-breathe 12s ease-in-out infinite",
            transformOrigin: "center center",
          }}
        />
        {/* Vignette overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at center, transparent 40%, rgba(0,0,0,0.45) 100%)",
          }}
        />
      </div>
    </div>
  );
}
