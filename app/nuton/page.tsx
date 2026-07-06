/* Nuton work page */

import StickyHeader from "../components/StickyHeader";
import Reveal from "../components/Reveal";
import BackButton from "../components/BackButton";
import LiveSiteBanner from "../components/LiveSiteBanner";

const A = {
  hline:       "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:      "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal:    "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright:   "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:     "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
  landingOld:  "/nuton landing page current.png",
  landingNew:  "/nuton landing page new.png",
  emptyState:  "/Empty state structured learning.png",
  filesLinks:  "/Files and links structured learning.png",
  generate:    "/Generate lesson.png",
  lesson:      "/Structured Learning Lesson.png",
  aiChat:      "/Structured Learning AI Chat.png",
  flashcards:  "/Structured Learning flashcards.png",
  notes:        "/Structured Learning Notes.png",
  notesWritten: "/Structured Learning notes written.png",
  podcast:     "/Structured Learning podcast playing.png",
  quiz:        "/Structured Learning quiz multichoice.png",
  setupQuiz:   "/Structured Learning setup quiz.png",
  designSys:   "/Design system shot.png",
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

export default function NutonPage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((i) => (
          <GridTile key={i} index={i} left="calc(50% - 0.5px)" />
        ))}
      </div>

      <StickyHeader />

      <main className="relative z-10 flex-1 pt-[80px] px-[24px] md:px-[40px] xl:px-[80px]">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section aria-label="Project overview" className="enter-1">
          <div className="mt-[40px] xl:mt-[60px] flex items-center gap-[16px]">
            <BackButton />
            <h1 className="flex-1 text-center font-ui text-[48px] md:text-[80px] xl:text-[100px] leading-none tracking-[-0.02em] text-white">
              Nuton
            </h1>
            <div className="hidden md:block w-[32px] shrink-0" aria-hidden="true" />
          </div>

          <div className="mt-[20px] xl:mt-[24px] flex flex-wrap items-center justify-center gap-[8px] xl:gap-[12px]">
            <WorkTag>STRATEGY</WorkTag>
            <WorkTag>PRODUCT DESIGN</WorkTag>
            <WorkTag>WIREFRAMING &amp; PROTOTYPING</WorkTag>
          </div>

          <div className="mt-[40px] xl:mt-[50px] flex flex-col lg:flex-row lg:justify-center gap-[24px] xl:gap-[16px]">
            <div className="lg:w-[454px] shrink-0">
              <h2 className="font-subtitle text-[22px] md:text-[28px] xl:text-[32px] leading-[1.34] text-white tracking-[-0.44px] xl:tracking-[-0.64px]">
                Learn it once. Actually remember.
              </h2>
              <p className="mt-[12px] font-ui text-[13px] md:text-[14px] leading-[1.6] text-white/60 tracking-[0.13px]">
                Since launching Nuton has helped over 2000 students create 13000+
                structured learning plans.
              </p>
            </div>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.6] text-white/80 tracking-[0.16px] xl:max-w-[520px]">
              Nuton (Newton) is an AI learning tool that turns any source material
              into a structured course with an adaptive tutor. A learner drops in a
              PDF, slide deck, video, YouTube link, audio file, article, or block of
              text and Nuton generates organized lessons, flashcards, quizzes, a
              podcast version, and lets you make notes around it.
            </p>
          </div>
        </section>

        {/* ── Live site banner ─────────────────────────────────── */}
        <LiveSiteBanner
          href="https://nuton.app"
          src={A.landingNew}
          alt="Nuton landing page — view live site"
          ratio="71.11%"
          className="mt-[40px] xl:mt-[80px] enter-2"
        />

        {/* ── The Problem ──────────────────────────────────────── */}
        <Section label="THE PROBLEM">
          <Body>
            Learners today are not short on material. They have lecture recordings,
            hundred-page readings, slide decks, and endless articles. What they lack
            is a way to move through it. Sitting through a two-hour lecture hands you
            everything at once and a path through none of it, so learners resort to
            skimming through unfinished reading and miss more than they take in.
            Existing tools widen the gap instead of closing it: note-taking and
            flashcard apps each tackle one piece of the puzzle, and the learner still
            has to assemble them. They are left to structure the material themselves,
            and most do not. The path through the content becomes a job of its own, a
            job that gets in the way of actually learning.
          </Body>
        </Section>

        {/* ── Role ─────────────────────────────────────────────── */}
        <Section label="ROLE">
          <Body>
            My role had two distinct parts. On Nuton&apos;s website I led the
            redesign, taking an existing site and reworking it end to end into
            something that better communicated the product&apos;s value and
            positioning. On the app side, I took the design from zero to something
            shippable. Drawing from the research direction I knew the design needed
            to achieve the following:
          </Body>
          <ul className="mt-[16px] space-y-[12px] list-disc list-outside pl-[20px]">
            {[
              "Make the input step feel effortless for any source type: PDF, video, link, audio, or plain text.",
              "Make the generated plan feel trustworthy and worth starting.",
              "Keep the learning tools — lessons, tutor, flashcards, podcast, notes, quizzes — unified under one visual language.",
              "Keep the time to first value short enough that the product felt like a tool, not a course.",
            ].map((item) => (
              <li key={item} className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Landing page comparison ───────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] xl:gap-[24px]">
            <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "60.30%" }}>
              <img
                src={A.landingOld}
                alt="Nuton original landing page"
                className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "60.30%" }}>
              <img
                src={A.landingNew}
                alt="Nuton redesigned landing page"
                className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
              />
            </div>
          </div>
          <p className="mt-[12px] text-center font-ui text-[14px] text-white/50 tracking-[0.14px]">
            The old website landing page vs the redesigned version
          </p>
        </Reveal>

        {/* ── Translating research ──────────────────────────────── */}
        <Section label="TRANSLATING RESEARCH INTO A VISUAL DIRECTION">
          <Body>
            The research gave me a clear spine to design around: a learner drops in
            a source, waits briefly, and gets back a structured course. My task was
            to give that spine a face that could carry the product across very
            different moments, from a blank upload screen to a finished six-chapter
            course. I started by pulling references from outside the ed-tech
            category, leaning toward editorial layouts and reading-focused apps that
            handle density gracefully rather than similar products that tend to lean
            playful or gamified.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            The direction I landed on was shaped by one central tension: the product
            makes a bold promise, turning something as dense as a four-hundred-page
            textbook into a usable course in about a minute, and a visual language
            that felt too decorated would undercut that promise before a learner even
            saw the result. So I leaned towards using generous whitespace, a quiet
            and limited color palette, and a simple typography system doing the
            expressive work, so the interface read as considered and capable rather
            than novel.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            I treated the empty state as the real first impression of the product,
            since it is the first thing anyone sees before the magic happens.
          </p>
        </Section>

        {/* ── Design system ─────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "90.62%" }}>
            <img
              src={A.designSys}
              alt="Nuton design system"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Empty state ───────────────────────────────────────── */}
        <Reveal className="mt-[16px] xl:mt-[24px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "71.11%" }}>
            <img
              src={A.emptyState}
              alt="Nuton empty state — drop target screen"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Designing the input experience ───────────────────── */}
        <Section label="DESIGNING THE INPUT EXPERIENCE">
          <Body>
            The input screen had to absorb real variety. PDFs, slide decks, video,
            YouTube links, audio, articles, and plain text, without ever feeling like
            a settings panel a learner had to study before getting started. I
            designed around a single, generous drop target as the visual anchor. The
            intent was for the screen to say bring me anything, not ask the learner
            to choose carefully. The loading and generating states needed more
            attention than usual because of the wait built into the product. Rather
            than a generic spinner, I wanted that time to feel like visible progress,
            a sense that the source was actively being read and organized.
          </Body>
        </Section>

        {/* ── Files and links ───────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "71.11%" }}>
            <img
              src={A.filesLinks}
              alt="Nuton files and links input screen"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Generate lesson ───────────────────────────────────── */}
        <Reveal className="mt-[16px] xl:mt-[24px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "71.11%" }}>
            <img
              src={A.generate}
              alt="Nuton generating a lesson from uploaded source"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Designing the generated plan ─────────────────────── */}
        <Section label="DESIGNING THE GENERATED PLAN">
          <Body>
            This is the screen where the product has to earn the learner&apos;s
            trust, so I approached it as a reading experience first and a dashboard
            second. The generated course arrives as a set of chapters and sections,
            and the visual hierarchy needed to make that structure feel deliberate
            and authored rather than mechanically extracted. Using a clear type scale
            with confident, distinct chapter titles, quieter section labels beneath
            them, and comfortable, readable body text, so the eye could move from
            the shape of the whole course down into any single lesson without effort.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Spacing carried a lot of the essence of my efforts here. Instead of
            packing chapters into tight, list-like rows, I gave each one room to
            breathe, which made a list generated in under a minute feel considered
            rather than dumped onto the page.
          </p>
        </Section>

        {/* ── Lesson screen ─────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "71.11%" }}>
            <img
              src={A.lesson}
              alt="Nuton structured lesson view"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Cohesive language ─────────────────────────────────── */}
        <Section label="A COHESIVE LANGUAGE ACROSS DIFFERENT TOOLS">
          <Body>
            Six distinct tools: structured lessons, an AI tutor, flashcards, a
            podcast mode, quizzes, and notes, is exactly where a product like this
            tends to fall apart visually, with each feature drifting into its own
            look as it gets built. I treated all six as one system from the outset
            rather than as separate features to skin individually. A shared component
            set, the same cards, buttons, headers, and containers reused everywhere,
            meant a flashcard and a quiz question were visibly built from the same
            family of parts, even though they served different moments in the
            learning flow. The AI tutor was the hardest piece to place. It needed to
            feel present and conversational without competing with or undermining the
            lesson content sitting next to it. I designed it to live in the same
            visual key as the rest of the lesson so it read as a natural extension of
            the material, a patient guide built into the course.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            The color and type helped bring the six tools together. The same
            restrained palette and type scale carried through every one of them, so
            moving from reading a lesson to drilling flashcards to listening to the
            podcast mode never felt like switching apps. Each tool still needed
            enough identity to be instantly recognizable, so I gave each one a single
            distinguishing icon and a light accent treatment, always expressed within
            the shared visual language rather than breaking from it.
          </p>
        </Section>

        {/* ── Tool screenshots grid ─────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] xl:gap-[24px]">
            {[
              { src: A.aiChat,     alt: "Nuton AI tutor chat" },
              { src: A.podcast,    alt: "Nuton podcast mode" },
              { src: A.flashcards, alt: "Nuton flashcards" },
              { src: A.setupQuiz,    alt: "Nuton quiz setup" },
              { src: A.quiz,         alt: "Nuton quiz multiple choice" },
              { src: A.notesWritten, alt: "Nuton notes written" },
            ].map(({ src, alt }) => (
              <div key={alt} className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "71.11%" }}>
                <img
                  src={src}
                  alt={alt}
                  className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Outcome ───────────────────────────────────────────── */}
        <Section label="OUTCOME">
          <Body>
            Since launch Nuton has been used by over 2000 learners to generate more
            than 13000 structured lessons and counting, with lots of positive
            feedback from users appreciating the simplicity of the platform and
            acknowledging how much of a valuable tool it is in aiding their learning.
            This project was personal to me before it was professional. As a recently
            graduated master&apos;s student, I knew the feeling of falling behind
            firsthand, and I kept hearing the same thing from people around me:
            classmates buried under reading they could not get through, struggling to
            turn dense material into something they could actually keep up with. The
            problem Nuton was taking on was one I was living, and that is what pulled
            me towards it. I wanted to help build something I needed and recognized
            the value of leading efforts to ship such a project. The goal for Nuton
            is to have millions of students all over the world use it as a learning
            companion and I believe it is something achievable within the next 2-3
            years. If you&apos;re a student reading this or just someone that needs a
            simpler way to study any subject make sure to give Nuton a try!
          </Body>
        </Section>

      </main>

      <Reveal className="mt-[60px] xl:mt-[80px]">
        <Footer />
      </Reveal>
    </div>
  );
}
