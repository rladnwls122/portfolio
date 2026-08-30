"use client";

import { useEffect, useRef, useState } from "react";
import { owner } from "@/lib/content";
import { T } from "./T";

/** Copies the address; falls back to opening a mail client if the clipboard is refused. */
export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!navigator.clipboard) return; // Let the mailto: href do its job.
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(owner.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${owner.email}`;
    }
  };

  return (
    <a
      href={`mailto:${owner.email}`}
      onClick={copy}
      aria-live="polite"
      className="bg-fg px-[26px] py-[15px] font-mono text-[11px] font-bold tracking-[0.2em] text-bg transition-colors hover:bg-accent hover:text-accent-ink"
    >
      {copied ? (
        <T v={{ ko: "[ 복사됨 ✓ ]", en: "[ COPIED ✓ ]" }} />
      ) : (
        "[ CONTACT ]"
      )}
    </a>
  );
}
