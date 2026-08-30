"use client";

import { useRef, useState } from "react";
import type { Bi } from "@/lib/content";
import { T } from "./T";

/**
 * A demo clip that runs on its own and holds still while the pointer rests on
 * it, so a reader can stop on the frame they want to look at.
 */
export function HoverVideo({
  clips,
  hint,
  alt,
}: {
  clips: { src: string; poster: string }[];
  hint: Bi;
  alt: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const hovering = useRef(false);
  const [current, setCurrent] = useState(0);

  const pause = () => {
    hovering.current = true;
    video.current?.pause();
  };

  const resume = () => {
    hovering.current = false;
    // Autoplay policies can still refuse; the poster frame simply stays up.
    video.current?.play().catch(() => {});
  };

  const pick = (i: number) => (e: React.MouseEvent) => {
    // The card itself is a link; choosing a clip must not follow it.
    e.preventDefault();
    e.stopPropagation();
    setCurrent(i);
  };

  return (
    <div className="absolute inset-0" onMouseEnter={pause} onMouseLeave={resume}>
      <video
        ref={video}
        key={clips[current].src}
        src={clips[current].src}
        poster={clips[current].poster}
        aria-label={alt}
        autoPlay
        muted
        loop
        playsInline
        tabIndex={-1}
        // A clip picked while the pointer is resting here should stay held.
        onCanPlay={() => hovering.current && video.current?.pause()}
        className="size-full object-cover"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid place-items-center bg-bg/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span className="font-mono text-[10px] tracking-[0.24em]">
          <T v={hint} />
        </span>
      </div>

      {clips.length > 1 && (
        <div className="absolute bottom-3 left-3 flex gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {clips.map((c, i) => (
            <button
              key={c.src}
              type="button"
              onClick={pick(i)}
              aria-label={`${alt} ${i + 1}`}
              aria-pressed={i === current}
              className={`border px-2.5 py-1 font-mono text-[10px] tracking-[0.16em] transition-colors ${
                i === current
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-line-soft bg-bg/70 text-dim hover:text-accent"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
