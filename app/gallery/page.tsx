/* Gallery page, design explorations */

import StickyHeader from "../components/StickyHeader";
import BackButton from "../components/BackButton";
import GalleryGrid, { type GalleryItem } from "./GalleryGrid";
import { notFound } from "next/navigation";
import { readdir } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const IMAGE_EXT = [".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif", ".svg"];
const VIDEO_EXT = [".mp4", ".webm", ".mov"];

// Everything dropped into public/gallery shows up here, ordered by filename
// (prefix files with 01-, 02-, ... to control the order)
async function getGalleryItems(): Promise<GalleryItem[]> {
  const files = await readdir(join(process.cwd(), "public/gallery")).catch(() => []);
  return files
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .flatMap((file): GalleryItem[] => {
      const ext = extname(file).toLowerCase();
      const kind = IMAGE_EXT.includes(ext) ? "image" : VIDEO_EXT.includes(ext) ? "video" : null;
      if (!kind) return [];
      const alt = basename(file, extname(file)).replace(/^\d+[-_ ]*/, "");
      return [{ src: `/gallery/${encodeURIComponent(file)}`, alt, kind }];
    });
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

        <section aria-label="Design explorations" className="mt-[24px] xl:mt-[32px] enter-1">
          <h1 className="font-ui text-[24px] md:text-[32px] xl:text-[40px] leading-none tracking-[-0.02em] text-white">
            Design explorations
          </h1>
          <p className="mt-[12px] xl:mt-[16px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Component studies, interaction concepts, and visual directions.
          </p>
        </section>

        {items.length > 0 && (
          <section aria-label="Gallery" className="mt-[32px] xl:mt-[48px] enter-2">
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
