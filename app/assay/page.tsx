/* Assay work page */

import StickyHeader from "../components/StickyHeader";
import Reveal from "../components/Reveal";
import BackButton from "../components/BackButton";

const A = {
  hline:     "/ecb27c82bc7b69aa0e749a8df55fe8a8009a4306.svg",
  vlines:    "/64316125bec3af783a1359c7e5524cc4261620a6.svg",
  diagonal:  "/99f347d68ecb22371b4cf07b6ad91ec4637bc039.svg",
  copyright: "/599aa8318660d6a08ab1b899232480042e2c5941.svg",
  connect:   "/de604e076b24d31525748bbec7e36bb8086719f9.svg",
  hero:      "/assay screens/assay hero image.png",
  designSys: "/assay screens/assay design system.png",
  s1:        "/assay screens/1.png",
  s2:        "/assay screens/2.png",
  s3:        "/assay screens/3.png",
  s4:        "/assay screens/4.png",
  s5:        "/assay screens/5.png",
  s6:        "/assay screens/6.png",
  s7:        "/assay screens/7.png",
  s8:        "/assay screens/8.png",
  s9:        "/assay screens/9.png",
  s10:       "/assay screens/10.png",
  s11:       "/assay screens/11.png",
  s12:       "/assay screens/12.png",
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

export default function AssayPage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((i) => (
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
              Assay
            </h1>
            <div className="hidden md:block w-[32px] shrink-0" aria-hidden="true" />
          </div>

          <div className="mt-[20px] xl:mt-[24px] flex flex-wrap items-center justify-center gap-[8px] xl:gap-[12px]">
            <WorkTag>PRODUCT DESIGN</WorkTag>
            <WorkTag>PROTOTYPING</WorkTag>
            <WorkTag>AGENT EVALUATION</WorkTag>
          </div>

          <div className="mt-[40px] xl:mt-[50px] flex flex-col lg:flex-row lg:justify-center gap-[24px] xl:gap-[16px]">
            <div className="lg:w-[454px] shrink-0">
              <h2 className="font-subtitle text-[22px] md:text-[28px] xl:text-[32px] leading-[1.34] text-white tracking-[-0.44px] xl:tracking-[-0.64px]">
                Evidence-anchored scoring for AI agent trajectories
              </h2>
            </div>
            <p className="font-ui text-[16px] md:text-[20px] leading-[1.6] text-white/80 tracking-[0.16px] xl:max-w-[520px]">
              Assay is an evaluation tool for trajectory scoring. It tracks agreement between reviewers,
              routes disagreements to an adjudicator and blocks the scored dataset from release until
              agreement clears the floor on any given criterion.
            </p>
          </div>
        </section>

        {/* ── Hero image ───────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[80px] enter-2">
          <img
            src={A.hero}
            alt="Assay evaluation tool"
            className="w-full h-auto rounded-[5px] pointer-events-none"
          />
        </Reveal>

        {/* ── Why I designed it ─────────────────────────────────── */}
        <Section label="WHY I DESIGNED IT">
          <Body>
            I have previously evaluated model outputs against rubrics and most of what exists is
            repurposed annotation software built for labeling images. It treats scoring as data
            entry when it is judgment. Agent evaluation is different. The sequence is not a label
            you read or an image you see but a trajectory: a sequence of calls where the failure
            at step 5 is a consequence of step 1 and no interface built for labeling text spans
            or images will show you that.
          </Body>
        </Section>

        {/* ── Who it's for ─────────────────────────────────────── */}
        <Section label="WHO IT'S FOR">
          <ul className="space-y-[12px] list-disc list-outside pl-[20px]">
            {[
              "Reviewers: not to be slowed down and not to be blamed for an unclear instrument.",
              "Adjudicators: needs to see what each reviewer looked at not just where they landed.",
              "Program leads: throughput and quality at once, decided weeks before seeing the result.",
            ].map((item) => (
              <li key={item} className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
                {item}
              </li>
            ))}
          </ul>
        </Section>

        {/* ── The problem ──────────────────────────────────────── */}
        <Section label="THE PROBLEM">
          <Body>
            Evaluation data is the input to every decision a lab makes about whether a model ships.
            Unreliable scores are indistinguishable from reliable ones until the model trained on them starts behaving oddly.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Four causes, all of them design problems. Rubrics are ambiguous on first contact with no
            way to say so. The person who wrote the criterion knows what they mean. The person applying
            it hours later doesn&apos;t. Scores drift without anyone lying.
            Disagreements go unresolved because there is nowhere to put them. And the rubric itself
            never gets updated because nobody can prove it is the rubric that is wrong.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            There is a real tension that comes with all four. Throughput matters, there are cold hours
            against deadlines and a tool that makes careful work slow makes careful work not happen.
            Care matters more because unreliable labels are identical to reliable ones until much later.
          </p>
        </Section>

        {/* ── Six decisions ─────────────────────────────────────── */}
        <Section label="SIX DESIGN DECISIONS">
          <ul className="space-y-[24px] list-disc list-outside pl-[20px]">
            {[
              {
                lead: "Deterministic checks run before a human sees the item.",
                body: "The reviewer opens an item with failed checks already pinned to the steps that caused them and spends their attention on what a machine can't settle: did the agent carry its constraints forward, ground accuracy and accountability to a goal and actually take the right options it had? Checks and criteria stay separate in code. A failed check is a violation and blocks release. A low score is a judgment and doesn't.",
              },
              {
                lead: "Evidence first, score second.",
                body: "The reviewer attaches steps to criteria then scores. Not the reverse. Adjudication stops being a chore because the attachment is the justification. Two people can compare what they looked at and where they differed on what they considered and the detail closes it. Attached evidence also shows reviewers the right moment because they had to attach a step that didn't apply.",
              },
              {
                lead: "Failures are traced to their cause not just their location.",
                body: "A failure line in a trajectory is usually caused by something early: a constraint that arrived and was never carried forward. Linking them means the evidence records what went wrong rather than where it surfaced.",
              },
              {
                lead: "The rubric is treated as a thing that can be wrong.",
                body: "Most tools treat the rubric as fixed and the reviewers as the variable. As agreement becomes a training problem Assay assumes the opposite is often true. The rubric screen shows a criterion's anchors alongside the agreement spread. A criterion that never says what a 3 means asks people to invent one privately then measures how much their private definitions differ.",
              },
              {
                lead: "Reviewers can dispute a check not just a score.",
                body: "A check can be disputed from inside the task carrying the item and the evidence so far. A reviewer argues a check is firing wrongly on a step, attaches the step to the disputed check and the check gets amended. A reviewer who can't push back on a bad instrument will end up gaming it or leave. Providing a dispute path does not remove the need for clear criteria but it makes the instrument repairable.",
              },
              {
                lead: "Data can't leave without passing a gate.",
                body: "Agreement per criterion, unresolved disputes and version pinning. When the numbers don't hold release is blocked. Either coasting or it is marked in a manifest traveling with the data. Anyone looking at it six months later sees what was excluded and why.",
              },
            ].map(({ lead, body }) => (
              <li key={lead} className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
                <strong className="text-white font-medium">{lead}</strong>{" "}{body}
              </li>
            ))}
          </ul>
        </Section>

        {/* ── Designing Assay ───────────────────────────────────── */}
        <Section label="DESIGNING ASSAY">
          <Body>
            In order to get the screens designed I built 50+ components with variants across nine groups,
            84 typography variations and a tiered token system cutting across brand, alias, mapped and
            responsive collections. It was either this or having to use 80 slightly different unbound
            grays for the screens.
          </Body>
        </Section>

        {/* ── Design system ─────────────────────────────────────── */}
        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img
            src={A.designSys}
            alt="Assay design system"
            className="w-full h-auto rounded-[5px] pointer-events-none"
          />
        </Reveal>

        {/* ── Screens & use case ───────────────────────────────── */}
        <Section label="SCREENS &amp; USE CASE EXAMPLE">
          <Body>
            The screens below shows what happens in a batch from setup to a dataset release across three different roles on the platform. A program lead, reviewer and adjudicator.
          </Body>
          
        </Section>

        {/* ── Screens ───────────────────────────────────────────── */}
        <Reveal className="mt-[16px] xl:mt-[24px]">
          <img src={A.s1} alt="Assay reviewer queue and calibration panel" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s2} alt="Assay batch briefing — what you are judging" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s3} alt="Assay trajectory view with automatic checks" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s4} alt="Assay trajectory view with evidence attached" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s5} alt="Assay dispute a check modal" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s6} alt="Assay checks view with rule detail and disputes" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s7} alt="Assay check version diff v3.0 vs v3.1 draft" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s8} alt="Assay adjudication view" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s9} alt="Assay quality dashboard" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s10} alt="Assay rubrics view with anchor breakdown" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s11} alt="Assay release dataset with gate cleared manifest" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        <Reveal className="mt-[40px] xl:mt-[64px]">
          <img src={A.s12} alt="Assay batch overview" className="w-full h-auto rounded-[5px] pointer-events-none" />
        </Reveal>

        {/* ── One platform any domain ───────────────────────────── */}
        <Section label="ONE PLATFORM ANY DOMAIN">
          <Body>
            The thing being evaluated changes completely between domains. What a reviewer has to do
            doesn&apos;t.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Agent failures have the same shape wherever they happen. A constraint arrives early, gets
            dropped somewhere in the middle and the consequence lands several steps later. Rotterdam is a
            cold chain requirement retrieved at step 1 and ignored at step 5. The same structure holds
            whether the agent is handling a financial reconciliation, a clinical intake or a support
            escalation.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            So only three things swap between domains: the tool registry, the check suite and the rubric.
            The interface doesn&apos;t move. A domain expert in one field and a domain expert in another
            are learning the same tool and a program running several isn&apos;t maintaining several of
            everything.
          </p>
        </Section>

        {/* ── What I would and would not validate ───────────────── */}
        <Section label="WHAT I WOULD AND WOULD NOT VALIDATE">
          <Body>
            Does evidence-first cost more time than it saves? My assumption: slower on the first pass,
            faster on adjudication, net positive. I haven&apos;t measured it.
          </Body>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Do reviewers use cause links or attach and move on? This is my most distinctive decision and
            the one I&apos;m least sure of. It asks a reviewer to form a theory about causation, not just
            notice a failure. That&apos;s real cognitive work and it may be work nobody wants to do.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Is ambient calibration reassuring or is it surveillance? Showing a reviewer they&apos;re
            scoring one criterion harder than their cohort could read as useful or as a performance
            metric with a friendly face. The answer depends almost entirely on who runs the program does
            with the number.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Will a program lead accept that the rubric is the problem? Decision 4 assumes a lead looking
            at 0.44 agreement will consider that the criterion is broken rather than that the reviewers
            are. That&apos;s a claim about organisational behaviour, not about interface.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            What I wouldn&apos;t test: The release gate. Whether data should be blocked from leaving
            without passing quality thresholds isn&apos;t a usability question but a position and testing
            it would only tell me whether people under deadline find it inconvenient.
          </p>
          <p className="mt-[20px] font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
            Additionally I would also keep my eyes on three numbers:
          </p>
          <ul className="mt-[12px] space-y-[12px] list-disc list-outside pl-[20px]">
            <li className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              Agreement per criterion, tracked per rubric version. A criterion whose agreement jumps
              after its anchors are rewritten is the whole thesis working.
            </li>
            <li className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              Adjudication rate over time. It should fall. If it&apos;s flat, reviewers are disagreeing
              about the same things and nothing upstream is being fixed.
            </li>
            <li className="font-ui text-[16px] md:text-[20px] leading-[1.7] text-white/80 tracking-[0.16px]">
              Days between a reviewer raising a dispute and the rule changing. The loop the whole tool
              exists to close. If that number falls, the instrument is improving. If it climbs, disputes
              are being collected rather than answered and Assay has become an elaborate suggestion box.
            </li>
          </ul>
        </Section>

      </main>

      <Reveal className="mt-[60px] xl:mt-[80px]">
        <Footer />
      </Reveal>
    </div>
  );
}
