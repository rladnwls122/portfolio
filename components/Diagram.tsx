"use client";

import { useCallback, useEffect, useRef, useState } from "react";

let mermaidPromise: Promise<typeof import("mermaid").default> | null = null;

async function loadMermaid() {
  // One import shared by every diagram, and only once a reader opens one.
  mermaidPromise ??= (async () => {
    const [{ default: mermaid }, { default: icons }] = await Promise.all([
      import("mermaid"),
      import("@/lib/mermaid-icons.json"),
    ]);
    mermaid.registerIconPacks(
      Object.entries(icons).map(([name, pack]) => ({
        name,
        loader: async () => pack,
      })),
    );
    return mermaid;
  })();
  return mermaidPromise;
}

function palette() {
  const s = getComputedStyle(document.body);
  const v = (n: string) => s.getPropertyValue(n).trim();
  return { bg: v("--bg"), fg: v("--fg"), line: v("--line"), accent: v("--accent") };
}

/**
 * A Mermaid graph that renders on first open, re-renders when the theme flips,
 * and opens full screen with zoom — the inline box is too narrow to read at once.
 */
export function Diagram({
  id,
  source,
  label,
}: {
  id: string;
  source: string;
  label: React.ReactNode;
}) {
  const [svg, setSvg] = useState("");
  const [failed, setFailed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const opened = useRef(false);
  const dialog = useRef<HTMLDialogElement>(null);

  const render = useCallback(async () => {
    try {
      const mermaid = await loadMermaid();
      const c = palette();
      mermaid.initialize({
        startOnLoad: false,
        // The graph source is authored here, never user input.
        securityLevel: "loose",
        fontFamily: "var(--font-mono), monospace",
        theme: "base",
        themeVariables: {
          background: c.bg,
          primaryColor: c.bg,
          primaryTextColor: c.fg,
          primaryBorderColor: c.line,
          secondaryColor: c.bg,
          tertiaryColor: c.bg,
          lineColor: c.fg,
          textColor: c.fg,
          clusterBkg: "transparent",
          clusterBorder: c.line,
          edgeLabelBackground: c.bg,
          nodeBorder: c.line,
          mainBkg: c.bg,
          titleColor: c.accent,
          fontSize: "13px",
        },
      });
      const out = await mermaid.render(`${id}-svg-${Date.now()}`, source);
      setSvg(out.svg);
    } catch {
      setFailed(true);
    }
  }, [id, source]);

  // Re-render on theme change, but only for a diagram the reader actually opened.
  useEffect(() => {
    const mo = new MutationObserver(() => {
      if (opened.current) void render();
    });
    mo.observe(document.body, { attributes: true, attributeFilter: ["data-theme"] });
    return () => mo.disconnect();
  }, [render]);

  const open = () => {
    if (opened.current) return;
    opened.current = true;
    void render();
  };

  const graph = svg ? (
    <div dangerouslySetInnerHTML={{ __html: svg }} />
  ) : (
    <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
      {failed ? "도식을 불러오지 못했습니다" : "RENDERING DIAGRAM…"}
    </span>
  );

  const zoomBtn =
    "border border-line px-2.5 py-1.5 font-mono text-[11px] leading-none transition-colors hover:border-accent hover:text-accent";

  return (
    <>
      <details
        onToggle={(e) => e.currentTarget.open && open()}
        className="border border-line-soft bg-card"
      >
        <summary className="flex cursor-pointer items-center justify-between gap-3 border-b border-line-soft px-4 py-3.5 font-mono text-[10px] tracking-[0.2em] text-faint transition-colors hover:text-accent">
          <span>{failed ? "DIAGRAM UNAVAILABLE" : label}</span>
          <span data-chev className="text-accent transition-transform">
            ＋
          </span>
        </summary>

        {/* Wide graphs scroll inside this box rather than shrinking to unreadable. */}
        <div className="grid min-h-[300px] place-items-center overflow-x-auto px-4 py-5 [&_svg]:!max-w-none [&_svg]:min-w-[720px]">
          {graph}
        </div>

        <div className="flex justify-end border-t border-line-soft px-4 py-3">
          <button
            type="button"
            onClick={() => {
              setZoom(1);
              dialog.current?.showModal();
            }}
            disabled={!svg}
            className="border border-line px-3.5 py-2 font-mono text-[10px] tracking-[0.18em] transition-colors hover:border-accent hover:text-accent disabled:opacity-40"
          >
            <span data-ko="">전체보기 ⤢</span>
            <span data-en="">FULL SCREEN ⤢</span>
          </button>
        </div>
      </details>

      <dialog
        ref={dialog}
        onClose={() => setZoom(1)}
        className="m-0 h-dvh max-h-none w-dvw max-w-none bg-bg text-fg backdrop:bg-black/80"
      >
        <div className="flex h-dvh flex-col">
          <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line-soft px-[clamp(16px,4vw,40px)] py-4">
            <span className="font-mono text-[10px] tracking-[0.2em] text-faint">
              {label}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.5, +(z - 0.25).toFixed(2)))}
                className={zoomBtn}
                aria-label="축소"
              >
                −
              </button>
              <span className="w-12 text-center font-mono text-[10px] tabular-nums text-faint">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(4, +(z + 0.25).toFixed(2)))}
                className={zoomBtn}
                aria-label="확대"
              >
                ＋
              </button>
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="ml-2 border border-line px-3.5 py-2 font-mono text-[10px] tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
              >
                <span data-ko="">닫기 ✕</span>
                <span data-en="">CLOSE ✕</span>
              </button>
            </div>
          </div>

          <div className="grid flex-1 place-items-center overflow-auto p-[clamp(16px,4vw,40px)]">
            <div
              style={{ zoom }}
              className="[&_svg]:!max-w-none [&_svg]:min-w-[900px]"
            >
              {graph}
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
