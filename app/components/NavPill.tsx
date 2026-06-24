"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "WORK",    href: "/",                      internal: true  },
  { label: "ABOUT",   href: "/about",                 internal: true  },
  { label: "CONTACT", href: "mailto:audumart@gmail.com", internal: false },
];

export default function NavPill({ defaultActive = "WORK" }: { defaultActive?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = hovered ?? defaultActive;

  return (
    <div className="nav-pin flex items-center gap-[16px] overflow-clip rounded-[10px] bg-white px-[16px] py-[8px]">
      {links.map(({ label, href, internal }) => {
        const isActive = active === label;
        const inner = (
          <>
            <span
              className="absolute inset-0 rounded-[5px] transition-all duration-200"
              style={{ background: isActive ? "#415a77" : "transparent", opacity: isActive ? 1 : 0 }}
            />
            <span
              className="relative z-10 flex h-full items-center px-[15px] font-ui text-[16px] leading-normal tracking-[0.16px] whitespace-nowrap transition-colors duration-200"
              style={{ fontWeight: label === defaultActive ? 700 : 400, color: isActive ? "#ffffff" : "#415a77" }}
            >
              {label}
            </span>
          </>
        );

        const shared = {
          onMouseEnter: () => setHovered(label),
          onMouseLeave: () => setHovered(null),
          className: "relative block h-[29px] rounded-[5px] transition-all duration-200",
        };

        return internal ? (
          <Link key={label} href={href} {...shared}>{inner}</Link>
        ) : (
          <a key={label} href={href} {...shared}>{inner}</a>
        );
      })}
    </div>
  );
}
