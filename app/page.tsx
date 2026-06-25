/* Landing page, design node 309-1027 (1440 × 4234)
   Values derived 1:1 from Figma Dev Mode MCP design context. */

import Link from "next/link";
import DesignerSwatch from "./components/DesignerSwatch";
import ResearcherBubble from "./components/ResearcherBubble";
import StickyHeader from "./components/StickyHeader";
import Reveal from "./components/Reveal";

/* ── Asset paths ─────────────────────────────────────────────── */
const A = {
  hline:    "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:   "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal: "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright: "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:   "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
  library:   "/f7a667d2ab3f74fd6710193750a48b7b7cb92f5b.png",
  tse:       "/90fe7043dc7837d72d57bfcb68935643888d95f9.png",
  nineLives: "/5886ad421872366dda0a22171f4ae2e1d0f9222c.png",
  qrPay:     "/5d183971d6ba060bdca6dc2f89622c5fa941b93b.png",
  nextHavn:  "/ccbcfdbc1bf93c62740275332ce5e07d07322a3f.png",
  decision:      "/d1c91116a8ea2b156cb4f56aca4dc4784ec92ea1.png",
  accessibility: "/8a9a6668df0e16ad2011b371781a547d74a5dac5.png",
};

/* ── Grid tile (1513×1461px), absolute within body ─────────── */
function GridTile({ index, left }: { index: number; left: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-[1461px] w-[1513px] -translate-x-1/2 origin-top scale-[0.27] md:scale-[0.53] lg:scale-[0.71] xl:scale-[1] opacity-[0.16] xl:opacity-[0.11]"
      style={{ top: `calc(var(--tile-step) * ${index})`, left }}
    >
      {/* Horizontal lines: 1440×1049 at left=37 */}
      <div className="absolute h-[1049px] w-[1440px]" style={{ left: 37, top: 0 }}>
        <img src={A.hline} alt="" className="absolute inset-0 block size-full max-w-none" />
      </div>

      {/* Vertical lines: 1277×931 container centered, child rotated -90° */}
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

      {/* Diagonal, right edge: 119×385 at left=1394, top=344 */}
      <div className="absolute h-[385px] w-[119px]" style={{ left: 1394, top: 344 }}>
        <img src={A.diagonal} alt="" className="absolute inset-0 block size-full max-w-none" />
      </div>

      {/* Diagonal, left edge: 119×385 at left=0, top=344 */}
      <div className="absolute h-[385px] w-[119px]" style={{ left: 0, top: 344 }}>
        <img src={A.diagonal} alt="" className="absolute inset-0 block size-full max-w-none" />
      </div>
    </div>
  );
}

/* ── Nav ─────────────────────────────────────────────────────── */
function Nav() {
  return (
    <StickyHeader />
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section aria-label="Introduction" className="relative z-20 pt-[88px] xl:pt-[100px] enter-1">
      <h1 className="font-display text-center text-[64px] md:text-[120px] xl:text-[200px] leading-none tracking-[3px] md:tracking-[8px] xl:tracking-[14px] text-white">
        Martins
      </h1>
      <div className="mx-auto max-w-[900px] xl:max-w-[1100px] px-[24px] mt-[8px] xl:mt-[12px] leading-[0] font-subtitle text-[18px] md:text-[22px] xl:text-[30px] text-center text-white tracking-[-0.36px] xl:tracking-[-0.6px]">
        <div className="leading-[1.34]">
          is a <DesignerSwatch /> and a <ResearcherBubble /> who strongly
          believes design is the ideal way to solve complex problems.{" "}
        </div>
      </div>
    </section>
  );
}

/* ── Card label (25px Apfel Grotezk Mittel), sits 8px below card */
function CardLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-[8px] font-ui text-[14px] md:text-[18px] xl:text-[25px] font-medium leading-normal tracking-[0.14px] md:tracking-[0.18px] xl:tracking-[0.25px] text-white whitespace-nowrap">
      {children}
    </p>
  );
}

/* ── [crate] featured card ────────────────────────────────────── */
function FeaturedCard() {
  return (
    <Link href="/crate" className="block group mb-[40px] xl:mb-[82px] enter-2">
      <div className="relative h-[220px] md:h-[520px] xl:h-[915px] overflow-clip rounded-[5px] bg-[#bde0fe] transition-opacity group-hover:opacity-90">
        <img
          src={A.library}
          alt="[crate] library app"
          className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none rounded-[5px]"
        />
      </div>
      <CardLabel>[crate]</CardLabel>
    </Link>
  );
}

/* ── TSE Studio card (628×393, image: 628×423 with crop) ──────── */
function TseCard() {
  return (
    <Link href="/tse" className="block group">
      <div className="relative aspect-[628/393] overflow-clip rounded-[5px] bg-white transition-opacity group-hover:opacity-90">
        <img
          src={A.tse}
          alt="TSE Studio"
          className="absolute inset-0 size-full max-w-none object-cover object-center pointer-events-none"
        />
      </div>
      <CardLabel>TSE Studio</CardLabel>
    </Link>
  );
}

/* ── NextHavn card (628×393, inner 627×486 object-cover) ──────── */
function NextHavnCard() {
  return (
    <Link href="/nexthavn" className="block group">
      <div className="relative aspect-[628/393] overflow-clip rounded-[5px] bg-white transition-opacity group-hover:opacity-90">
        <img
          src={A.nextHavn}
          alt="NextHavn"
          className="absolute inset-0 size-full max-w-none object-cover object-center pointer-events-none"
        />
      </div>
      <CardLabel>NextHavn</CardLabel>
    </Link>
  );
}

/* ── 9LIVES card (628×393, inner 628×308 centered) ──────────── */
function NineLivesCard() {
  return (
    <Link href="/9lives" className="block group">
      <div className="relative aspect-[628/393] overflow-clip rounded-[5px] bg-white transition-opacity group-hover:opacity-90">
        <img
          src={A.nineLives}
          alt="9LIVES"
          className="absolute inset-0 size-full max-w-none object-cover object-center pointer-events-none"
        />
      </div>
      <CardLabel>9LIVES</CardLabel>
    </Link>
  );
}

/* ── QR Pay card (628×393, inner 628×536 centered) ─────────── */
function QrPayCard() {
  return (
    <Link href="/qrpay" className="block group">
      <div className="relative aspect-[628/393] overflow-clip rounded-[5px] bg-white transition-opacity group-hover:opacity-90">
        <img
          src={A.qrPay}
          alt="QR Pay by DIVE HQ"
          className="absolute inset-0 size-full max-w-none object-cover object-center pointer-events-none"
        />
      </div>
      <CardLabel>QR Pay by DIVE HQ</CardLabel>
    </Link>
  );
}

/* ── Projects section ─────────────────────────────────────────── */
function Projects() {
  return (
    <section id="work" aria-label="Projects" className="relative z-10 mt-[22px] px-[24px] md:px-[40px] xl:px-[80px]">
      <FeaturedCard />

      <Reveal className="mb-[20px] xl:mb-[42px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] xl:gap-[24px]">
          <TseCard />
          <NextHavnCard />
        </div>
      </Reveal>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] xl:gap-[24px]">
          <QrPayCard />
          <NineLivesCard />
        </div>
      </Reveal>
    </section>
  );
}

/* ── Research text panel (shared 3D-shadow style) ────────────── */
function ResearchTextPanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full lg:w-[578px] shrink lg:shrink-0 flex-col items-start rounded-[5px] border border-[#252525] bg-[#415a77] p-[20px] shadow-[5px_5px_0px_0px_#252525]">
      <div className="flex w-full flex-col gap-[12px] text-white">
        {children}
      </div>
    </div>
  );
}

/* ── Decision Fatigue card (326px tall image) ────────────────── */
function DecisionFatigueCard() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[20px]">
      <Link href="/decision-fatigue" className="relative block aspect-[580/326] lg:aspect-auto lg:h-[326px] w-full lg:w-[580px] shrink-0 rounded-[5px] transition-opacity hover:opacity-90">
        <img
          src={A.accessibility}
          alt="Decision Fatigue"
          className="absolute inset-0 size-full max-w-none object-cover pointer-events-none rounded-[5px]"
        />
      </Link>
      <ResearchTextPanel>
        <Link href="/decision-fatigue" className="font-ui w-full text-[20px] font-medium leading-[1.34] tracking-[-0.2px] transition-opacity hover:opacity-70">
          Decision Fatigue for Users in online streaming platforms
        </Link>
        <p className="font-ui w-full text-[16px] font-normal leading-[1.6] tracking-[0.16px]">
          Streaming platforms have a paradox at their core: more content, less satisfaction.
          Users open Netflix to relax and instead spend thirty minutes scrolling, abandoning
          the search or defaulting to a rerun. This project sets out to understand why choice
          becomes a burden and what design can do about it.
        </p>
      </ResearchTextPanel>
    </div>
  );
}

/* ── Accessibility card (326px tall image) ───────────────────── */
function AccessibilityCard() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[20px]">
      <Link href="/accessibility" className="relative block aspect-[580/326] lg:aspect-auto lg:h-[326px] w-full lg:w-[580px] shrink-0 rounded-[5px] transition-opacity hover:opacity-90">
        <img
          src={A.decision}
          alt="Accessibility research"
          className="absolute inset-0 size-full max-w-none object-cover pointer-events-none rounded-[5px]"
        />
      </Link>
      <ResearchTextPanel>
        <Link href="/accessibility" className="font-heading w-full text-[20px] font-bold leading-[0] tracking-[-0.2px] transition-opacity hover:opacity-70">
          <p className="mb-0 leading-[1.34]">End-to-End Accessibility Barriers</p>
          <p className="mb-0 leading-[1.34]">Experienced by Blind and Low Vision</p>
          <p className="leading-[1.34]">Users in Online Food Ordering</p>
        </Link>
        <p className="font-ui w-full text-[16px] font-normal leading-[1.6] tracking-[0.16px]">
          Food delivery apps promise convenience, but that promise isn&apos;t evenly distributed.
          For Blind and Low Vision (BLV) users, ordering a meal can mean guessing at portion sizes,
          relearning an interface after every update, and hoping a driver reads the delivery note.
          This study follows the entire journey to find where accessibility breaks down.
        </p>
      </ResearchTextPanel>
    </div>
  );
}

/* ── Research section ─────────────────────────────────────────── */
function Research() {
  return (
    <section
      id="about"
      aria-label="Research"
      className="relative z-10 mt-[60px] lg:mt-[120px] flex flex-col items-stretch lg:items-center px-[24px] md:px-[40px] xl:px-0 pb-[40px] lg:pb-[80px]"
    >
      <Reveal className="mb-[48px] lg:mb-[120px]"><DecisionFatigueCard /></Reveal>
      <Reveal><AccessibilityCard /></Reveal>
    </section>
  );
}

/* ── Footer ────────────────────────────────────────────────────── */
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

/* ── Page ──────────────────────────────────────────────────────── */
export default function Home() {
  return (
    /* Page container: max 1440px, centered for ultrawide screens.
       Body background (#415a77) fills the remaining width on both sides. */
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
      {/* Grid tiles, absolute within this 1440px container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <GridTile index={0} left="calc(50% - 0.5px)" />
      <GridTile index={1} left="calc(50% - 0.5px)" />
      <GridTile index={2} left="calc(50% - 0.5px)" />
      <GridTile index={3} left="calc(50% - 0.5px)" />
      <GridTile index={4} left="calc(50% - 0.5px)" />
      <GridTile index={5} left="calc(50% - 0.5px)" />
      <GridTile index={6} left="calc(50% - 0.5px)" />
      <GridTile index={7} left="calc(50% - 0.5px)" />
      </div>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Research />
      </main>
      <Footer />
    </div>
  );
}
