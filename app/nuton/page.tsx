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
  landingOld:  "/nuton landing page current.webp",
  landingNew:  "/nuton landing page new.webp",
  emptyState:  "/Empty state structured learning.png",
  filesLinks:  "/Files and links structured learning.webp",
  generate:    "/Generate lesson.png",
  lesson:      "/Structured Learning Lesson.webp",
  aiChat:      "/Structured Learning AI Chat.webp",
  flashcards:  "/Structured Learning flashcards.png",
  notes:        "/Structured Learning Notes.png",
  notesWritten: "/Structured Learning notes written.webp",
  podcast:     "/Structured Learning podcast playing.webp",
  quiz:        "/Structured Learning quiz multichoice.webp",
  setupQuiz:   "/Structured Learning setup quiz.webp",
  ia:          "/nuton-information-architecture.webp",
  userFlow:    "/nuton-user-flow.webp",
  typeColor:   "/Type&color.webp",
  mobile:      "/nuton mobile.webp",
  designSys:   "/Design system shot.webp",
  // Shared with the gallery; renaming the gallery file breaks this
  dsDocs:      "/gallery/04-Nuton design system docs.webp",
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
    <span className="inline-flex items-center rounded-[10px] border border-white/30 bg-white/10 pl-[14px] pr-[13.5px] pt-[7px] pb-[5px] font-ui text-[12px] md:text-[13px] leading-none font-medium tracking-[0.5px] text-white whitespace-nowrap">
      {children}
    </span>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Reveal className="mt-[48px] xl:mt-[64px]">
      <div className="mx-auto max-w-[760px]">
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
        {Array.from({length: 60}, (_, i) => i).map((i) => (
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
              <p className="mt-[12px] font-ui text-[13px] md:text-[14px] leading-[1.6] text-white/75 tracking-[0.13px]">
                Since launch, Nuton has helped more than 150,000 students create over 3,000,000 structured
                learning plans.
              </p>
            </div>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.6] text-white/80 tracking-[0.16px] xl:max-w-[520px]">
              Nuton (Newton) is an AI-powered learning tool that turns any source material into a
              structured course with an adaptive tutor. Drop in a PDF, slide deck, video, YouTube link,
              audio file, article or block of text, and Nuton builds lessons, flashcards, quizzes and a
              podcast version, with room for your own notes.
            </p>
          </div>
        </section>

        {/* ── Live site banner ─────────────────────────────────── */}
        <LiveSiteBanner
          href="https://nuton.app"
          src={A.landingNew}
          alt="Nuton landing page, view live site"
          ratio="53.28%"
          className="mt-[40px] xl:mt-[80px] enter-2"
        />

        {/* ── The Problem ──────────────────────────────────────── */}
        <Section label="THE PROBLEM">
          <Body>
            Learners today aren&apos;t short on material. They have lecture recordings, hundred-page
            readings, slide decks and endless articles; what they lack is a way through it. A two-hour
            lecture hands you everything at once and a path through none of it, so people skim, leave
            readings unfinished and miss more than they take in. Existing tools make it worse. Note-
            taking and flashcard apps each handle one piece, and the learner still has to put the pieces
            together and structure the material themselves. Most don&apos;t. Finding a path through the
            content becomes a job of its own, and that job gets in the way of learning.
          </Body>
        </Section>

        {/* ── Role ─────────────────────────────────────────────── */}
        <Section label="ROLE">
          <Body>
            My role had two parts. On the website, I led the redesign, reworking the existing site end
            to end so it explained the product&apos;s value and positioning more clearly. On the app, I
            took the mobile and web design from zero to something shippable. Based on the research, the
            design had to:
          </Body>
          <ul className="mt-[16px] space-y-[12px] list-disc list-outside pl-[20px]">
            {[
              "Make the input step feel effortless for any source type: PDF, video, link, audio, or plain text.",
              "Make the generated plan feel trustworthy and worth starting.",
              "Keep the learning tools (lessons, tutor, flashcards, podcast, notes, quizzes) unified under one visual language.",
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
              <img loading="lazy" decoding="async"
                src={A.landingNew}
                alt="Nuton redesigned landing page"
                className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
              />
            </div>
          </div>
          <p className="mt-[12px] text-center font-ui text-[14px] text-white/70 tracking-[0.14px]">
            The old website landing page vs the redesigned version
          </p>
        </Reveal>

        {/* ── Translating research ──────────────────────────────── */}
        <Section label="TRANSLATING RESEARCH INTO A VISUAL DIRECTION">
          <Body>
            The research gave me a clear spine to design around: a learner drops in a source, waits
            briefly and gets back a structured course. My job was to give that spine a face that held up
            across very different moments, from a blank upload screen to a finished multi-chapter
            course. I pulled references from outside ed-tech, mostly editorial layouts and reading apps
            that handle dense content well, rather than similar products, which tend to go playful or
            gamified.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            One tension shaped the direction. The product makes a bold promise, turning something as
            dense as a four-hundred-page textbook into a usable course in about a minute, and a visual
            language that felt too decorated would undercut that promise before a learner even saw the
            result.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Six tools is a lot of surface for one product, so I drafted a baseline information
            architecture first and used it to test whether the design decisions I had planned would hold
            up. The user flow has two ways in and one loop once you&apos;re there. New learners arrive
            with material and need a course built from it; returning learners want to pick up where they
            stopped. After that, it&apos;s the same cycle: read a chapter, test recall, ask the tutor
            when something is unclear.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            For the design system, I defined the foundations as tokens first, so no raw values reach the
            interface. On top of those I built more than thirty components, from buttons and inputs to
            the pieces only Nuton needs: the flashcard, quiz, podcast player, block editor and AI tutor
            chat. Figma is the source of truth, tokens are generated from it into code, and every
            component meets WCAG 2.2 AA by default. The whole system is documented on its own site,
            rendered from the real component package rather than copies made for the docs.
          </p>
          
        </Section>

        {/* ── IA diagram ────────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img loading="lazy" decoding="async"
            src={A.ia}
            alt="Nuton information architecture"
            className="w-full h-auto rounded-[5px] pointer-events-none"
          />
        </Reveal>

        {/* ── User flow diagram ─────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img loading="lazy" decoding="async"
            src={A.userFlow}
            alt="Nuton user flow"
            className="w-full h-auto rounded-[5px] pointer-events-none"
          />
        </Reveal>

        {/* ── Design system docs site, the image links to it ──── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <a
            href="https://nuton-design-system.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open the Nuton design system site"
            className="block overflow-hidden rounded-[5px] transition-opacity hover:opacity-90"
          >
            <img loading="lazy" decoding="async"
              src={A.dsDocs}
              alt="Nuton design system documentation site"
              className="block w-full h-auto pointer-events-none"
            />
          </a>
        </Reveal>

        {/* ── Type & color ──────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img loading="lazy" decoding="async"
            src={A.typeColor}
            alt="Nuton type and color system"
            className="w-full h-auto rounded-[5px] pointer-events-none"
          />
        </Reveal>

        {/* ── Design system ─────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img loading="lazy" decoding="async"
            src={A.designSys}
            alt="Nuton design system"
            className="w-full h-auto rounded-[5px] pointer-events-none"
          />
        </Reveal>

        {/* ── Designing the input experience ───────────────────── */}
        <Section label="DESIGNING THE INPUT EXPERIENCE">
          <Body>
            The input screen had to accept PDFs, slide decks, video, YouTube links, audio, articles and
            plain text without ever feeling like a settings panel a learner had to study first. I
            treated the empty state as the product&apos;s real first impression, since it&apos;s the
            first thing anyone sees, and designed it around one large drop target. The screen should say
            &ldquo;bring me anything&rdquo; instead of asking the learner to choose carefully. The
            loading and generating states needed more attention than usual because the wait is built
            into the product. Instead of a generic spinner, I wanted that time to feel like visible
            progress, with a sense that the source was being read and organized.
          </Body>
        </Section>

        {/* ── Empty state ───────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "71.11%" }}>
            <img loading="lazy" decoding="async"
              src={A.emptyState}
              alt="Nuton empty state with the drop target"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Files and links ───────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "71.11%" }}>
            <img loading="lazy" decoding="async"
              src={A.filesLinks}
              alt="Nuton files and links input screen"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Generate lesson ───────────────────────────────────── */}
        <Reveal className="mt-[16px] xl:mt-[24px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "71.11%" }}>
            <img loading="lazy" decoding="async"
              src={A.generate}
              alt="Nuton generating a lesson from uploaded source"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Designing the generated plan ─────────────────────── */}
        <Section label="DESIGNING THE GENERATED PLAN">
          <Body>
            This is where the product has to earn the learner&apos;s trust, so I designed it as a
            reading experience first and a dashboard second. The course arrives as chapters and
            sections, and the hierarchy had to make that structure feel authored, not mechanically
            extracted. Confident chapter titles, quieter section labels and comfortable body text let
            the eye move from the shape of the whole course down into any single lesson. The constraint
            behind this screen is that the model is only as good as what it&apos;s fed. A clean textbook
            chapter produces a plan with real structure. A rambling lecture recording or a badly scanned
            PDF produces something thinner, and the model can&apos;t tell you that; it generates with
            the same confidence either way. I wasn&apos;t working on the generation pipeline, so I
            couldn&apos;t make weak output stronger, but I could stop the interface from overselling it.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Chapter weight is the clearest example. Generation doesn&apos;t distribute evenly, so one
            chapter arrives with real depth and the next is a single idea stretched to fill a slot.
            Identical rows make both look equally authoritative, and that small dishonesty costs you the
            user the first time they open the weak one. The metadata line under each section title does
            that work: reading time, card count and quiz count, all describing what was actually
            generated instead of promising something up front. A section marked &ldquo;14 min read, 3
            cards, 1 quiz&rdquo; tells the learner how much is really there.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            The other decision was treating the plan as a draft, not a verdict. Generation isn&apos;t
            deterministic. Run the same source twice and you get two defensible structures, and the
            learner can&apos;t check which one is right. So instead of defending the output, the screen
            lets them move through it on their own terms: start anywhere, skip a chapter that isn&apos;t
            landing, go to the tutor when a lesson comes up short. The failure I was designing against
            was a learner hitting one weak chapter and giving up on the whole plan.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Spacing did a lot of the work here. Instead of packing chapters into tight, list-like rows,
            I gave each one room, which made a plan generated in under a minute feel considered rather
            than dumped onto the page.
          </p>
        </Section>

        {/* ── Lesson screen ─────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "71.11%" }}>
            <img loading="lazy" decoding="async"
              src={A.lesson}
              alt="Nuton structured lesson view"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Cohesive language ─────────────────────────────────── */}
        <Section label="A COHESIVE LANGUAGE ACROSS DIFFERENT TOOLS">
          <Body>
            Six tools (structured lessons, an AI tutor, flashcards, a podcast mode, quizzes and notes)
            is exactly where a product like this tends to fall apart visually, with each feature
            drifting into its own look as it gets built. I treated all six as one system from the start.
            The same cards, buttons, headers and containers are reused everywhere, so a flashcard and a
            quiz question look like they come from the same family even though they serve different
            moments. The AI tutor was the hardest piece to place. It had to feel present and
            conversational without competing with the lesson beside it, so I kept it in the same visual
            key as the lesson, reading as part of the course rather than a chatbot bolted on.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Color and type held the six tools together. One restrained palette and type scale runs
            through all of them, so going from a lesson to flashcards to the podcast never feels like
            switching apps. Each tool still needed to be recognizable at a glance, so each one gets a
            single distinguishing icon and a light accent, always inside the shared visual language.
          </p>
        </Section>

        {/* ── Tool screenshots ──────────────────────────────────── */}
        {[
          { src: A.aiChat,      alt: "Nuton AI tutor chat" },
          { src: A.podcast,     alt: "Nuton podcast mode" },
          { src: A.flashcards,  alt: "Nuton flashcards" },
          { src: A.setupQuiz,   alt: "Nuton quiz setup" },
          { src: A.quiz,        alt: "Nuton quiz multiple choice" },
          { src: A.notesWritten, alt: "Nuton notes written" },
        ].map(({ src, alt }) => (
          <Reveal key={alt} className="mt-[16px] xl:mt-[24px]">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto rounded-[5px] pointer-events-none"
            />
          </Reveal>
        ))}

        {/* ── Mobile screens ────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img loading="lazy" decoding="async"
            src={A.mobile}
            alt="Nuton mobile screens"
            className="w-full h-auto rounded-[5px] pointer-events-none"
          />
        </Reveal>

        {/* ── Outcome ───────────────────────────────────────────── */}
        <Section label="OUTCOME">
          <Body>
            Since launch, more than 150,000 learners have used Nuton to generate over 3,000,000
            structured lessons, and the feedback keeps coming back to how simple it is. The project was
            personal before it was professional. I&apos;d just finished a master&apos;s degree, so I
            knew what falling behind felt like, and I kept hearing the same thing from classmates buried
            under reading they couldn&apos;t get through. Nuton was taking on a problem I was living,
            and I wanted to help build the thing I needed. The goal is for millions of students around
            the world to use it as a learning companion, and I think that&apos;s reachable in the next
            two to three years. If you&apos;re a student, or anyone who wants a simpler way to study,
            give Nuton a try.
          </Body>
        </Section>

      </main>

      <Reveal className="mt-[60px] xl:mt-[80px]">
        <Footer />
      </Reveal>
    </div>
  );
}
