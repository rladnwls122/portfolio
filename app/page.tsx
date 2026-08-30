import Image from "next/image";
import { Chrome } from "@/components/Chrome";
import { CopyEmail } from "@/components/CopyEmail";
import { Counters } from "@/components/Counters";
import { Diagram } from "@/components/Diagram";
import { T } from "@/components/T";
import { WorkCard } from "@/components/WorkCard";
import {
  about,
  closing,
  diagrams,
  failures,
  hero,
  journey,
  logLines,
  owner,
  stack,
  works,
} from "@/lib/content";

const dotColor = {
  accent: "bg-accent",
  dim: "bg-dim",
  faint: "bg-faint",
  open: "border border-faint",
} as const;

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-5">
      <span className="eyebrow">{n}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed backdrop: quarter-width column rules and one accent bloom behind the hero. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,var(--card)_1px,transparent_1px)] bg-[length:25vw_100%]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(120%_80%_at_80%_-10%,color-mix(in_oklab,var(--accent)_12%,transparent),transparent_62%)]"
      />

      <Chrome />

      <main className="relative z-[1]">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          id="top"
          className="flex flex-wrap items-end gap-[clamp(32px,4vw,56px)] px-[clamp(20px,5vw,64px)] pb-[72px] pt-[clamp(120px,18vh,200px)]"
        >
          <div className="min-w-0 flex-[1_1_520px]">
            <div className="mb-[34px] flex items-center gap-3.5 font-mono text-[11px] tracking-[0.28em] text-accent">
              <span>PORTFOLIO / 2026</span>
              <span className="h-px max-w-[120px] flex-1 bg-line" />
              <span className="text-faint">INCHEON, KR</span>
            </div>
            <h1 className="m-0 font-mono text-[clamp(56px,12.5vw,190px)] font-extrabold uppercase leading-[0.86] tracking-[-0.045em]">
              <span className="block">Build.</span>
              <span className="block text-faint">Break.</span>
              <span className="block">
                Solve.
                <span className="text-accent motion-safe:animate-[blink_1.1s_step-end_infinite]">
                  _
                </span>
              </span>
            </h1>
            <div className="mt-10 flex flex-wrap gap-2.5 font-mono text-[11px] tracking-[0.16em]">
              {hero.tags.map((t, i) => (
                <span
                  key={t}
                  className={`rounded-full border px-3.5 py-2 ${
                    i === hero.tags.length - 1
                      ? "border-accent text-accent"
                      : "border-line"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-8 pb-2">
            <p className="m-0 whitespace-pre-line text-[clamp(15px,1.15vw,18px)] font-light leading-[1.85] text-dim">
              <T v={hero.lede} />
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#works"
                className="bg-fg px-[26px] py-[15px] font-mono text-[11px] font-bold tracking-[0.2em] text-bg transition-colors hover:bg-accent hover:text-accent-ink"
              >
                [ PROJECTS ]
              </a>
              <a
                href="#journey"
                className="border border-line px-[26px] py-[15px] font-mono text-[11px] font-bold tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
              >
                [ CAREER ]
              </a>
            </div>
            <div
              aria-hidden
              className="relative h-[150px] overflow-hidden border-l border-line-soft pl-4 [mask-image:linear-gradient(transparent,#000_25%,#000_70%,transparent)]"
            >
              <div className="whitespace-nowrap font-mono text-[10.5px] leading-[2.1] text-faint motion-safe:animate-[logscroll_26s_linear_infinite]">
                {[...logLines, ...logLines].map((l, i) => (
                  <div key={i}>{l}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 01 About ─────────────────────────────────────────── */}
        <section id="about" data-reveal="" className="band z-[2]">
          <div className="mb-[clamp(32px,5vh,56px)]">
            <SectionHead n="01" title="About" />
          </div>
          <div className="flex flex-wrap items-center gap-[clamp(28px,5vw,64px)]">
            <div className="relative grid aspect-square w-[clamp(150px,20vw,220px)] shrink-0 place-items-center border border-line-soft bg-card">
              <Image
                src="/img/mascot-turtle.png"
                alt="포트폴리오 마스코트"
                width={220}
                height={220}
                className="w-[78%] motion-safe:animate-[floaty_7.4s_ease-in-out_infinite]"
              />
              <span className="absolute bottom-2.5 right-3 font-mono text-[9px] tracking-[0.2em] text-faint">
                PROFILE
              </span>
            </div>
            <div className="grid min-w-0 flex-[1_1_340px] gap-5">
              <p className="m-0 text-[clamp(19px,2.2vw,28px)] font-medium leading-[1.55] tracking-[-0.02em] text-pretty">
                <T v={about.lead} />
              </p>
              <p className="m-0 max-w-[58ch] text-[15.5px] font-light leading-[1.9] text-dim text-pretty">
                <T v={about.body} />
              </p>
              <div className="flex flex-wrap gap-6 pt-1 font-mono text-[11px] tracking-[0.16em] text-faint">
                {about.meta.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 Journey ───────────────────────────────────────── */}
        <section id="journey" data-reveal="" className="band">
          <div className="mb-[clamp(48px,8vh,90px)]">
            <SectionHead n="02" title="My Journey" />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(32px,6vw,80px)]">
            <ol className="m-0 grid list-none p-0">
              {journey.map((e, i) => (
                <li
                  key={i}
                  className={`relative ml-1 grid grid-cols-[72px_1fr] gap-6 pl-7 sm:grid-cols-[92px_1fr] ${
                    i === journey.length - 1
                      ? "border-l border-transparent"
                      : "border-l border-line pb-10"
                  }`}
                >
                  <span
                    className={`absolute -left-[5px] top-1.5 size-[9px] rounded-full ${dotColor[e.dot]}`}
                  />
                  <div className="pt-0.5 font-mono text-[13px] tracking-[0.1em] text-faint">
                    <T v={e.year} />
                  </div>
                  <div>
                    {e.kicker && (
                      <div
                        className={`mb-2.5 font-mono text-[11px] tracking-[0.07em] ${
                          e.dot === "accent" ? "text-accent" : "text-faint"
                        }`}
                      >
                        <T v={e.kicker} />
                      </div>
                    )}
                    <h3
                      className={`m-0 mb-3 text-[clamp(19px,2.1vw,28px)] font-semibold tracking-[-0.02em] ${
                        e.dot === "open" ? "text-dim" : ""
                      }`}
                    >
                      <T v={e.title} />
                    </h3>
                    {e.body.map((b, j) => (
                      <p
                        key={j}
                        className="m-0 mt-3.5 max-w-[46ch] text-[15px] font-light leading-[1.8] text-dim text-pretty first:mt-0"
                      >
                        <T v={b} />
                      </p>
                    ))}
                    {e.quote && (
                      <blockquote className="m-0 mt-[18px] max-w-[46ch] border-l-2 border-accent pl-4 text-[15px] font-light leading-[1.8] text-dim text-pretty">
                        <T v={e.quote} />
                      </blockquote>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <figure className="relative m-0 border border-line-soft bg-gradient-to-b from-card to-transparent px-7 pb-6 pt-7">
              <Image
                src="/img/medal.png"
                alt="지방기능경기대회 클라우드컴퓨팅 은메달"
                width={720}
                height={720}
                className="block h-auto w-full saturate-[0.85]"
              />
              <Image
                src="/img/worldskills.png"
                alt=""
                aria-hidden
                width={380}
                height={380}
                className="absolute -left-[22px] top-[6%] w-[clamp(110px,17vw,190px)] drop-shadow-[0_18px_40px_rgba(0,0,0,0.55)] motion-safe:animate-[floaty_8s_ease-in-out_infinite]"
              />
              <Image
                src="/img/mascot-pink.png"
                alt=""
                aria-hidden
                width={240}
                height={240}
                className="absolute -left-[26px] bottom-[20%] w-[clamp(76px,10vw,120px)] drop-shadow-[0_16px_36px_rgba(0,0,0,0.5)] motion-safe:animate-[floaty_7.6s_ease-in-out_0.8s_infinite]"
              />
              <Image
                src="/img/mascot.png"
                alt=""
                aria-hidden
                width={400}
                height={400}
                className="absolute -right-5 bottom-[8%] w-[clamp(118px,18vw,200px)] drop-shadow-[0_18px_40px_rgba(0,0,0,0.5)] motion-safe:animate-[floaty2_6.4s_ease-in-out_infinite]"
              />
              <figcaption className="mt-[22px] font-mono text-[10px] tracking-[0.18em] text-faint">
                WORLDSKILLS KOREA · CLOUD COMPUTING
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── Counters ─────────────────────────────────────────── */}
        <section
          data-reveal=""
          className="band py-[clamp(60px,9vh,110px)]"
          aria-label="요약 지표"
        >
          <Counters />
        </section>

        {/* ── 03 Stack ─────────────────────────────────────────── */}
        <section id="stack" data-reveal="" className="band">
          <div className="mb-[18px]">
            <SectionHead n="03" title="Stack" />
          </div>
          <p className="m-0 mb-[clamp(40px,6vh,72px)] max-w-[52ch] text-[15px] font-light leading-[1.85] text-dim">
            <T
              v={{
                ko: "아래 항목은 모두 대회 준비와 실제 프로젝트에서 직접 다뤄 본 기술입니다.",
                en: "Everything below is hands-on — used in competition training or in a shipped project.",
              }}
            />
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px border border-line-soft">
            {stack.map((g) => (
              <div key={g.group} className="cell p-7">
                <div
                  className={`mb-5 font-mono text-[10px] tracking-[0.2em] ${
                    g.highlight ? "text-accent" : "text-faint"
                  }`}
                >
                  {g.group}
                </div>
                <ul className="m-0 grid list-none gap-3.5 p-0 font-mono text-[13.5px] text-dim">
                  {g.items.map((it, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span aria-hidden className="text-accent">
                        ●
                      </span>
                      <span>
                        <T v={it.label} />
                        {it.note && (
                          <span className="mt-1.5 block text-xs leading-[1.6] tracking-[0.07em] text-faint">
                            <T v={it.note} />
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── 04 Works ─────────────────────────────────────────── */}
        <section id="works" className="band z-[2]">
          <div
            data-reveal=""
            className="mb-[clamp(34px,6vh,60px)] flex flex-wrap items-baseline justify-between gap-5"
          >
            <SectionHead n="04" title="Selected Works" />
            <span className="font-mono text-[10.5px] tracking-[0.16em] text-faint">
              <T
                v={{
                  ko: "카드에 마우스를 올리면 움직입니다 · 클릭하면 이동",
                  en: "HOVER TO PLAY · CLICK TO OPEN",
                }}
              />
            </span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(330px,1fr))] gap-[clamp(22px,2.8vw,38px)]">
            {works.map((w) => (
              <WorkCard key={w.id} work={w} />
            ))}
          </div>
        </section>

        {/* ── 05 System design ─────────────────────────────────── */}
        <section id="system" data-reveal="" className="band z-[2]">
          <div className="mb-[18px]">
            <SectionHead n="05" title="System Design" />
          </div>
          <p className="m-0 mb-8 max-w-[62ch] text-[15px] font-light leading-[1.85] text-dim">
            <T
              v={{
                ko: "제가 직접 세운 두 구조입니다. 가이드북에서 쓰는 도식 규칙 그대로 — 존 경계는 점선 박스, 요청 경로는 실선, 비동기·복제는 점선으로 그렸습니다.",
                en: "Two structures I built myself, drawn with the same conventions I use in the guidebook: dashed boxes for zone boundaries, solid edges for the request path, dotted edges for async and replication.",
              }}
            />
          </p>

          <div className="mb-9 flex flex-wrap gap-x-7 gap-y-2.5 font-mono text-[10px] tracking-[0.18em] text-faint">
            <span className="flex items-center gap-2.5">
              <span aria-hidden className="h-px w-7 bg-fg" />
              <T v={{ ko: "요청 경로", en: "REQUEST PATH" }} />
            </span>
            <span className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="h-px w-7 bg-[repeating-linear-gradient(to_right,var(--fg)_0_4px,transparent_4px_8px)]"
              />
              <T v={{ ko: "비동기 · 복제 경로", en: "ASYNC · REPLICATION" }} />
            </span>
            <span className="flex items-center gap-2.5">
              <span aria-hidden className="h-3.5 w-7 border border-dashed border-line" />
              <T v={{ ko: "존 경계", en: "ZONE BOUNDARY" }} />
            </span>
          </div>

          <div className="grid gap-[clamp(40px,6vh,72px)]">
            {diagrams.map((d) => (
              <div key={d.id} className="grid content-start gap-4">
                <div>
                  <div className="font-mono text-[11px] tracking-[0.2em] text-accent">
                    {d.label}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] tracking-[0.18em] text-faint">
                    {d.sub}
                  </div>
                </div>
                <Diagram id={d.id} source={d.source} label={<T v={d.open} />} />
                <div className="grid gap-6 border-t border-line-soft pt-4 md:grid-cols-2 md:gap-10">
                  <div>
                    <div className="mb-2 font-mono text-[9.5px] tracking-[0.2em] text-accent">
                      <T v={{ ko: "이 도식이 보여주는 것", en: "WHAT THIS DIAGRAM SHOWS" }} />
                    </div>
                    <p className="m-0 text-[13.5px] font-light leading-[1.8] text-dim text-pretty">
                      <T v={d.shows} />
                    </p>
                  </div>
                  <div>
                    <div className="mb-2 font-mono text-[9.5px] tracking-[0.2em] text-faint">
                      <T v={{ ko: "터질 수 있는 곳", en: "WHERE IT BREAKS" }} />
                    </div>
                    <p className="m-0 text-[13.5px] font-light leading-[1.8] text-dim text-pretty">
                      <T v={d.breaks} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Failure log ──────────────────────────────────────── */}
        <section
          id="failure"
          data-reveal=""
          className="band bg-gradient-to-b from-card to-transparent"
        >
          <div className="mb-[18px]">
            <SectionHead n="06" title="Failure Log" />
          </div>
          <p className="m-0 mb-[clamp(40px,6vh,72px)] max-w-[56ch] text-[15px] font-light leading-[1.85] text-dim">
            <T
              v={{
                ko: "성공한 결과만 모아두면 무엇을 할 수 있는지는 알 수 없습니다. 무엇이 터졌고 어떻게 좁혔는지를 남깁니다.",
                en: "A wall of successes says nothing about what someone can do. I keep what broke and how I narrowed it down.",
              }}
            />
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px border border-line-soft">
            {failures.map((f) => (
              <div key={f.title} className="cell p-7">
                <div className="mb-4 font-mono text-[10px] tracking-[0.2em] text-faint">
                  [ {f.tag} ]
                </div>
                <h3 className="m-0 mb-5 font-mono text-[17px] font-bold tracking-[-0.01em]">
                  {f.title}
                </h3>
                <ol className="m-0 grid list-none gap-3 p-0 text-[13px] font-light leading-[1.7] text-dim">
                  {f.steps.map((s, j) => (
                    <li key={j} className="flex gap-2.5">
                      <span aria-hidden className="text-accent">
                        →
                      </span>
                      <T v={s} />
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <p className="m-0 mt-[clamp(40px,6vh,72px)] max-w-[34ch] text-[clamp(20px,2.6vw,34px)] font-medium leading-[1.5] tracking-[-0.02em] text-pretty">
            <T
              v={{
                ko: "좋은 결과를 얻는 것보다, 문제가 생겼을 때 끝까지 원인을 찾는 과정에서 더 많이 배웠습니다.",
                en: "I learned far more from chasing a cause all the way down than from any good result.",
              }}
            />
          </p>
        </section>
      </main>

      {/* ── Contact ────────────────────────────────────────────── */}
      <footer
        id="contact"
        className="relative z-[1] border-t border-line-soft px-[clamp(20px,5vw,64px)] pb-11 pt-[clamp(80px,12vh,150px)]"
      >
        <div className="mb-7 font-mono text-[11px] tracking-[0.24em] text-faint">
          07 CONTACT
        </div>
        <div className="mb-9 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[10px] tracking-[0.18em] text-accent">
          {closing.awards.map((a, i) => (
            <span key={i}>
              <T v={a} />
            </span>
          ))}
        </div>

        <h2 className="m-0 font-mono text-[clamp(46px,13vw,200px)] font-extrabold uppercase leading-[0.88] tracking-[-0.05em]">
          Still
          <br />
          Building.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-6">
          <p className="m-0 max-w-[40ch] text-[15px] font-light leading-[1.85] text-dim text-pretty">
            <T v={closing.line} />
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={owner.github}
              target="_blank"
              rel="noreferrer"
              className="border border-line px-[26px] py-[15px] font-mono text-[11px] font-bold tracking-[0.2em] transition-colors hover:border-accent hover:text-accent"
            >
              [ GITHUB ]
            </a>
            <CopyEmail />
          </div>
        </div>

        <div className="mt-[clamp(56px,10vh,110px)] flex flex-wrap items-baseline justify-between gap-4 border-t border-line-soft pt-6 font-mono text-[10px] tracking-[0.18em] text-faint">
          <span>
            © 2026 {owner.name} · {owner.email.toUpperCase()}
          </span>
          <span>BUILD. BREAK. SOLVE.</span>
        </div>
      </footer>
    </div>
  );
}
