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
  src,
  poster,
  hint,
  alt,
}: {
  src: string;
  poster: string;
  hint: Bi;
  alt: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    // Autoplay policies can still refuse; the poster simply stays up.
    video.current?.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  };

  const stop = () => {
    const el = video.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={play}
      onMouseLeave={stop}
    >
      <video
        ref={video}
        src={src}
        aria-label={alt}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        className="size-full object-cover"
      />
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      >
        <Image
          src={poster}
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
    </div>
  );
}
