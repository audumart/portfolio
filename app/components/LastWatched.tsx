"use client";

import { useEffect, useState } from "react";

interface Film {
  title: string;
  year: string;
  rating: string | null;
  poster: string | null;
  link: string;
}

export default function LastWatched() {
  const [film, setFilm] = useState<Film | null>(null);

  useEffect(() => {
    fetch("/api/letterboxd")
      .then((r) => r.json())
      .then((d) => d.title && setFilm(d))
      .catch(() => {});
  }, []);

  if (!film) return null;

  return (
    <a
      href={film.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-[10px] rounded-[8px] border border-white/15 bg-white/8 px-[12px] py-[10px] transition-all duration-200 hover:border-white/30 hover:bg-white/15"
      style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
    >
      {film.poster && (
        <img
          src={film.poster}
          alt={film.title}
          className="h-[36px] w-[24px] shrink-0 rounded-[3px] object-cover"
        />
      )}
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-[6px] mb-[2px]">
          <span className="font-ui text-[11px] text-white/50 tracking-[0.5px] uppercase">
            last watched
          </span>
        </div>
        <p className="font-ui text-[13px] font-medium text-white truncate max-w-[160px]">
          {film.title} <span className="text-white/40 font-normal">{film.year}</span>
        </p>
        {film.rating && (
          <p className="font-ui text-[12px] text-white/60">{film.rating}</p>
        )}
      </div>
    </a>
  );
}
