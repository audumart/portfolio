/* Gallery page, design explorations */

import StickyHeader from "../components/StickyHeader";
import BackButton from "../components/BackButton";
import GalleryGrid, { type GalleryItem } from "./GalleryGrid";
import { notFound } from "next/navigation";
import { readdir, readFile } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const IMAGE_EXT = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif", ".svg"];
const VIDEO_EXT = [".mp4", ".webm", ".mov"];

// Everything dropped into public/gallery shows up here, ordered by filename
// (prefix files with 01-, 02-, ... to control the order)
async function getGalleryItems(): Promise<GalleryItem[]> {
  const dir = join(process.cwd(), "public/gallery");
  const files = await readdir(dir).catch(() => []);
  const items = files
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .flatMap((file) => {
      const ext = extname(file).toLowerCase();
      const kind = IMAGE_EXT.includes(ext) ? "image" : VIDEO_EXT.includes(ext) ? "video" : null;
      if (!kind) return [];
      const alt = basename(file, extname(file)).replace(/^\d+[-_ ]*/, "");
      return [{ file, kind, alt, src: `/gallery/${encodeURIComponent(file)}` } as const];
    });

  const measured = await Promise.all(
    items.map(async ({ file, kind, alt, src }) => ({
      src, alt, kind,
      ratio: await (kind === "image" ? imageRatio : videoRatio)(join(dir, file)),
    })),
  );

  // Portrait videos are phone recordings: give them the same tile shape as the
  // first portrait image (the phone mockup) and inset them where that mockup's
  // screen sits, so both read as the same phone at the same size.
  const phone = measured.find((m) => m.kind === "image" && m.ratio < 1);
  return measured.map((m) =>
    phone && m.kind === "video" && m.ratio < 1 ? { ...m, ratio: phone.ratio, screen: true } : m,
  );
}

// Read dimensions server-side so the layout is right on first paint.
// sharp ships with Next as an optional dependency; fall back if it's missing.
async function imageRatio(path: string): Promise<number> {
  try {
    const { default: sharp } = await import("sharp");
    const { width, height, orientation } = await sharp(path).metadata();
    if (!width || !height) return 4 / 3;
    // EXIF orientations 5-8 are rotated 90°, so width and height swap
    return orientation && orientation >= 5 ? height / width : width / height;
  } catch {
    return 4 / 3;
  }
}

// MP4/MOV store each track's display size in its "tkhd" box as 16.16 fixed
// point after a 3×3 matrix; the video track is the one with a non-zero size.
// A matrix with a=0 means the track is rotated 90°, so width and height swap.
async function videoRatio(path: string): Promise<number> {
  try {
    const buf = await readFile(path);
    for (let i = buf.indexOf("tkhd"); i >= 0; i = buf.indexOf("tkhd", i + 4)) {
      const matrix = i + 8 + (buf[i + 4] === 1 ? 32 : 20) + 16;
      const width = buf.readUInt32BE(matrix + 36) / 65536;
      const height = buf.readUInt32BE(matrix + 40) / 65536;
      if (!width || !height) continue;
      const rotated = buf.readInt32BE(matrix) === 0;
      return rotated ? height / width : width / height;
    }
  } catch {}
  return 16 / 9;
}

const A = {
  hline:     "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:    "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal:  "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright: "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:   "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
};

function GridTile({ index, left }: { index: number; left: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-[1461px] w-[1513px] -translate-x-1/2 origin-top scale-[0.27] md:scale-[0.53] lg:scale-[0.71] xl:scale-[1] opacity-[0.16] xl:opacity-[0.11]"
      style={{ top: `calc(var(--tile-step) * ${index})`, left }}
    >
      <div className="absolute h-[1049px] w-[1440px]" style={{ left: 37, top: 0 }}>
        <img src={A.hline} alt="" className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div
        className="absolute flex h-[931px] w-[1277px] items-center justify-center"
        style={{ left: "50%", top: 80, transform: "translateX(-50%)" }}
      >
        <div style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
          <div className="relative h-[1277px] w-[931px]">
            <img src={A.vlines} alt="" className="absolute inset-0 block size-full max-w-none" />
          </div>
        </div>
      </div>
      <div className="absolute h-[385px] w-[119px]" style={{ left: 1394, top: 344 }}>
        <img src={A.diagonal} alt="" className="absolute inset-0 block size-full max-w-none" />
      </div>
      <div className="absolute h-[385px] w-[119px]" style={{ left: 0, top: 344 }}>
        <img src={A.diagonal} alt="" className="absolute inset-0 block size-full max-w-none" />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 flex flex-col md:flex-row h-auto md:h-[114px] items-center justify-center md:justify-between gap-[16px] md:gap-0 px-[24px] md:px-[60px] xl:px-[120px] py-[24px] md:py-0"
    >
      <div className="flex items-center gap-[8px]">
        <div className="h-[28px] w-[25px] md:h-[36px] md:w-[33px] shrink-0">
          <img src={A.copyright} alt="" className="block size-full" />
        </div>
        <p className="font-ui text-[13px] md:text-[16px] font-medium leading-normal text-white whitespace-nowrap">
          Martins Audu 2026
        </p>
      </div>
      <div className="flex items-center gap-[8px]">
        <div className="hidden md:block h-[78px] w-[58px] shrink-0">
          <img src={A.connect} alt="" className="block size-full" />
        </div>
        <a
          href="mailto:audumart@gmail.com"
          className="font-ui inline-flex items-center overflow-clip rounded-[30px] bg-white px-[10px] py-[5px] md:px-[12px] md:py-[7px] text-[13px] md:text-[16px] font-medium leading-[20px] tracking-[0.32px] text-[#415a77] whitespace-nowrap transition-opacity hover:opacity-80"
        >
          audumart@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default async function GalleryPage() {
  // Hidden in production until it's ready
  if (process.env.NODE_ENV !== "development") notFound();

  const items = await getGalleryItems();

  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => i).map((i) => (
          <GridTile key={i} index={i} left="calc(50% - 0.5px)" />
        ))}
      </div>

      <StickyHeader defaultActive="GALLERY" />

      <main className="relative z-10 flex-1 pt-[80px] px-[24px] md:px-[40px] xl:px-[80px]">

        <div className="mt-[40px] xl:mt-[72px] enter-1">
          <BackButton />
        </div>

        {/* No visible text on this page; the heading is kept for screen readers */}
        <h1 className="sr-only">Design explorations</h1>

        {/* Breaks out of the 1440px column to span the window, with
            tormo.at's gutter: 16px on phones up to 160px on very wide screens */}
        {items.length > 0 && (
          <section aria-label="Gallery" className="mt-[32px] xl:mt-[48px] mx-[calc(50%-50vw)] px-[clamp(1rem,-0.375rem+2.25vw,10rem)] enter-2">
            <GalleryGrid items={items} />
          </section>
        )}

      </main>

      <div className="mt-[60px] xl:mt-[102px] enter-3">
        <Footer />
      </div>
    </div>
  );
}
