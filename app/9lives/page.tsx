/* 9LIVES — work page */

import NavPill from "../components/NavPill";
import Reveal from "../components/Reveal";
import BackButton from "../components/BackButton";
import LiveSiteBanner from "../components/LiveSiteBanner";

const A = {
  hline:      "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:     "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal:   "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright:  "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:    "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
  banner:     "/9lives store.png",
};

function GridTile({ top, left }: { top: number; left: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-[1461px] w-[1513px]"
      style={{ top, left, transform: "translateX(-50%)", opacity: 0.07 }}
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

function WorkTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[10px] border border-white/30 bg-white/10 px-[14px] py-[6px] font-ui text-[12px] md:text-[13px] font-medium tracking-[0.5px] text-white whitespace-nowrap">
      {children}
    </span>
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

export default function NineLivesPage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col overflow-hidden">
      {[0, 729, 1650, 2571, 3492].map((top) => (
        <GridTile key={top} top={top} left="calc(50% - 0.5px)" />
      ))}

      <header className="relative z-10 flex justify-center pt-[64px]">
        <nav aria-label="Primary navigation">
          <NavPill />
        </nav>
      </header>

      <main className="relative z-10 flex-1 px-[24px] md:px-[40px] xl:px-[80px]">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section aria-label="Project overview" className="enter-1">

          <div className="mt-[40px] xl:mt-[60px] flex items-center gap-[16px]">
            <BackButton />
            <h1 className="flex-1 text-center font-ui text-[48px] md:text-[80px] xl:text-[100px] leading-none tracking-[-0.02em] text-white">
              9LIVES
            </h1>
            <div className="hidden md:block md:w-[32px] xl:w-[40px] shrink-0" aria-hidden="true" />
          </div>

          <div className="mt-[20px] xl:mt-[24px] flex flex-wrap items-center justify-center gap-[8px] xl:gap-[12px]">
            <WorkTag>WEB DESIGN</WorkTag>
            <WorkTag>FRONT-END WEB DEVELOPMENT</WorkTag>
          </div>

          <div className="mt-[40px] xl:mt-[50px] flex flex-col lg:flex-row lg:justify-center gap-[24px] xl:gap-[16px]">
            <h2 className="font-subtitle text-[22px] md:text-[28px] xl:text-[32px] leading-[1.34] text-white tracking-[-0.44px] xl:tracking-[-0.64px] lg:w-[454px] shrink-0">
              You just have to make every single one of them count.
            </h2>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.6] text-white/80 tracking-[0.16px] xl:max-w-[440px]">
              Excerpt taken from the 9LIVES manifesto: &ldquo;How did you get
              here? Not by accident. You&apos;ve walked this path before. Nine
              lives. Nine chances. One legacy.&rdquo;
            </p>
          </div>
        </section>

        {/* ── Banner — live site ────────────────────────────────── */}
        <LiveSiteBanner
          href="https://9lives.store"
          src={A.banner}
          alt="9LIVES e-commerce store"
          ratio="48.98%"
          className="mt-[40px] xl:mt-[80px] enter-2"
        />

        {/* ── Role ─────────────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              ROLE
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              For the 9LIVES e-commerce store the process was simple. I used
              Shopify&apos;s Liquid design framework to implement the designs I
              created in Figma according to how the 9LIVES Creative Directors
              specified in the visual plans they laid out for me. No complex
              decisions or iterations just an efficient transition from design
              to coding the live website.
            </p>
          </div>
        </Reveal>

      </main>

      <Reveal className="mt-[60px] xl:mt-[80px]">
        <Footer />
      </Reveal>
    </div>
  );
}
