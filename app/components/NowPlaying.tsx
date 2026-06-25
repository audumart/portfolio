"use client";

import { useEffect, useState } from "react";

interface Track {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumArt?: string;
  songUrl?: string;
}

export default function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const fetch_ = () =>
      fetch("/api/spotify")
        .then((r) => r.json())
        .then(setTrack)
        .catch(() => {});

    fetch_();
    const id = setInterval(fetch_, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!track?.title) return null;

  return (
    <a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-[10px] rounded-[8px] border border-white/15 bg-white/8 px-[12px] py-[10px] transition-all duration-200 hover:border-white/30 hover:bg-white/15"
      style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
    >
      {track.albumArt && (
        <img
          src={track.albumArt}
          alt={track.title}
          className="h-[36px] w-[36px] shrink-0 rounded-[4px] object-cover"
        />
      )}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-[6px] mb-[2px]">
          <span className="relative flex h-[8px] w-[8px] shrink-0">
            {track.isPlaying ? (
              <>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1DB954] opacity-60" />
                <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-[#1DB954]" />
              </>
            ) : (
              <span className="relative inline-flex h-[8px] w-[8px] rounded-full bg-white/30" />
            )}
          </span>
          <span className="font-ui text-[11px] text-white/50 tracking-[0.5px] uppercase">
            {track.isPlaying ? "Now playing" : "Last played"}
          </span>
        </div>
        <p className="font-ui text-[13px] font-medium text-white truncate max-w-[160px]">{track.title}</p>
        <p className="font-ui text-[12px] text-white/60 truncate max-w-[160px]">{track.artist}</p>
      </div>
    </a>
  );
}
