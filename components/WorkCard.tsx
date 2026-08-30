import Image from "next/image";
import type { Work } from "@/lib/content";
import { T } from "./T";

const toneClass = {
  ok: "text-dim",
  warn: "text-accent",
  accent: "text-accent",
} as const;

function Media({ work }: { work: Work }) {
  const m = work.media;

  if (m.kind === "term") {
    return (
      <div className="absolute inset-0 flex flex-col justify-center gap-2.5 bg-card p-6 font-mono text-[11.5px] leading-relaxed">
        <div className="mb-1 text-accent">{m.label}</div>
        {m.lines.map((l, i) => (
          <div key={i} className={toneClass[l.tone ?? "ok"]}>
            {l.text}
          </div>
        ))}
      </div>
    );
  }

  if (m.kind === "swap") {
    return (
      <>
        <Image
          src={m.motion}
          alt={m.alt}
          fill
          sizes="(max-width: 700px) 100vw, 45vw"
          className="object-cover object-top"
        />
        <Image
          src={m.still}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 700px) 100vw, 45vw"
          className="object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
        />
      </>
    );
  }

  // The GIF sits under an opaque first frame: an animation nobody asked to see
  // is a distraction, and a GIF cannot be paused.
  return (
    <>
      <Image
        src={m.src}
        alt={m.alt}
        fill
        unoptimized
        sizes="(max-width: 700px) 100vw, 45vw"
        className="object-cover"
      />
      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
        <Image
          src={m.poster}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 700px) 100vw, 45vw"
          className="object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-bg/70">
          <span className="font-mono text-[10px] tracking-[0.24em]">
            <T v={m.hint} />
          </span>
        </div>
      </div>
    </>
  );
}

export function WorkCard({ work }: { work: Work }) {
  const frame =
    "group relative block aspect-[16/10] overflow-hidden border border-line-soft bg-card";

  const media = (
    <>
      <Media work={work} />
      <span className="absolute left-3 top-3 bg-accent px-2.5 py-1.5 font-mono text-[9px] font-bold tracking-[0.18em] text-accent-ink">
        {work.tag}
      </span>
      {work.hrefLabel && (
        <span className="absolute bottom-3 right-3 font-mono text-[10.5px] tracking-[0.16em] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
          {work.hrefLabel}
        </span>
      )}
    </>
  );

  return (
    <article data-reveal="" className="flex flex-col">
      {work.href ? (
        <a
          href={work.href}
          {...(work.href.startsWith("#")
            ? {}
            : { target: "_blank", rel: "noreferrer" })}
          className={frame}
        >
          {media}
        </a>
      ) : (
        <div className={frame}>{media}</div>
      )}

      <div className="pt-5">
        <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="m-0 font-mono text-[clamp(21px,2.3vw,30px)] font-extrabold tracking-[-0.03em]">
            {work.title}
          </h3>
          <span className="font-mono text-[9.5px] tracking-[0.18em] text-accent">
            <T v={work.badge} />
          </span>
        </div>

        <p className="m-0 mb-4 text-[14.5px] font-light leading-[1.75] text-dim text-pretty">
          <T v={work.summary} />
        </p>

        <div className="mb-[18px] flex flex-wrap gap-1.5 font-mono text-[9.5px] tracking-[0.12em] text-faint">
          {work.tech.map((t) => (
            <span key={t} className="border border-line-soft px-2.5 py-[5px]">
              {t}
            </span>
          ))}
        </div>

        <div className="border-t border-line-soft pt-[17px]">
          <div className="mb-2.5 font-mono text-[9.5px] tracking-[0.2em] text-accent">
            <T v={{ ko: "느낀 점", en: "WHAT I TOOK AWAY" }} />
          </div>
          <p className="m-0 text-[13.5px] font-light leading-[1.8] text-dim text-pretty">
            <T v={work.takeaway} />
          </p>

          {work.stats && (
            <div className="mt-4 flex flex-wrap gap-x-3.5 gap-y-1.5 font-mono text-[9.5px] tracking-[0.12em] text-faint">
              {work.stats.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          )}

          {work.links && (
            <div className="mt-3.5 flex flex-wrap gap-4">
              {work.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[10px] tracking-[0.16em] text-faint transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
