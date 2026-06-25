/* About page, Figma node 123-1786 (1440 × 1412) */

import StickyHeader from "../components/StickyHeader";
import BackButton from "../components/BackButton";
import NowPlaying from "../components/NowPlaying";
import LastWatched from "../components/LastWatched";

const A = {
  /* shared with landing page */
  hline:    "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:   "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal: "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright: "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:   "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
  /* about-only assets */
  heHim:   "/9b23a1478147f6057d98936c209529d659e88236.svg",
  line1:   "/006d0ea029c91815a91219e47203cebf282ec35c.svg",
  line2:   "/88e443b62b15bf8c46c5a5e58acb0d27c30cc6d9.svg",
  capsule: "/d630a5c0c34e595550b70190eef3e6542708e04a.png",
  folder:  "/05889087ae0710df25ba5f60ad930700a19483d4.png",
};

/* ── Grid tile, same component pattern as landing page ────────── */
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

/* ── Capabilities card ───────────────────────────────────────────── */
function Capabilities() {
  const Divider = ({ top }: { top: number }) => (
    <div
      className="absolute"
      style={{
        left: 51,
        top,
        width: 1181,
        height: 1,
        backgroundColor: "rgba(65, 90, 119, 0.8)",
      }}
    />
  );

  const Skills = ({ top, children }: { top: number; children: React.ReactNode }) => (
    <div
      className="absolute w-[548px] text-right leading-[0] font-ui text-[16px] font-normal text-[#415a77] tracking-[-0.32px]"
      style={{ right: 48, top }}
    >
      {children}
    </div>
  );

  const resumeHref = "https://drive.google.com/file/d/1MDDQoj3S6tR9l0JEXOiTJjlV0dJnMMQ4/view?usp=sharing";

  return (
    <>
      {/* ── Mobile layout (< 1280px) ─────────────────── */}
      <div className="xl:hidden w-full rounded-[5px] bg-white p-[20px] md:p-[32px]">

        {/* header */}
        <div className="flex items-center justify-between mb-[20px]">
          <p className="font-ui text-[16px] font-medium text-[#415a77] tracking-[-0.32px]">CAPABILITIES</p>
          <a href={resumeHref} target="_blank" rel="noopener noreferrer"
            className="font-ui text-[14px] font-medium text-[#415a77] underline tracking-[-0.28px]">
            RESUME
          </a>
        </div>

        {/* Design */}
        <p className="font-subtitle text-[26px] md:text-[32px] text-[#415a77] tracking-[-0.52px] mb-[10px]">Design</p>
        <div className="font-ui text-[13px] md:text-[14px] text-[#415a77] tracking-[-0.26px] leading-[1.6] mb-[20px]">
          <p>MULTI-PLATFORM USER INTERFACE &amp; PRODUCT DESIGN</p>
          <p>INTERACTION DESIGN</p>
          <p>ACCESSIBLE DESIGN</p>
          <p>WIREFRAMING &amp; RAPID PROTOTYPING</p>
          <p>FRONT-END WEB DEVELOPMENT</p>
        </div>
        <hr className="border-[#415a77]/20 mb-[20px]" />

        {/* Strategy */}
        <p className="font-subtitle text-[26px] md:text-[32px] text-[#415a77] tracking-[-0.52px] mb-[10px]">Strategy</p>
        <div className="font-ui text-[13px] md:text-[14px] text-[#415a77] tracking-[-0.26px] leading-[1.6] mb-[20px]">
          <p>MIXED METHODS RESEARCH</p>
          <p>DATA ANALYSIS</p>
          <p>INFORMATION ARCHITECTURE</p>
        </div>
        <hr className="border-[#415a77]/20 mb-[20px]" />

        {/* Tooling */}
        <p className="font-subtitle text-[26px] md:text-[32px] text-[#415a77] tracking-[-0.52px] mb-[10px]">Tooling</p>
        <div className="font-ui text-[13px] md:text-[14px] text-[#415a77] tracking-[-0.26px] leading-[1.6] mb-[32px]">
          <p>FIGMA</p>
          <p>ADOBE CC</p>
          <p>PROVENBYUSERS / CODEX, CLAUDE CODE &amp; DESIGN</p>
          <p>MIXPANEL / HOTJAR</p>
          <p>MIRO</p>
        </div>
        <hr className="border-[#415a77]/20 mb-[32px]" />

        {/* CTA */}
        <div className="flex flex-col items-center gap-[16px]">
          <p className="font-subtitle text-[28px] md:text-[34px] text-center text-[#415a77] tracking-[-0.56px]">
            Let&apos;s work together
          </p>
          <div className="relative h-[60px] w-[200px]">
            <div className="absolute" style={{ left: 0, top: -4, width: 200, height: 65 }}>
              <img src={A.capsule} alt="" className="absolute inset-0 block size-full max-w-none object-cover pointer-events-none" />
            </div>
            <a href="mailto:audumart@gmail.com"
              className="relative flex h-full w-full items-center justify-center font-ui text-[20px] font-medium leading-[1.34] tracking-[-0.2px] text-white whitespace-nowrap">
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* ── Desktop layout (≥ 1280px) ─────────────────── */}
      <div className="hidden xl:block relative h-[767px] w-[1280px] overflow-hidden rounded-[5px] bg-white">

        <p className="absolute font-ui text-[20px] font-medium leading-[1.34] text-[#415a77] tracking-[-0.4px] whitespace-nowrap"
          style={{ left: 48, top: 32 }}>
          CAPABILITIES
        </p>
        <div className="absolute" style={{ left: 1200, top: 24, width: 32, height: 32 }}>
          <img src={A.folder} alt="" className="absolute inset-0 block size-full max-w-none object-cover pointer-events-none" />
        </div>
        <a href={resumeHref} target="_blank" rel="noopener noreferrer"
          className="absolute font-ui text-[18px] font-medium leading-[1.34] text-[#415a77] tracking-[-0.36px] underline whitespace-nowrap"
          style={{ left: 1119, top: 32 }}>
          RESUME
        </a>

        <Divider top={220} />
        <Divider top={355} />
        <Divider top={540} />

        {[
          { label: "Design",   top: 150 },
          { label: "Strategy", top: 285 },
          { label: "Tooling",  top: 470 },
        ].map(({ label, top }) => (
          <p key={label}
            className="absolute font-subtitle text-[40px] leading-[1.34] text-[#415a77] tracking-[-0.8px] whitespace-nowrap"
            style={{ left: 48, top }}>
            {label}
          </p>
        ))}

        <Skills top={107}>
          <p className="leading-[1.34] mb-0">MULTI-PLATFORM USER INTERFACE &amp; PRODUCT DESIGN</p>
          <p className="leading-[1.34] mb-0">INTERACTION DESIGN</p>
          <p className="leading-[1.34] mb-0">ACCESSIBLE DESIGN</p>
          <p className="leading-[1.34] mb-0">WIREFRAMING &amp; RAPID PROTOTYPING</p>
          <p className="leading-[1.34]">FRONT-END WEB DEVELOPMENT</p>
        </Skills>
        <Skills top={284}>
          <p className="leading-[1.34] mb-0">MIXED METHODS RESEARCH</p>
          <p className="leading-[1.34] mb-0">DATA ANALYSIS</p>
          <p className="leading-[1.34]">INFORMATION ARCHITECTURE</p>
        </Skills>
        <Skills top={385}>
          <p className="leading-[1.34] mb-0">FIGMA</p>
          <p className="leading-[1.34] mb-0">ADOBE CC</p>
          <p className="leading-[1.34] mb-0">PROVENBYUSERS<br aria-hidden />CODEX, CLAUDE CODE &amp; DESIGN</p>
          <p className="leading-[1.34] mb-0">MIXPANEL<br aria-hidden />HOTJAR</p>
          <p className="leading-[1.34]">MIRO</p>
        </Skills>

        <p className="absolute w-[469px] text-center font-subtitle text-[40px] leading-[1.34] text-[#415a77] tracking-[-0.8px]"
          style={{ left: "50%", top: 602, transform: "translateX(-50%)" }}>
          Let&apos;s work together
        </p>
        <div className="absolute" style={{ left: "50%", top: 664, width: 230, height: 71, transform: "translateX(-50%)" }}>
          <div className="absolute" style={{ left: 0, top: -4, width: 230, height: 76 }}>
            <img src={A.capsule} alt="" className="absolute inset-0 block size-full max-w-none object-cover pointer-events-none" />
          </div>
          <a href="mailto:audumart@gmail.com"
            className="relative flex h-full w-full items-center justify-center font-ui text-[25px] font-medium leading-[1.34] tracking-[-0.25px] text-white whitespace-nowrap">
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
}

/* ── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 flex flex-col md:flex-row h-auto md:h-[114px] items-center justify-center md:justify-between gap-[16px] md:gap-0 px-[24px] md:px-[60px] xl:px-[120px] py-[24px] md:py-0"
    >
      <div className="flex items-center gap-[8px]">
        <div className="h-[36px] w-[33px] shrink-0">
          <img src={A.copyright} alt="" className="block size-full" />
        </div>
        <p className="font-ui text-[16px] font-medium leading-normal text-white whitespace-nowrap">
          Martins Audu 2026
        </p>
      </div>
      <div className="flex items-center gap-[8px]">
        <div className="hidden md:block h-[78px] w-[58px] shrink-0">
          <img src={A.connect} alt="" className="block size-full" />
        </div>
        <a
          href="mailto:audumart@gmail.com"
          className="font-ui inline-flex items-center overflow-clip rounded-[30px] bg-white px-[12px] py-[7px] text-[16px] font-medium leading-[20px] tracking-[0.32px] text-[#415a77] whitespace-nowrap transition-opacity hover:opacity-80"
        >
          audumart@gmail.com
        </a>
      </div>
    </footer>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
      {/* Grid: tile 1 starts at -25px (centred at 706px top), tile 2 at 703px */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <GridTile index={0} left="calc(50% - 0.5px)" />
      <GridTile index={1} left="calc(50% - 0.5px)" />
      <GridTile index={2} left="calc(50% - 0.5px)" />
      <GridTile index={3} left="calc(50% - 0.5px)" />
      <GridTile index={4} left="calc(50% - 0.5px)" />
      <GridTile index={5} left="calc(50% - 0.5px)" />
      </div>
      {/* Nav, ABOUT active */}
      <StickyHeader defaultActive="ABOUT" />

      <main className="relative z-10 flex-1 pt-[80px] px-[24px] md:px-[40px] xl:px-[80px]">

        {/* ── Back button ── */}
        <div className="mt-[40px] xl:mt-[72px] enter-1">
          <BackButton />
        </div>

        {/* ── Bio + He/Him icon ── */}
        <div className="relative mt-[24px] xl:mt-[32px] flex items-start enter-1">
          <div className="w-full xl:w-[991px]">
            <div className="font-subtitle text-[22px] md:text-[30px] xl:text-[40px] leading-[0] text-white tracking-[-0.44px] md:tracking-[-0.6px] xl:tracking-[-0.8px]">
              <p className="leading-[1.34]">
                With 7+ years of design experience my expertise consists of delivering
                clean visual design via iterative processes and detailed research that
                turns objectives into solutions.
              </p>
            </div>
            <div className="mt-[24px] xl:mt-[32px]">
              <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
                My interest in building things started with my first LEGO set. Turning a pile of separate
                pieces into something that actually worked taught me an instinct I still rely on: understand
                how the parts fit, then build something coherent. That&apos;s the core of how I approach
                design, from early sketches to shaping a full product. Constant participation in competitive sports shaped the rest
                of how I work. They made it clear that good results come from preparation, discipline, and
                a willingness to push past easy, and I bring that same standard to design. I&apos;m not
                satisfied with work that just functions. I want it to perform, hold up in real use, and
                improve on whatever came before it.
              </p>
            </div>
          </div>

          <div className="absolute shrink-0 hidden xl:block" style={{ left: 1216, top: 0, width: 64, height: 133 }}>
            <img src={A.heHim} alt="he/him" className="block size-full max-w-none" />
          </div>
        </div>

        {/* ── Capabilities card ── */}
        <div className="mt-[40px] xl:mt-[80px] enter-2">
          <Capabilities />
        </div>

        {/* ── Now playing + Last watched ── */}
        <div className="mt-[40px] xl:mt-[60px] enter-3 flex flex-wrap gap-[12px]">
          <NowPlaying />
          <LastWatched />
        </div>

      </main>

      {/* ── Footer, mt to match top=1298 from page top ── */}
      {/* content ends at ~429+767=1196, gap to footer = 1298-1196=102px */}
      <div className="mt-[60px] xl:mt-[102px] enter-3">
        <Footer />
      </div>
    </div>
  );
}
