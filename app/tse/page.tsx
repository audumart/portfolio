/* TSE Studio work page, Figma node 3:11 (1440 × 5678) */

import StickyHeader from "../components/StickyHeader";
import Reveal from "../components/Reveal";
import BackButton from "../components/BackButton";
import LiveSiteBanner from "../components/LiveSiteBanner";

const A = {
  hline:      "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:     "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal:   "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright:  "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:    "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
  banner:     "/tse landing page.png",
  iterations: "/tse-iterations.png",
  website1:   "/tse-website-1.png",
  website2:   "/tse-website-2.png",
};

/* ── Grid tile, identical to landing/about ──────────────────── */
function GridTile({ index, left }: { index: number; left: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-[1461px] w-[1513px] -translate-x-1/2 origin-top scale-[0.27] md:scale-[0.53] lg:scale-[0.71] xl:scale-[1] opacity-[0.16] xl:opacity-[0.11]"
      style={{ top: `calc(var(--tile-step) * ${index})`, left }}
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

/* ── Work tag pill ───────────────────────────────────────────── */
function WorkTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[10px] border border-white/30 bg-white/10 px-[14px] py-[6px] font-ui text-[12px] md:text-[13px] font-medium tracking-[0.5px] text-white whitespace-nowrap">
      {children}
    </span>
  );
}

/* ── Footer ──────────────────────────────────────────────────── */
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
export default function TsePage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
      {/* Grid background tiles, 7 tiles for 5678px page, top=0 matches landing page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
        <GridTile key={index} index={index} left="calc(50% - 0.5px)" />
      ))}
      </div>


      {/* Nav */}
      <StickyHeader />

      <main className="relative z-10 flex-1 pt-[80px] px-[24px] md:px-[40px] xl:px-[80px]">

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section aria-label="Project overview" className="enter-1">

          {/* Title row, back button left, h1 centered via flex-1 */}
          <div className="mt-[40px] xl:mt-[60px] flex items-center gap-[16px]">
            <BackButton />
            <h1 className="flex-1 text-center font-ui text-[48px] md:text-[80px] xl:text-[100px] leading-none tracking-[-0.02em] text-white">
              TSE Studio
            </h1>
            <div className="hidden md:block w-[32px] shrink-0" aria-hidden="true" />
          </div>

          {/* Tags */}
          <div className="mt-[20px] xl:mt-[24px] flex flex-wrap items-center justify-center gap-[8px] xl:gap-[12px]">
            <WorkTag>WEB DESIGN</WorkTag>
            <WorkTag>STRATEGY</WorkTag>
            <WorkTag>INTERACTION DESIGN</WorkTag>
            <WorkTag>WIREFRAMING &amp; PROTOTYPING</WorkTag>
          </div>

          {/* Two-column description */}
          <div className="mt-[40px] xl:mt-[50px] flex flex-col lg:flex-row lg:justify-center gap-[24px] xl:gap-[16px]">
            <h2 className="font-subtitle text-[22px] md:text-[28px] xl:text-[32px] leading-[1.34] text-white tracking-[-0.44px] xl:tracking-[-0.64px] lg:w-[454px] shrink-0">
              Breaking creative boundaries with the click of a camera button
            </h2>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.6] text-white/80 tracking-[0.16px] xl:max-w-[440px]">
              For TSE&apos;s photo portfolio website he had just a singular request: &quot;I want the site
              to do something that&apos;s not the usual experience when people view this site&quot;. A
              challenge I fully embraced in order to deliver a delightful and visual interactive
              experience.
            </p>
          </div>
        </section>

        {/* ── Banner, live site card ────────────────────────────── */}
        <LiveSiteBanner
          href="https://808sakura.vercel.app/"
          src={A.banner}
          alt="TSE Studio website"
          ratio="53.28%"
          className="mt-[40px] xl:mt-[80px] enter-2"
        />

        {/* ── Role + Process ────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[15px] md:text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              ROLE
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              My challenge was to deliver an experience that was uncommon for traditional photo
              portfolio websites while being something that still possessed the same essence and
              purpose. I worked on several iterations to come up with different layouts and device
              breakpoints in order to understand what would work and what wouldn&apos;t. Working with TSE
              and the most experienced web developer (shoutout to director tetsuo) I know we tested
              several of the iterations until we were able to arrive at the final version of the
              site. The images below give a general overview of most of the iterations that were
              explored. Photographs at their most fundamental level represent stillness, a piece of
              time where nothing seems to be moving and throughout this entire process one thing that
              kept recurring was how to add elements that wouldn&apos;t take away the main essence of
              these photographs but to mimic the several moving parts that go on outside of the lens
              needed to produce these photographs.
            </p>
          </div>
        </Reveal>

        {/* ── Iterations ─────────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px] bg-black" style={{ paddingTop: "102.34%" }}>
            <img
              src={A.iterations}
              alt="TSE Studio design iterations"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
          <p className="mt-[12px] text-center font-ui text-[14px] text-white/50 tracking-[0.14px]">
            explored iterations for the site
          </p>
        </Reveal>

        {/* ── Bringing it all together ───────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[15px] md:text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              BRINGING IT ALL TOGETHER
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              Based on the several iterations worked on I was eventually able to arrive at the ideal
              version of the vision TSE had for his portfolio when he reached out to me. With minimal
              complexity but unconventional and providing a matching visual experience for his photos
              the final iteration of the site draws from smooth scrolling transitions adapted from
              current web design trends to deliver an ideal visually immersive viewing experience. To
              fully immerse yourself make sure to visit the live site with the link at the top. To be
              able to bring to life the vision for this website is one of the most challenging
              endeavors I have been a part of.
            </p>
          </div>
        </Reveal>

        {/* ── Showcase video, autoplay recording of live site ──── */}
        <div className="mt-[40px] xl:mt-[64px] relative w-full overflow-hidden rounded-[5px] bg-black" style={{ paddingTop: "45.47%" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 size-full max-w-none object-cover"
            src="/TSE site interaction.mp4"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, transparent 40%, rgba(0,0,0,0.35) 100%)" }}
          />
        </div>

        {/* ── Website screenshots ────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px] bg-black" style={{ paddingTop: "54.375%" }}>
            <img
              src={A.website1}
              alt="TSE Studio website, editorial view"
              className="absolute inset-0 size-full max-w-none object-cover object-center pointer-events-none"
            />
          </div>
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px] bg-black" style={{ paddingTop: "54.375%" }}>
            <img
              src={A.website2}
              alt="TSE Studio website, portfolio view"
              className="absolute inset-0 size-full max-w-none object-cover object-center pointer-events-none"
            />
          </div>
        </Reveal>

      </main>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Reveal className="mt-[60px] xl:mt-[80px]">
        <Footer />
      </Reveal>
    </div>
  );
}
