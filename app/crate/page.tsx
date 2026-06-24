/* [crate] work page — Design work 3 */

import NavPill from "../components/NavPill";
import Reveal from "../components/Reveal";
import BackButton from "../components/BackButton";

const A = {
  hline:     "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:    "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal:  "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright: "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:   "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
  banner:    "/img-crate.png",
  video1:    "/intro - adding a stem v2.mp4",
  video2:    "/5445651c33b563dc5ed72a2c518d2d9e.mp4",
};

/* ── Grid tile ───────────────────────────────────────────────── */
function GridTile({ top, left }: { top: number; left: string }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute h-[1461px] w-[1513px] -translate-x-1/2 origin-top scale-[0.27] md:scale-[0.53] lg:scale-[0.71] xl:scale-[1]"
      style={{ top, left, opacity: 0.07 }}
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
export default function CratePage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col overflow-hidden">
      {/* Grid tiles */}
      {[0, 729, 1650, 2571, 3492, 4413].map((top) => (
        <GridTile key={top} top={top} left="calc(50% - 0.5px)" />
      ))}

      {/* Nav */}
      <header className="fixed top-[16px] inset-x-0 z-50 flex justify-center pointer-events-none">
        <nav aria-label="Primary navigation" className="pointer-events-auto">
          <NavPill />
        </nav>
      </header>

      <main className="relative z-10 flex-1 pt-[80px] px-[24px] md:px-[40px] xl:px-[80px]">

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section aria-label="Project overview" className="enter-1">

          {/* Title row — back button left, h1 centered via flex-1 */}
          <div className="mt-[40px] xl:mt-[60px] flex items-center gap-[16px]">
            <BackButton />
            <h1 className="flex-1 text-center font-ui text-[48px] md:text-[80px] xl:text-[100px] leading-none tracking-[-0.02em] text-white">
              [crate]
            </h1>
            <div className="hidden md:block w-[32px] shrink-0" aria-hidden="true" />
          </div>

          <div className="mt-[20px] xl:mt-[24px] flex flex-wrap items-center justify-center gap-[8px] xl:gap-[12px]">
            <WorkTag>PRODUCT DESIGN</WorkTag>
            <WorkTag>STRATEGY</WorkTag>
            <WorkTag>INTERACTION DESIGN</WorkTag>
            <WorkTag>WIREFRAMING &amp; PROTOTYPING</WorkTag>
          </div>

          <div className="mt-[40px] xl:mt-[50px] flex flex-col lg:flex-row lg:justify-center gap-[24px] xl:gap-[16px]">
            <div className="lg:w-[454px] shrink-0">
              <h2 className="font-subtitle text-[22px] md:text-[28px] xl:text-[32px] leading-[1.34] text-white tracking-[-0.44px] xl:tracking-[-0.64px]">
                Separate stems. Anywhere, anytime.
              </h2>
              <p className="mt-[12px] font-ui text-[13px] md:text-[14px] leading-[1.6] text-white/60 tracking-[0.13px]">
                [Crate] is currently in beta testing and is expected to launch in the last
                quarter of 2026. This is a preview of what happens when a passion for
                technology and music comes together.
              </p>
            </div>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.6] text-white/80 tracking-[0.16px] xl:max-w-[440px]">
              If you&apos;re looking for a great example of an idea going from 0&gt;1,
              [crate] is a lightweight stem-splitting app that lets anyone import a song
              and isolate its individual parts — vocals, drums, bass, instrumentals in
              just a few taps. It was built in response to the bloat and steep learning
              curves of professional music tools, stripping the experience down to a
              single, focused job: get clean stems, fast.
            </p>
          </div>
        </section>

        {/* ── Banner ───────────────────────────────────────────── */}
        <div className="mt-[40px] xl:mt-[80px] enter-2 relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "53.28%" }}>
          <img
            src={A.banner}
            alt="[crate] music library app"
            className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
          />
        </div>

        {/* ── Role ─────────────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              ROLE
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              When the idea for [crate] was shared with me I instantly acknowledged how
              valuable a tool it would be because I am passionate about music and have
              tried several times to figure out how to make my own music or just try to
              dissect my favorite songs to understand the multiple steps that go into
              making them.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              Having a clear idea of the purpose [crate] would serve I immediately got in
              front of my whiteboard to sketch what a potential interface for the
              lightweight desktop app would look like because at its basic level [crate]
              aims to eliminate the complexity that exists in traditional music production
              software.
            </p>
          </div>
        </Reveal>

        {/* ── Sketches / design iterations ─────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "62.27%" }}>
            <img
              src="/crate sketches container.png"
              alt="[crate] early whiteboard sketches"
              className="absolute inset-0 size-full max-w-none object-cover pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── [crate] in action ────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              [crate] IN ACTION
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              [crate] promises accessibility for all. Stem separation has historically
              lived inside dense DAWs and pro audio suites aimed at producers. [crate]
              reframes it as something anyone can use — a utility, not a workstation.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-medium">For Musicians &amp; performers</strong> — Pull a backing track by removing vocals,
              or isolate a single instrument to learn a part by ear. Great for rehearsing,
              transcribing, or building practice loops.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-medium">For DJs &amp; producers</strong> — Source clean acapellas and instrumentals for
              remixing, mashups, and sampling without hunting down official stems that may
              not exist.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-medium">For Singers &amp; vocal coaches</strong> — Generate instant karaoke versions of any
              song, or isolate a reference vocal to study phrasing, breath, and technique.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-medium">For Content creators</strong> — Strip vocals to use instrumentals as
              royalty-friendlier background beds, or pull specific elements for video edits
              and transitions.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-medium">For Educators &amp; students</strong> — Break a recording into its components to
              teach arrangement, demonstrate how a mix is layered, or let students focus on
              one instrument at a time.
            </p>
            <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              <strong className="text-white font-medium">For Curious listeners</strong> — Hear how a favorite track is constructed — what
              the bassline is really doing, how the vocals sit alone purely for the joy of it.
            </p>
          </div>
        </Reveal>

        {/* ── Iterations video ─────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px] bg-black" style={{ paddingTop: "56.25%" }}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 size-full max-w-none object-cover"
              src={A.video1}
            />
          </div>
        </Reveal>

        {/* ── Showcase video ────────────────────────────────────── */}
        <div className="mt-[40px] xl:mt-[64px] relative w-full overflow-hidden rounded-[5px] bg-black" style={{ paddingTop: "56.25%" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 size-full max-w-none object-cover"
            src={A.video2}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at center, transparent 40%, rgba(0,0,0,0.35) 100%)" }}
          />
        </div>

      </main>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <Reveal className="mt-[60px] xl:mt-[80px]">
        <Footer />
      </Reveal>
    </div>
  );
}
