"use client";

/* Justified gallery: every tile keeps its media's aspect ratio, and each row
   stretches to fill the full width at a shared height. */

import { useState } from "react";

export type GalleryItem = {
  src: string;
  alt: string;
  kind: "image" | "video";
};

// Used until the real size is known from the loaded file
const FALLBACK_RATIO = 4 / 3;

function Tile({ item }: { item: GalleryItem }) {
  const [ratio, setRatio] = useState(FALLBACK_RATIO);

  return (
    <figure
      className="relative m-0 overflow-hidden bg-white/5"
      style={{
        flexGrow: ratio,
        flexBasis: `calc(var(--row-h) * ${ratio})`,
        aspectRatio: ratio,
      }}
    >
      {item.kind === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label={item.alt}
          className="absolute inset-0 size-full max-w-none object-cover"
          src={item.src}
          onLoadedMetadata={(e) => {
            const v = e.currentTarget;
            if (v.videoWidth && v.videoHeight) setRatio(v.videoWidth / v.videoHeight);
          }}
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="absolute inset-0 size-full max-w-none object-cover"
          onLoad={(e) => {
            const img = e.currentTarget;
            if (img.naturalWidth && img.naturalHeight) setRatio(img.naturalWidth / img.naturalHeight);
          }}
        />
      )}
    </figure>
  );
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="flex flex-wrap gap-[8px] md:gap-[10px] [--row-h:200px] md:[--row-h:280px] xl:[--row-h:360px]">
      {items.map((item) => (
        <Tile key={item.src} item={item} />
      ))}
      {/* Soaks up leftover space so the last row isn't stretched */}
      <div aria-hidden="true" className="h-0" style={{ flexGrow: 999 }} />
    </div>
  );
}
