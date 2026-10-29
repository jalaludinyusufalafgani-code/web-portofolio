import { useEffect, useRef } from "react";

export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0;
    let raf: number | undefined;
    let running = false;
    const N = window.innerWidth < 768 ? 34 : 72;
    const R = 140 * DPR;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    interface Pt { x: number; y: number; vx: number; vy: number }
    let pts: Pt[] = [];

    const resize = () => {
      w = cv.width = window.innerWidth * DPR;
      h = cv.height = window.innerHeight * DPR;
      cv.style.width = window.innerWidth + "px";
      cv.style.height = window.innerHeight + "px";
    };
    const init = () => {
      pts = Array.from({ length: N }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22 * DPR,
        vy: (Math.random() - 0.5) * 0.22 * DPR,
      }));
    };
    const step = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      ctx.lineWidth = DPR;
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < R * R) {
            const al = (1 - Math.sqrt(d2) / R) * 0.13;
            ctx.strokeStyle = `rgba(0,242,254,${al})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = "rgba(0,242,254,.35)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1 * DPR, 0, 7);
        ctx.fill();
      }
      if (running) raf = requestAnimationFrame(step);
    };
    const play = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    };

    resize();
    init();
    if (media.matches) {
      running = false;
      step();
    } else play();

    const onResize = () => {
      resize();
      init();
      if (media.matches) step();
    };
    const onVis = () => (document.hidden ? stop() : !media.matches && play());
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <canvas ref={ref} className="absolute inset-0" />
      <div className="absolute inset-0 bg-grid grid-fade opacity-80" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 45% at 70% -5%, rgba(44,103,237,.14), transparent 65%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 40% at 15% 110%, rgba(0,242,254,.07), transparent 60%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(10,10,12,.55) 100%)" }}
      />
    </div>
  );
}
