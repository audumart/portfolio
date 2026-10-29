"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TOP_LAYER_EVENT } from "../components/CursorDot";

/* Justified rows, 1:1 with tormo.at's gallery: rows of 3 items ≥1024px,
   2 ≥640px, 1 below, 12px gaps, 0.3rem corners. Every item in a row shares
   one height and keeps its own aspect ratio, so rows fill the width exactly
   and nothing is cropped.

   The maths is pure CSS: each tile grows in proportion to its ratio
   (flex-grow ∝ ratio) and holds that ratio (aspect-ratio), which makes
   width_i = (rowWidth - gaps) * ratio_i / Σratio, so every height is
   (rowWidth - gaps) / Σratio. Rows for each column count are rendered up
   front and swapped at breakpoints. */

export type GalleryItem = {
  src: string;
  alt: string;
  kind: "image" | "video";
  /** width / height, read server-side */
  ratio: number;
};

const LAYOUTS = [
  { perRow: 1, className: "flex sm:hidden" },
  { perRow: 2, className: "hidden sm:flex lg:hidden" },
  { perRow: 3, className: "hidden lg:flex" },
];

function toRows(items: GalleryItem[], perRow: number) {
  const rows: GalleryItem[][] = [];
  for (let i = 0; i < items.length; i += perRow) rows.push(items.slice(i, i + perRow));
  return rows;
}

function Media({ item }: { item: GalleryItem }) {
  const isVideo = item.kind === "video";
  // rounded-[inherit] + isolate keep corners clipped on video in Safari.
  // Tiles take each item's own shape, so both fill their tile exactly.
  const media = "block size-full rounded-[inherit] object-cover";
  return isVideo ? (
    // Plays like a GIF, as on the TSE page: autoplay, loop, muted, no controls
    <video
      autoPlay loop muted playsInline aria-label={item.alt} src={item.src}
      className={media}
    />
  ) : (
    <img src={item.src} alt={item.alt} loading="lazy" className={media} />
  );
}

const FIGURE = "relative m-0 min-w-0 isolate overflow-hidden rounded-[0.3rem]";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      {LAYOUTS.map(({ perRow, className }) => (
        <div key={perRow} className={`${className} flex-col gap-[12px]`}>
          {toRows(items, perRow).map((row, i) => (
            <div key={i} className="flex gap-[12px]">
              {row.map((item) => (
                <button
                  key={item.src}
                  type="button"
                  aria-label={`Open ${item.alt}`}
                  onClick={() => setOpen(items.indexOf(item))}
                  className={`${FIGURE} bg-white/5 block cursor-zoom-in p-0 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                  // grow is scaled ×100: flex-grow values summing below 1 only hand out that
                  // fraction of the free space, which left lone tall images half-width
                  style={{ flex: `${item.ratio * 100} 1 0`, aspectRatio: item.ratio }}
                >
                  <Media item={item} />
                </button>
              ))}
            </div>
          ))}
        </div>
      ))}
      {open !== null && <Lightbox items={items} index={open} onChange={setOpen} />}
    </>
  );
}

/* Popup viewer. Every item opens in the same fixed-size stage, fitted
   (contain) without cropping, so all shots start at an identical size
   whatever their shape. Esc / backdrop click closes, arrow keys step. */
function Lightbox({ items, index, onChange }: { items: GalleryItem[]; index: number; onChange: (i: number | null) => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const item = items[index];
  const step = useCallback((d: number) => onChange((index + d + items.length) % items.length), [index, items.length, onChange]);

  useEffect(() => {
    const dialog = ref.current;
    dialog?.showModal();
    // Let the custom cursor re-enter the top layer above this dialog
    window.dispatchEvent(new Event(TOP_LAYER_EVENT));
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  const arrow = "absolute top-1/2 -translate-y-1/2 flex size-[40px] items-center justify-center rounded-full bg-white/10 text-white text-[20px] transition-colors hover:bg-white/20";

  return (
    <dialog
      ref={ref}
      aria-label={item.alt}
      onClose={() => onChange(null)}
      // clicks on the backdrop land on the dialog itself
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      className="fixed inset-0 m-0 flex h-full max-h-none w-full max-w-none items-center justify-center bg-black/85 p-0 backdrop:bg-transparent"
    >
      {/* Fixed stage: the same width and height for every item */}
      <div className="relative h-[min(80svh,860px)] w-[min(88vw,1320px)]">
        {item.kind === "video" ? (
          <video
            key={item.src} autoPlay loop muted playsInline aria-label={item.alt} src={item.src}
            className="block size-full object-contain"
          />
        ) : (
          <img key={item.src} src={item.src} alt={item.alt} className="block size-full object-contain" />
        )}
      </div>

      {items.length > 1 && (
        <>
          <button type="button" aria-label="Previous" onClick={() => step(-1)} className={`${arrow} left-[16px] md:left-[24px]`}>‹</button>
          <button type="button" aria-label="Next" onClick={() => step(1)} className={`${arrow} right-[16px] md:right-[24px]`}>›</button>
        </>
      )}
      <button
        type="button" aria-label="Close" onClick={() => ref.current?.close()}
        className="absolute top-[16px] right-[16px] md:top-[24px] md:right-[24px] flex size-[40px] items-center justify-center rounded-full bg-white/10 text-white text-[22px] transition-colors hover:bg-white/20"
      >
        ×
      </button>

      {/* Description and position, as small tags under the stage */}
      <div className="pointer-events-none absolute bottom-[16px] md:bottom-[24px] left-1/2 flex -translate-x-1/2 items-center gap-[6px] whitespace-nowrap font-mono text-[11px] leading-none text-[#1a1a1a]">
        <span className="rounded-[3px] bg-white px-[8px] py-[6px]">{item.alt}</span>
        {items.length > 1 && (
          <span className="rounded-[3px] bg-white px-[8px] py-[6px] tabular-nums">
            {index + 1} / {items.length}
          </span>
        )}
      </div>
    </dialog>
  );
}
