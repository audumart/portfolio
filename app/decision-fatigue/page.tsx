/* Decision Fatigue for Users in Online Streaming Platforms, research page */

import StickyHeader from "../components/StickyHeader";
import Reveal from "../components/Reveal";
import BackButton from "../components/BackButton";

const A = {
  hline:      "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:     "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal:   "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright:  "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:    "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
  banner:     "/streaming services banner.png",
  aidanPersona:  "/Aiden research persona.png",
  lindaPersona:  "/Linda research persona.png",
  aidanJourney:  "/Journey map aiden.png",
  lindaJourney:  "/Journey map linda.png",
  priorityMatrix:   "/Priority matrix.png",
  codedInterviews:  "/Coded Interviews.png",
  affinityDiagram:  "/Affinity diagram.png",
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

export default function DecisionFatiguePage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((index) => (
        <GridTile key={index} index={index} left="calc(50% - 0.5px)" />
      ))}
      </div>


      <StickyHeader />

      <main className="relative z-10 flex-1 pt-[80px] px-[24px] md:px-[40px] xl:px-[80px]">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section aria-label="Project overview" className="enter-1">
          <div className="mt-[40px] xl:mt-[60px] flex items-center gap-[16px]">
            <BackButton />
            <h1 className="flex-1 text-center font-ui text-[32px] md:text-[52px] xl:text-[64px] leading-[1.1] tracking-[-0.02em] text-white">
              Decision Fatigue for Users in Online Streaming Platforms
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
              alt="Streaming platforms, YouTube TV, Netflix, Paramount+, Max, Hulu, Prime, Fubo, Apple TV+, Peacock"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Overview ─────────────────────────────────────────── */}
        <Section label="OVERVIEW">
          <Body>
            Streaming platforms have a paradox at their core: more content, less satisfaction.
            Users open Netflix to relax and instead spend thirty minutes scrolling, abandoning
            the search or defaulting to a rerun. This project set out to understand why choice
            becomes a burden and what design can do about it. For my research I studied decision
            fatigue in movie and TV selection through a mixed-methods study of 15 people, then
            translated the findings into concrete design directions for context-aware
            recommendation systems.
          </Body>
        </Section>

        {/* ── The Problem ──────────────────────────────────────── */}
        <Section label="THE PROBLEM">
          <Body>
            Recommendation engines are built on past behavior, but past behavior is a poor proxy
            for present need. Watch one heavy drama and the algorithm serves more heavy dramas
            even when you&apos;re in the mood for something else. The result is a system that feels
            impersonal precisely when personalization is the entire promise.
          </Body>
          <Body>
            The research literature framed my hypothesis: more options produce more
            decision-making stress, and AI recommendations can lower satisfaction when they
            override user autonomy. I wanted to see how this played out in real selection
            behavior, not just self-report.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">The research question:</strong> How do
            users experience decision fatigue when choosing what to watch, and how might
            personalized, context-aware recommendations reduce it?
          </p>
        </Section>

        {/* ── Methods ──────────────────────────────────────────── */}
        <Section label="METHODS">
          <Body>
            I ran two rounds with separate participant pools to triangulate behavior against
            stated preference.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">Round 1, Contextual observation (8 participants, ~15 min each):</strong>{" "}
            Participants demonstrated how they&apos;d recommend a show to a friend, recorded and
            observed in person. I analyzed sessions with the AEIOU framework (Activities,
            Environments, Interactions, Objects, Users) and built sequence/flow models of the
            recommendation process.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">Round 2, Semi-structured interviews (7 participants, 20–30 min each):</strong>{" "}
            Conducted in person and over Zoom, focused on decision-making processes, experiences
            with recommendation systems, and streaming habits. Each transcript was descriptively
            coded in Atlas.ti, then reconciled into a shared codebook.
          </p>
          <div className="mt-[20px]">
            <Body>
              Participants spanned ages 19–62 across a range of occupations and tech fluency,
              screened for recent streaming use.
            </Body>
          </div>
        </Section>

        {/* ── Coded transcripts ────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "108.00%" }}>
            <img
              src={A.codedInterviews}
              alt="Coded interview transcripts in Atlas.ti"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Affinity diagram ─────────────────────────────────── */}
        <Reveal className="mt-[16px] xl:mt-[24px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "68.10%" }}>
            <img
              src={A.affinityDiagram}
              alt="Affinity diagram clustering themes from interview data"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── What I Discovered ────────────────────────────────── */}
        <Section label="WHAT I DISCOVERED">
          <Body>
            Three themes appeared consistently across both observation and interview data.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">1. Trusted sources beat the algorithm:</strong>{" "}
            Most participants consulted several sources, friends, critics (Letterboxd, IMDb,
            Rotten Tomatoes), before committing to platform-native recommendations, which were
            treated with distrust. Features like &ldquo;Trending Now&rdquo; were widely ignored
            for being transparent marketing tools.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">2. Abundance triggers avoidance:</strong>{" "}
            Faced with endless rows on the home screen, participants frequently abandoned the
            search, settled for something, or rewatched familiar content. The volume of choice
            didn&apos;t add value, it compounded the problem.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            <strong className="text-white font-semibold">3. People decide by shortcut:</strong>{" "}
            Decision clustered around three heuristics: favorite actors, current mood/season, and
            seasonal relevance. These mental shortcuts were how users cut a vast catalog down to
            a selection, yet the platforms gave them almost no way to filter along these lines.
          </p>
        </Section>

        {/* ── Personas ─────────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <p className="font-ui text-[15px] md:text-[23px] font-bold tracking-[1px] text-white uppercase mb-[20px] mx-auto max-w-[846px]">
            PERSONAS
          </p>
          <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px] mx-auto max-w-[846px] mb-[20px]">
            Two personas anchored the design thinking and the contrast between them matters because one user wants the system to quantify quality, the other wants it to socialize discovery meaning a single recommendation model serves neither well.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] xl:gap-[24px]">
            <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "73.38%" }}>
              <img
                src={A.aidanPersona}
                alt="Aiden, research persona"
                className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "73.14%" }}>
              <img
                src={A.lindaPersona}
                alt="Linda, research persona"
                className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
              />
            </div>
          </div>
        </Reveal>

        {/* ── Journey maps ─────────────────────────────────────── */}
        <Reveal className="mt-[16px] xl:mt-[24px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "74.38%" }}>
            <img
              src={A.aidanJourney}
              alt="Aiden, user journey map"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        <Reveal className="mt-[16px] xl:mt-[24px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "75.62%" }}>
            <img
              src={A.lindaJourney}
              alt="Linda, user journey map"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Design Implications ───────────────────────────────── */}
        <Section label="DESIGN IMPLICATIONS">
          <Body>
            The findings pointed to six directions for a less fatiguing experience:
          </Body>
          <ul className="mt-[16px] space-y-[12px] list-disc list-outside pl-[20px]">
            {[
              "Context-aware recommendations driven by real-time inputs (mood, genre, actor) rather than viewing history alone.",
              "Balance familiarity and discovery: a lane for comfort rewatches alongside curated, approachable new content.",
              "Filtering that matches how people actually decide: sort by actor, season, release window, or emotional tone.",
              "Social proof built in: friend-based recommendations, collaborative lists, and links to the external reviews users already trust.",
              "Mood-based browsing: let users pick an emotional state and get recommendations tuned to it.",
              "Personalized “trending”: relevance scoped to a user’s social circle instead of platform-wide noise.",
            ].map((item) => (
              <li key={item} className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-[20px]">
            <Body>
              A through-line surfaced in the data: users defaulted to Netflix not for its catalog
              but for its familiarity. Reducing decision fatigue isn&apos;t only about better
              recommendations, it&apos;s about an interface comfortable enough to lower the cost
              of choosing at all.
            </Body>
          </div>
        </Section>

        {/* ── Priority matrix ───────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "45.71%" }}>
            <img
              src={A.priorityMatrix}
              alt="Proposed features plotted by impact against development feasibility"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
          <p className="mt-[12px] text-center font-ui text-[14px] text-white/50 tracking-[0.14px]">
            Proposed features plotted by impact against development feasibility.
          </p>
        </Reveal>

        {/* ── Limitations & Next Steps ──────────────────────────── */}
        <Section label="LIMITATIONS &amp; NEXT STEPS">
          <Body>
            The small sample limits generalizability. Future work would broaden the participant
            pool, move from implications into a tested prototype, run cross-platform comparison,
            and probe the social features more deeply, which is the area participants responded
            to most strongly.
          </Body>
        </Section>

        {/* ── Takeaway ─────────────────────────────────────────── */}
        <Section label="TAKEAWAY">
          <Body>
            The instinct in recommendation design is to add intelligence. My research suggested
            the opposite: the fix for choice overload is often less, fewer options surfaced at
            once, clearer reasons behind each suggestion, and controls that map to the shortcuts
            people already use to decide.
          </Body>
        </Section>

      </main>

      <Reveal className="mt-[60px] xl:mt-[80px]">
        <Footer />
      </Reveal>
    </div>
  );
}
