import type { Bi } from "@/lib/content";

/**
 * Renders both languages and lets CSS hide the inactive one.
 * No client state, so language never causes a re-render or a hydration mismatch.
 */
export function T({ v, className }: { v: Bi; className?: string }) {
  return (
    <>
      <span data-ko="" className={className}>
        {v.ko}
      </span>
      <span data-en="" className={className}>
        {v.en}
      </span>
    </>
  );
}
