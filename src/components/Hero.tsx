import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PROFILE } from "../data";
import { useTypewriter } from "../hooks/useTypewriter";

type TermLine = { t: "cmd" | "ok" | "i"; s?: string; k?: string; v?: string };
const TERM: TermLine[] = [
  { t: "cmd", s: 'run security --scope "web · api · infra"' },
  { t: "ok", k: "functional coverage", v: "50+ test case" },
  { t: "ok", k: "owasp top 10", v: "in scope" },
  { t: "ok", k: "rate-limit & body caps", v: "enforced" },
  { t: "ok", k: "data leak", v: "0 target" },
  { t: "i", k: "linux & network hardening", v: "ongoing" },
];

export default function Hero({ onCase }: { onCase: (id: string) => void }) {
  const typed = useTypewriter(PROFILE.roles);

  return (
    <section id="home" className="flex min-h-[92vh] items-center px-5 pt-32 pb-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-cgreen/30 bg-cgreen/10 px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cgreen opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cgreen"></span>
            </span>
            <span className="text-xs font-medium tracking-wide text-cgreen">Available for Security Audit &amp; QA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl xl:text-6xl"
          >
            {PROFILE.name1}
            <br />
            <span className="bg-gradient-to-r from-cy to-cblue bg-clip-text text-transparent">{PROFILE.name2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-4 font-mono text-base text-cy/90 sm:text-lg"
          >
            <span className="text-white/35">&gt;&nbsp;</span>
            {typed}
            <span className="caret" aria-hidden="true"></span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 sm:text-base"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#work"
              onClick={() => onCase("projects")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cy to-cblue px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_34px_-8px_rgba(0,242,254,0.6)] transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              Lihat Studi Kasus <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/85 transition-colors hover:border-cy/50 hover:text-white sm:w-auto"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>

        <Terminal />
      </div>
    </section>
  );
}

function Terminal() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 26 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d12]/85 backdrop-blur-md shadow-[0_24px_70px_-24px_rgba(0,0,0,0.85)]"
    >
      <div className="flex items-center gap-1.5 border-b border-white/8 bg-white/[.03] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80"></span>
        <span className="h-2.5 w-2.5 rounded-full bg-cgreen/80"></span>
        <span className="ml-2 font-mono text-[11px] text-white/35">audit@jalaludin — ~/portfolio</span>
      </div>
      <div className="p-4 font-mono text-[10.5px] leading-relaxed sm:p-5 sm:text-[12.5px]">
        {TERM.map((l, i) => (
          <div key={i} className="flex items-baseline gap-1.5">
            {l.t === "cmd" ? (
              <>
                <span className="text-cgreen">~/jalaludin</span>
                <span className="text-white/40">$</span>
                <span className="text-white/85">{l.s}</span>
              </>
            ) : (
              <>
                <span className={l.t === "ok" ? "text-cgreen" : "text-cblue"}>
                  [ {l.t === "ok" ? "ok" : " i "} ]
                </span>
                <span className="text-white/60">{l.k}</span>
                <span className="flex-1 border-b border-dotted border-white/15"></span>
                <span className={l.t === "ok" ? "text-white/85" : "text-white/50"}>{l.v}</span>
              </>
            )}
          </div>
        ))}
        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="text-cgreen">~/jalaludin</span>
          <span className="text-white/40">$</span>
          <span className="caret" aria-hidden="true"></span>
        </div>
      </div>
    </motion.div>
  );
}
