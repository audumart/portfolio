/* QR Pay by DiveHQ — work page */

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
  banner:     "/Banner qrpay.png",
  appShots:   "/App shots qrpay.png",
  lofi:       "/Low-fi sketch qrpay.png",
  styleGuide: "/Style guide qrpay.png",
  personas:   "/Personas qrpay.png",
  flowchart:  "/Flowchart qrpay.png",
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

export default function QrPayPage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col overflow-hidden">
      {[0, 729, 1650, 2571, 3492, 4413, 5334, 6255, 7176].map((top) => (
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
            <h1 className="flex-1 text-center font-ui text-[40px] md:text-[72px] xl:text-[90px] leading-none tracking-[-0.02em] text-white">
              QR Pay by DiveHQ
            </h1>
            <div className="hidden md:block md:w-[32px] xl:w-[40px] shrink-0" aria-hidden="true" />
          </div>

          <div className="mt-[20px] xl:mt-[24px] flex flex-wrap items-center justify-center gap-[8px] xl:gap-[12px]">
            <WorkTag>STRATEGY</WorkTag>
            <WorkTag>PRODUCT DESIGN</WorkTag>
            <WorkTag>WIREFRAMING &amp; PROTOTYPING</WorkTag>
          </div>

          <div className="mt-[40px] xl:mt-[50px] flex flex-col lg:flex-row lg:justify-center gap-[24px] xl:gap-[16px]">
            <h2 className="font-subtitle text-[22px] md:text-[28px] xl:text-[32px] leading-[1.34] text-white tracking-[-0.44px] xl:tracking-[-0.64px] lg:w-[454px] shrink-0">
              Dive into effortless transactions.
            </h2>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.6] text-white/80 tracking-[0.16px] xl:max-w-[440px]">
              Traditional payment methods often involve unnecessary steps and
              friction, creating barriers to fast, secure transactions. DiveHQ
              identified this gap and set out to address it through a
              comprehensive mobile payment application.
            </p>
          </div>
        </section>

        {/* ── Banner — interactive prototype ───────────────────── */}
        <LiveSiteBanner
          href="https://www.figma.com/proto/iz5PqJB5gpZ8elpMPqCFYr/DiveHQ?page-id=0%3A1&node-id=1-6532&p=f&viewport=4914%2C17463%2C0.5&t=jjZSZ2UzUHrMZ1I3-1&scaling=min-zoom&content-scaling=responsive&starting-point-node-id=1%3A6532"
          src={A.banner}
          alt="QR Pay app — view interactive prototype"
          ratio="47.74%"
          label="VIEW INTERACTIVE PROTOTYPE"
          className="mt-[40px] xl:mt-[80px] enter-2"
        />

        {/* ── The solution ─────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              THE SOLUTION
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              QR Pay addresses these challenges through a streamlined mobile
              payment experience centered on Scan to Pay functionality, enabling
              near-instant transactions. The app extends beyond scanning to
              include direct bank transfers, customizable Dive Tags for
              simplified payments, and effortless bill-splitting, consolidating
              essential payment functions into a single, cohesive platform.
            </p>
          </div>
        </Reveal>

        {/* ── App shots ────────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "51.17%" }}>
            <img
              src={A.appShots}
              alt="QR Pay app screens"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Role ─────────────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              ROLE
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              As the lead designer and researcher on QR Pay, I owned the entire
              user experience end to end. From conducting the user research,
              developing personas spanning DiveHQ&apos;s full audience, and
              translated those insights into the product&apos;s direction. From
              there, I defined the user flows, created the wireframes, and built
              out the visual identity and full interface across both light and
              dark modes keeping the experience simple, consistent, and
              user-centered throughout.
            </p>
          </div>
        </Reveal>

        {/* ── Low-fi sketches ──────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "61.72%" }}>
            <img
              src={A.lofi}
              alt="QR Pay low-fidelity wireframe sketches"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Style guide ──────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "51.25%" }}>
            <img
              src={A.styleGuide}
              alt="QR Pay style guide — Nunito typography and colour palette"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Personas ─────────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "90.39%" }}>
            <img
              src={A.personas}
              alt="QR Pay user personas — Grace and Timothy"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Flowchart ────────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <div className="relative w-full overflow-hidden rounded-[5px]" style={{ paddingTop: "115.63%" }}>
            <img
              src={A.flowchart}
              alt="QR Pay user flow diagram"
              className="absolute inset-0 size-full max-w-none object-cover object-top pointer-events-none"
            />
          </div>
        </Reveal>

        {/* ── Wrapping up ──────────────────────────────────────── */}
        <Reveal className="mt-[48px] xl:mt-[64px]">
          <div className="mx-auto max-w-[846px]">
            <p className="font-ui text-[23px] font-bold tracking-[1px] text-white uppercase mb-[16px]">
              WRAPPING UP
            </p>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              At its core, QR Pay reflects the principles of simplicity and
              adaptability. This project reinforced a central lesson: in
              fintech, user-centric design is not a finishing touch but the
              foundation of a successful product. By staying responsive to real
              user needs, validating decisions through personas and flows, and
              consistently prioritizing simplicity over complexity; delivering
              an experience that feels effortless and trustworthy is easy.
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
