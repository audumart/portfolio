/* End-to-End Accessibility Barriers — BLV research page */

import StickyHeader from "../components/StickyHeader";
import Reveal from "../components/Reveal";
import BackButton from "../components/BackButton";

const A = {
  hline:      "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:     "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal:   "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright:  "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:    "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
  banner:            "/BLV research banner.png",
  infoGaps:          "/Information gaps 1.png",
  platformInstability: "/Platform instability and commercial clutter 1.png",
  languageBarriers:  "/Language barriers 1.png",
};

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

function WorkTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[10px] border border-white/30 bg-white/10 px-[14px] py-[6px] font-ui text-[12px] md:text-[13px] font-medium tracking-[0.5px] text-white whitespace-nowrap">
      {children}
    </span>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="mt-[48px] xl:mt-[64px]">
      <div className="mx-auto max-w-[846px]">
        <p className="font-ui text-[15px] md:text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
          {label}
        </p>
        {children}
      </div>
    </Reveal>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
      {children}
    </p>
  );
}

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <Reveal className="mt-[40px] xl:mt-[64px]">
      <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "56.25%" }}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
        />
      </div>
    </Reveal>
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

export default function AccessibilityPage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col overflow-hidden">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((index) => (
        <GridTile key={index} index={index} left="calc(50% - 0.5px)" />
      ))}

      <StickyHeader />

      <main className="relative z-10 flex-1 pt-[80px] px-[24px] md:px-[40px] xl:px-[80px]">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section aria-label="Project overview" className="enter-1">
          <div className="mt-[40px] xl:mt-[60px] flex items-center gap-[16px]">
            <BackButton />
            <h1 className="flex-1 text-center font-ui text-[28px] md:text-[44px] xl:text-[56px] leading-[1.1] tracking-[-0.02em] text-white">
              End-to-End Accessibility Barriers Experienced by Blind and Low Vision Users in Online Food Ordering
            </h1>
            <div className="hidden md:block md:w-[32px] xl:w-[40px] shrink-0" aria-hidden="true" />
          </div>

          <div className="mt-[20px] xl:mt-[24px] flex flex-wrap items-center justify-center gap-[8px] xl:gap-[12px]">
            <WorkTag>STRATEGY</WorkTag>
            <WorkTag>MIXED METHODS RESEARCH</WorkTag>
          </div>
        </section>

        {/* ── Banner ───────────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[80px] enter-2">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "56.25%" }}>
            <img
              src={A.banner}
              alt="BLV accessibility research — food ordering on mobile"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Overview ─────────────────────────────────────────── */}
        <Section label="OVERVIEW">
          <Body>
            Food delivery apps promise convenience, but that promise isn&apos;t evenly distributed.
            For Blind and Low Vision (BLV) users, ordering a meal can mean guessing at item
            images, interpreting every update, and hoping a driver reads the delivery note. This
            study followed the entire journey — browse, customize, pay, receive to find where
            accessibility breaks down.
          </Body>
          <div className="mt-[20px]">
            <Body>
              Most prior research had examined single slices of the experience: online shopping,
              restaurant menus, or delivery apps in isolation. We looked at the end-to-end process,
              because the friction BLV users face isn&apos;t one bad screen — it&apos;s something
              that accumulates across the whole flow.
            </Body>
          </div>
        </Section>

        {/* ── The Problem ──────────────────────────────────────── */}
        <Section label="THE PROBLEM">
          <Body>
            Accessibility is often framed as a feature for independence. It removes the need to
            travel to a store and lets users act as ordinary consumers. Yet many apps fail basic
            accessibility guidelines: unlabelled buttons, inconsistent interaction design, and
            visual-only feedback. The alternative — asking sighted family and friends costs
            users their independence and the privacy the technology was supposed to provide.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            My team of six researchers set out to answer three questions:
          </p>
          <ul className="mt-[12px] space-y-[10px] list-disc list-outside pl-[20px]">
            {[
              "P01 — What digital accessibility barriers do BLV users face while browsing, customizing, paying for, and tracking online food orders?",
              "P02 — How are BLV users communicating with delivery drivers and verifying orders during the pickup/last handoff?",
              "P03 — What workarounds and strategies do BLV users rely on to get around these barriers?",
            ].map((q) => (
              <li key={q} className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
                {q}
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Method ───────────────────────────────────────────── */}
        <Section label="METHOD">
          <Body>
            A pre-design exploratory study built on remote, semi-structured interviews — chosen
            to capture lived experience and emotional context, not just task success.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">Participants (N = 4):</strong> Four BLV
            adults who use screen readers daily (VoiceOver on mobile, JAWS on Windows, or
            EyeControl) with acquired blindness or acquired vision loss. All had ordered food
            online within the past six months. Recruited through the faculty advisor&apos;s
            accessibility research pool and anonymized as P1–P4.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">Data collection:</strong> 60-minute Zoom
            sessions covering four areas: background and tech use, digital experience (accessibility
            barriers encountered), ordering behavior, and strategies and coping approaches. Consent
            materials were provided in accessible formats.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">Analysis:</strong> Each researcher
            independently coded transcripts to sticky notes capturing pain points, behaviors, and
            quotes. The team then clustered these collaboratively through affinity mapping to
            surface cross-participant patterns.
          </p>
        </Section>

        {/* ── What We Found ────────────────────────────────────── */}
        <Section label="WHAT WE FOUND">
          <Body>
            Four accessibility challenges recurred across the full ordering process, alongside a
            fourth theme on the emotional and social costs of these barriers.
          </Body>

          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">1. Information gaps — missing descriptions and dietary detail:</strong>{" "}
            All four participants hit menus that showed only a title, a price, and a low-resolution
            image with no meaningful description. The stakes go beyond frustration: P3, who manages
            multiple dietary restrictions, described having to leave an app repeatedly to search
            online before she could safely order. Missing alt text on item images compounds the
            problem.
          </p>
        </Section>

        <Img src={A.infoGaps} alt="Information gaps — missing item descriptions in food ordering apps" />

        {/* ── Finding 2 ────────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-semibold">2. Platform instability and commercial clutter:</strong>{" "}
              Frequent app updates introduced accessibility regressions — a default card silently
              reverting after an update, an unusable cart button, sudden layout changes forcing
              users to relearn interfaces they&apos;d already mastered. Promotional pop-ups and
              sale banners added noise, and pricing that didn&apos;t reconcile at checkout forced
              extra calls to support.
            </p>
          </div>
        </Reveal>

        <Img src={A.platformInstability} alt="Platform instability and commercial clutter in food ordering apps" />

        {/* ── Finding 3 ────────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-semibold">3. Breakdowns in delivery communication:</strong>{" "}
              The handoff stage exposed persistent human-communication gaps. Written delivery
              instructions were followed inconsistently — one participant estimated drivers complied
              only half the time. Drivers often sent photos for updates or substitutions, which are
              inaccessible to screen reader users, in some cases forcing a participant to disclose
              their blindness just to get a description.
            </p>
          </div>
        </Reveal>

        <Img src={A.languageBarriers} alt="Language and communication barriers in food delivery handoff" />

        {/* ── Design Implications ───────────────────────────────── */}
        <Section label="DESIGN IMPLICATIONS">
          <Body>
            Our study points to four directions for more inclusive end-to-end delivery:
          </Body>
          <ul className="mt-[16px] space-y-[12px] list-disc list-outside pl-[20px]">
            {[
              "Standardization of item information: mandatory serving sizes, clear ingredient lists, and filters for dietary needs.",
              "Strengthen accessibility regression testing so updates stop breaking critical workflows like payment selection and navigation.",
              "Reduce commercial clutter to lower cognitive load for screen reader navigation.",
              "Build non-visual delivery communication protocols — standardized text updates, alt text or text alternatives to photo-only messages, and a way to ensure written instructions are actually read and acknowledged.",
            ].map((item) => (
              <li key={item} className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Limitations & Next Steps ──────────────────────────── */}
        <Section label="LIMITATIONS &amp; NEXT STEPS">
          <Body>
            With N = 4, the study is exploratory by design — appropriate for surfacing patterns,
            not for generalizing. All participants were U.S.-based screen reader users, and remote
            interviews couldn&apos;t directly observe the ordering process as it happened. Future
            work could add ethnographic or observational methods, expand the participant pool, and
            compare experiences across specific channels: apps, websites, and phone orders.
          </Body>
        </Section>

      </main>

      <Reveal className="mt-[60px] xl:mt-[80px]">
        <Footer />
      </Reveal>
    </div>
  );
}
