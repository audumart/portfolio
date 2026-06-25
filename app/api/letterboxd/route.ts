import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function extractPoster(description: string): string | null {
  const match = description.match(/<img src="([^"]+)"/);
  return match ? match[1] : null;
}

function toStars(rating: number): string {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return "★".repeat(full) + (half ? "½" : "");
}

export async function GET() {
  const res = await fetch("https://letterboxd.com/chilloutsenpai/rss/", {
    next: { revalidate: 0 },
  });

  if (!res.ok) return NextResponse.json({ error: "feed_failed" }, { status: 500 });

  const xml = await res.text();

  // Grab the first diary item (has <letterboxd:filmTitle>)
  const itemMatch = xml.match(/<item>([\s\S]*?)<\/item>/);
  if (!itemMatch) return NextResponse.json({ error: "no_items" }, { status: 500 });

  const item = itemMatch[1];

  const title   = item.match(/<letterboxd:filmTitle>(.*?)<\/letterboxd:filmTitle>/)?.[1] ?? null;
  const year    = item.match(/<letterboxd:filmYear>(.*?)<\/letterboxd:filmYear>/)?.[1] ?? null;
  const ratingRaw = item.match(/<letterboxd:memberRating>(.*?)<\/letterboxd:memberRating>/)?.[1];
  const link    = item.match(/<link>(.*?)<\/link>/)?.[1] ?? null;
  const desc    = item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1] ?? "";
  const poster  = extractPoster(desc);
  const rating  = ratingRaw ? toStars(parseFloat(ratingRaw)) : null;

  if (!title) return NextResponse.json({ error: "parse_failed" }, { status: 500 });

  return NextResponse.json({ title, year, rating, poster, link });
}
