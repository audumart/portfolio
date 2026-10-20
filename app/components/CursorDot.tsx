"use client";

import { useEffect, useRef, useState } from "react";

const DESKTOP_MQ = "(min-width: 1280px) and (pointer: fine) and (hover: hover)";

export default function CursorDot() {
  const dotRef = useRef<SVGSVGElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  /* Inject cursor:none at runtime, sits after all static stylesheets,
     guaranteed to win the cascade on every browser */
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_MQ);
    setIsDesktop(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const dot = dotRef.current;
    if (!dot) return;
    const onMove = (e: MouseEvent) => {
      // arrow tip sits ~1px in from the top-left corner of the svg
      dot.style.transform = `translate(${e.clientX - 1}px, ${e.clientY - 1}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [isDesktop]);

  if (!isDesktop) return null;

  /* Arrow from public/mouse pointer.svg, inlined so the outline can keep a
     1px stroke at cursor size (scaled as an <img>, its lines go hairline).
     Plain white outline. */
  return (
    <svg
      ref={dotRef}
      aria-hidden="true"
      viewBox="0 0 109 85"
      fill="none"
      stroke="white"
      strokeWidth={1.2}
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-[31px] w-[40px]"
      style={{
        willChange: "transform",
        transform: "translate(-100px, -100px)",
      }}
    >
      <g>
        <path vectorEffect="non-scaling-stroke" d="M106.939 57.7362V57.7561C106.939 59.1461 106.049 60.3561 104.269 61.3761C102.479 62.4161 100.379 62.9262 97.9591 62.9162C95.5291 62.9162 93.4191 62.3962 91.6191 61.3562L42.9392 33.2561L24.8691 22.8161L20.8792 20.5161V22.8161L20.9991 40.5862V41.3462C20.9991 41.6462 20.9591 41.9261 20.8891 42.2061C20.6091 43.2761 19.7791 44.1862 18.4091 44.9362C16.6691 45.8762 14.5891 46.3662 12.1691 46.4262C9.63915 46.4262 7.47916 45.9261 5.67916 44.9561C3.87916 43.9761 2.97914 42.7562 2.96914 41.2962L2.88912 27.0562L2.78915 7.88614C2.77915 6.42614 3.61916 5.20618 5.29916 4.23618C6.97916 3.26618 9.08916 2.78617 11.6191 2.79617L69.4891 2.89615C72.0191 2.89615 74.1292 3.42615 75.8192 4.45615C77.5092 5.49615 78.3591 6.74615 78.3691 8.20615C78.2691 9.60615 77.4091 10.8062 75.7791 11.8062C74.1491 12.8062 72.0691 13.3062 69.5391 13.3062L33.4891 13.2362L50.1591 22.8662L68.2492 33.3062L104.229 54.0761C106.029 55.1161 106.929 56.3362 106.939 57.7362Z" />
        <path vectorEffect="non-scaling-stroke" d="M106.941 57.7562V77.7362C106.951 79.1362 106.061 80.3462 104.271 81.3762C102.481 82.4162 100.381 82.9262 97.9607 82.9162C95.5307 82.9162 93.4207 82.3962 91.6207 81.3562L21.0007 40.5862L20.8906 22.8162V20.5162L24.8707 22.8162L42.9407 33.2562L91.6207 61.3562C93.4207 62.3962 95.5307 62.9162 97.9607 62.9162C100.381 62.9262 102.481 62.4162 104.271 61.3762C106.051 60.3562 106.941 59.1462 106.941 57.7562Z" />
        <path vectorEffect="non-scaling-stroke" d="M78.3683 8.20618V28.2062C78.2683 29.6062 77.4083 30.8062 75.7783 31.8062C74.1483 32.8062 72.0683 33.3062 69.5383 33.3062H68.2483L50.1583 22.8662L33.4883 13.2362L69.5383 13.3062C72.0683 13.3062 74.1483 12.8062 75.7783 11.8062C77.4083 10.8062 78.2683 9.60618 78.3683 8.20618Z" />
        <path vectorEffect="non-scaling-stroke" d="M20.9991 41.3463V61.3263C21.0091 62.7863 20.139 63.9863 18.409 64.9363C16.669 65.8763 14.589 66.3663 12.169 66.4263C9.63906 66.4263 7.47907 65.9263 5.67907 64.9563C3.87907 63.9763 2.97905 62.7563 2.96905 61.2963L2.78906 27.8863V7.88623L2.88903 27.0563L2.96905 41.2963C2.97905 42.7563 3.87907 43.9763 5.67907 44.9563C7.47907 45.9263 9.63906 46.4263 12.169 46.4263C14.589 46.3663 16.669 45.8763 18.409 44.9363C19.779 44.1863 20.609 43.2763 20.889 42.2063C20.959 41.9263 20.9991 41.6463 20.9991 41.3463Z" />
      </g>
    </svg>
  );
}
