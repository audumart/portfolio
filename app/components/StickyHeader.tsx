"use client";
import { useEffect, useState } from "react";
import NavPill from "./NavPill";

export default function StickyHeader({ defaultActive }: { defaultActive?: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-[16px] inset-x-0 z-50 flex justify-center transition-opacity duration-300 pointer-events-none ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <nav
        aria-label="Primary navigation"
        className={visible ? "pointer-events-auto" : ""}
      >
        <NavPill defaultActive={defaultActive} />
      </nav>
    </header>
  );
}
