"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { Bi } from "@/lib/content";
import { T } from "./T";

/**
 * A demo clip that holds on its first frame until the reader asks for it.
 * Nothing is fetched beyond metadata until the first play, and the clip resets
 * when the pointer leaves so the card always reads the same way.
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
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);

  const play = () => {
    hovering.current = true;
    // Autoplay policies can still refuse; the poster simply stays up.
    video.current?.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  };

  const stop = () => {
    hovering.current = false;
    const el = video.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
  };

  const pick = (i: number) => (e: React.MouseEvent) => {
    // The card itself is a link; choosing a clip must not follow it.
    e.preventDefault();
    e.stopPropagation();
    setCurrent(i);
    setPlaying(false);
  };

  return (
    <div className="absolute inset-0" onMouseEnter={play} onMouseLeave={stop}>
      <video
        ref={video}
        key={clips[current].src}
        src={clips[current].src}
        aria-label={alt}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        onCanPlay={() => hovering.current && play()}
        className="size-full object-cover"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={clips[current].poster}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 45vw"
          className="object-cover"
        />
        <div className="absolute inset-0 grid place-items-center bg-bg/70">
          <span className="font-mono text-[10px] tracking-[0.24em]">
            <T v={hint} />
          </span>
        </div>
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
