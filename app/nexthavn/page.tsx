/* NextHavn work page */

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
  banner:     "/nexthavn landing screenshot.png",
  styleGuide: "/Style guide nexthavn.png",
  imac:       "/iMac shot.png",
  ipad:       "/iPad shot.png",
  appShots:   "/Nexthavn app screenshots.png",
};

/* ── Grid tile ───────────────────────────────────────────────── */
function GridTile({ index, left }: { index: number; left: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-[1461px] w-[1513px] -translate-x-1/2 origin-top scale-[0.27] md:scale-[0.53] lg:scale-[0.71] xl:scale-[1] opacity-50 xl:opacity-[0.11]"
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

/* ── Page ────────────────────────────────────────────────────── */
export default function NextHavnPage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col overflow-hidden">
      {/* Grid tiles */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((index) => (
        <GridTile key={index} index={index} left="calc(50% - 0.5px)" />
      ))}

      {/* Nav */}
      <StickyHeader />

      <main className="relative z-10 flex-1 pt-[80px] px-[24px] md:px-[40px] xl:px-[80px]">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section aria-label="Project overview" className="enter-1">

          <div className="mt-[40px] xl:mt-[60px] flex items-center gap-[16px]">
            <BackButton />
            <h1 className="flex-1 text-center font-ui text-[48px] md:text-[80px] xl:text-[100px] leading-none tracking-[-0.02em] text-white">
              NextHavn
            </h1>
            <div className="hidden md:block md:w-[32px] xl:w-[40px] shrink-0" aria-hidden="true" />
          </div>

          <div className="mt-[20px] xl:mt-[24px] flex flex-wrap items-center justify-center gap-[8px] xl:gap-[12px]">
            <WorkTag>WEB DESIGN</WorkTag>
            <WorkTag>PRODUCT DESIGN</WorkTag>
            <WorkTag>STRATEGY</WorkTag>
            <WorkTag>PROTOTYPING</WorkTag>
          </div>

          <div className="mt-[40px] xl:mt-[50px] flex flex-col lg:flex-row lg:justify-center gap-[24px] xl:gap-[16px]">
            <div className="lg:w-[454px] shrink-0">
              <h2 className="font-subtitle text-[22px] md:text-[28px] xl:text-[32px] leading-[1.34] text-white tracking-[-0.44px] xl:tracking-[-0.64px]">
                The creative industry&apos;s next operating system
              </h2>
              <p className="mt-[12px] font-ui text-[13px] md:text-[14px] leading-[1.6] text-white/60 tracking-[0.13px]">
                NextHavn is an active product still in development. This is a
                condensed look at the thinking and design decisions that have
                gone into this project rather than a full process breakdown.
              </p>
            </div>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.6] text-white/80 tracking-[0.16px] xl:max-w-[440px]">
              Talent, studios and gear in one borderless platform is what
              NextHavn promises. A unified ecosystem for the creative industry
              and beyond built to eliminate the fragmented nature of modern
              creative work where job leads are buried in social media DMs,
              studio availability is hidden and gear relies on personal networks.
            </p>
          </div>
        </section>

        {/* ── Banner — VIEW LIVE SITE ───────────────────────────── */}
        <LiveSiteBanner
          href="https://nexthavn.com/"
          src={A.banner}
          alt="NextHavn website"
          ratio="47.74%"
          className="mt-[40px] xl:mt-[80px] enter-2"
        />

        {/* ── Role ─────────────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[15px] md:text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              ROLE
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              I led the design of NextHavn&apos;s web presence and the foundational
              experience for its incoming web app turning a broad, multi-sided
              platform vision into concrete interface and interaction decisions.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              Working across the marketing site and product surfaces, I shaped
              how the ecosystem&apos;s many parts such as talent discovery, studio
              booking, gear rental, payments and community could be made legible
              and navigable within a single coherent experience.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              Alongside the design work, I created and ran a recruitment survey
              to bring real creatives into the research process, using it to
              source participants and gather early signal on the product&apos;s
              viability. The survey doubled as a validation tool, surfacing how
              creatives actually source work, book spaces, and manage gear.
            </p>
          </div>
        </Reveal>

        {/* ── Style guide ──────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "65.94%" }}>
            <img
              src={A.styleGuide}
              alt="NextHavn style guide — colours and typography"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── iMac + iPad side by side ─────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] xl:gap-[24px]">
            <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "77.51%" }}>
              <img
                src={A.imac}
                alt="NextHavn on iMac"
                className="absolute inset-0 size-full max-w-none object-cover pointer-events-none"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "74.80%" }}>
              <img
                src={A.ipad}
                alt="NextHavn on iPad"
                className="absolute inset-0 size-full max-w-none object-cover pointer-events-none"
              />
            </div>
          </div>
        </Reveal>

        {/* ── Case pillars ─────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[15px] md:text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              CORE PILLARS AND FUNCTIONALITY
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              The platform is designed to support the full arc of a production,
              from pre-production sourcing through post-production delivery. The
              three pillars anchor this workflow are:
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-medium">Verified Creative Network:</strong> A global, vetted database of
              photographers, videographers, editors, crew, and digital artists.
              Every profile is fully searchable and filterable — by specific
              skill set, location, daily or hourly rate and real-time calendar
              availability making hiring shift from guesswork and referrals to
              deliberate, informed selections.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-medium">On-Demand Bookings:</strong> A direct-to-studio marketplace where users
              can browse, compare, and instantly reserve photography, film, and
              audio recording spaces. Transparent pricing and automated calendar
              management remove the back-and-forth that normally sits between
              needing a space and securing one.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-medium">Equipment Marketplace:</strong> An upcoming portal built to make
              professional-grade production gear — cameras, drone rigs, lighting
              setups accessible anywhere in the world. Standardized rental
              contracts, verified availability and fixed liability structures
              bring predictability to a process that has long run on informal
              trust.
            </p>
          </div>
        </Reveal>

        {/* ── App screenshots ───────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "70.70%" }}>
            <img
              src={A.appShots}
              alt="NextHavn app interface screens"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Why design matters ────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[15px] md:text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              WHY THE ECOSYSTEM MATTERS
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              Today, producing a single project can mean stitching together
              messaging apps, invoicing tools, portfolio hosts, and a patchwork
              of regional rental agencies. NextHavn collapses that fragmentation
              into one operating system for creative work. It gives independent
              artists genuine local visibility while allowing global brands to
              drop a production anywhere in the world and safely assemble an
              entire localized team — turning what used to be a logistical
              nightmare into a single, coherent process.
            </p>
          </div>
        </Reveal>

      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <Reveal className="mt-[60px] xl:mt-[80px]">
        <Footer />
      </Reveal>
    </div>
  );
}
