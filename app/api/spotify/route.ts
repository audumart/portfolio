import { NextResponse } from "next/server";

const CLIENT_ID     = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");

async function getAccessToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
  });
  return res.json();
}

export async function GET() {
  const { access_token } = await getAccessToken();

  const nowPlaying = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: { Authorization: `Bearer ${access_token}` },
  });

  if (nowPlaying.status === 204 || nowPlaying.status > 400) {
    const recentRes = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      { headers: { Authorization: `Bearer ${access_token}` } }
    );
    const recent = await recentRes.json();
    const track = recent.items?.[0]?.track;
    if (!track) return NextResponse.json({ isPlaying: false });
    return NextResponse.json({
      isPlaying: false,
      title: track.name,
      artist: track.artists.map((a: { name: string }) => a.name).join(", "),
      albumArt: track.album.images[0]?.url,
      songUrl: track.external_urls.spotify,
    });
  }

  const data = await nowPlaying.json();
  const track = data.item;

  return NextResponse.json({
    isPlaying: data.is_playing,
    title: track.name,
    artist: track.artists.map((a: { name: string }) => a.name).join(", "),
    albumArt: track.album.images[0]?.url,
    songUrl: track.external_urls.spotify,
  });
}
