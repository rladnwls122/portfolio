"use client";

import { useEffect, useState } from "react";
import { nav, owner } from "@/lib/content";

type Theme = "dark" | "light";
type Lang = "ko" | "en";

/**
 * Header, theme and language switches, and the scroll progress bar.
 * Theme and language live on <body> as data attributes so the rest of the page
 * can stay static: CSS variables handle the theme, CSS handles the language.
 */
export function Chrome() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("ko");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  // Until the pre-paint choice is adopted, writing state back would clobber it.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const b = document.body;
    setTheme(b.dataset.theme === "light" ? "light" : "dark");
    setLang(b.dataset.lang === "en" ? "en" : "ko");
    b.classList.add("js-reveal");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.body.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Private mode or blocked storage: the choice just will not persist.
    }
  }, [theme, ready]);

  useEffect(() => {
    if (!ready) return;
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // As above.
    }
  }, [lang, ready]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Reveal-on-scroll for every [data-reveal] block.
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const btn =
    "border border-line px-[11px] py-2 font-mono text-[10px] tracking-[0.14em] transition-colors hover:border-accent hover:text-accent";

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line-soft bg-bg/85 backdrop-blur-lg">
      <div className="flex items-center justify-between gap-4 px-[clamp(20px,5vw,64px)] py-4">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3 font-mono text-xs font-bold tracking-[0.22em]"
        >
          <span className="size-2 rounded-full bg-accent shadow-[0_0_14px_var(--accent)]" />
          {owner.name}
        </a>

        <nav className="hidden gap-[clamp(14px,3vw,38px)] font-mono text-[11px] tracking-[0.18em] text-dim md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-accent">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setLang((l) => (l === "ko" ? "en" : "ko"))}
            className={btn}
            aria-label={lang === "ko" ? "Switch to English" : "한국어로 전환"}
          >
            {lang === "ko" ? "EN" : "KO"}
          </button>
          <button
            type="button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className={btn}
            aria-label={theme === "dark" ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
          >
            {/* Text, not a glyph: the moon character has no mono fallback here. */}
            {theme === "dark" ? "LIGHT" : "DARK"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className={`${btn} md:hidden`}
            aria-expanded={open}
            aria-label="메뉴"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <nav className="grid border-t border-line-soft font-mono text-[11px] tracking-[0.18em] text-dim md:hidden">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="border-b border-line-soft px-[clamp(20px,5vw,64px)] py-4 transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}

      <div className="h-[2px] bg-line-soft">
        <div
          className="h-[2px] origin-left bg-accent"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
