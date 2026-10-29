import { useEffect, useRef, useState } from "react";

export const cx = (...a: (string | false | undefined | null)[]) => a.filter(Boolean).join(" ");

export type ChipStyle = "crit" | "high" | "cy" | "ok" | "dim" | "amber" | "green";
export const CHIP: Record<ChipStyle, string> = {
  crit: "border-rose-400/30 bg-rose-400/10 text-rose-300",
  high: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  cy: "border-cy/30 bg-cy/10 text-cy",
  ok: "border-cgreen/30 bg-cgreen/10 text-cgreen",
  dim: "border-white/15 bg-white/5 text-white/55",
  amber: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  green: "border-cgreen/30 bg-cgreen/10 text-cgreen",
};

export function Chip({ s, children }: { s: ChipStyle; children: React.ReactNode }) {
  return (
    <span className={cx("rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-wide", CHIP[s])}>
      {children}
    </span>
  );
}

export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number | undefined;
    let started = false;
    const obs = new IntersectionObserver(
      (es) => {
        if (es[0].isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - t0) / 900);
            setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}
