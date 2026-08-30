"use client";

import { useEffect, useRef, useState } from "react";
import { counters } from "@/lib/content";
import { T } from "./T";

/** Counts up once, the first time the row is on screen. */
export function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setT(1);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1400);
          setT(1 - Math.pow(1 - p, 3));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      ref={ref}
      className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-px"
    >
      {counters.map((c, i) => (
        <div key={i} className={`cell py-[34px] pr-2 ${i === 0 ? "" : "pl-6"}`}>
          <div className="font-mono text-[clamp(44px,6vw,84px)] font-extrabold leading-none tracking-[-0.05em] tabular-nums">
            {pad(Math.round(c.to * t))}
            {c.suffix && <span className="text-accent">{c.suffix}</span>}
          </div>
          <div className="mt-3.5 font-mono text-[10.5px] tracking-[0.2em] text-faint">
            <T v={c.label} />
          </div>
        </div>
      ))}

      <div className="cell py-[34px] pr-2 pl-6">
        <div className="font-mono text-[clamp(44px,6vw,84px)] font-extrabold leading-none tracking-[-0.05em] text-accent">
          ∞
        </div>
        <div className="mt-3.5 font-mono text-[10.5px] tracking-[0.2em] text-faint">
          <T v={{ ko: "해결한 문제", en: "PROBLEMS SOLVED" }} />
        </div>
        <div className="mt-2 text-[11px] font-light text-faint">
          <T
            v={{
              ko: "* 통계가 아닌 태도에 대한 표현입니다",
              en: "* an attitude, not a statistic",
            }}
          />
        </div>
      </div>
    </div>
  );
}
