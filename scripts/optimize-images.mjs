// Turns full-size PNG/JPG sources into the webp files the site serves.
// Drop a source next to its webp (same name) and this regenerates the webp
// whenever the source is newer. Runs before `next dev` and `next build`.
// The sources themselves are gitignored, only the webps are committed.

import { readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";

// Loaded only when there is something to convert, so deploys (where the
// gitignored sources don't exist) never depend on it
let sharp;
async function getSharp() {
  sharp ??= (await import("sharp")).default;
  return sharp;
}

const SOURCE_EXT = [".png", ".jpg", ".jpeg"];
const WIDTH = 2560;

const DIRS = [
  // Numbered app screens carry a transparent drop-shadow margin from the
  // Figma export; trim it so the rounded corners sit on the screen edge
  { dir: "public/assay screens", trim: (name) => /^\d+$/.test(name), quality: 82 },
  { dir: "public/gallery", trim: () => false, quality: 82 },
];

async function mtime(path) {
  try {
    return (await stat(path)).mtimeMs;
  } catch {
    return 0;
  }
}

// Crop to the opaque area, measured through the middle of each edge
async function opaqueBox(src) {
  const sharp = await getSharp();
  const { data, info } = await sharp(src, { limitInputPixels: false })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const opaque = (x, y) => data[(y * W + x) * 4 + 3] >= 250;
  let left = 0, right = W - 1, top = 0, bottom = H - 1;
  while (left < right && !opaque(left, H >> 1)) left++;
  while (right > left && !opaque(right, H >> 1)) right--;
  while (top < bottom && !opaque(W >> 1, top)) top++;
  while (bottom > top && !opaque(W >> 1, bottom)) bottom--;
  return { left, top, width: right - left + 1, height: bottom - top + 1 };
}

let converted = 0;
for (const { dir, trim, quality } of DIRS) {
  const files = await readdir(dir).catch(() => []);
  for (const file of files) {
    if (!SOURCE_EXT.includes(extname(file).toLowerCase())) continue;
    const name = basename(file, extname(file));
    const src = join(dir, file);
    const out = join(dir, `${name}.webp`);
    if ((await mtime(out)) >= (await mtime(src))) continue;

    const sharp = await getSharp();
    let img = sharp(src, { limitInputPixels: false });
    if (trim(name)) img = img.extract(await opaqueBox(src)).flatten({ background: "#ffffff" });
    await img.resize({ width: WIDTH, withoutEnlargement: true }).webp({ quality }).toFile(out);
    console.log(`optimized ${out}`);
    converted++;
  }
}
if (converted) console.log(`optimize-images: ${converted} updated`);
