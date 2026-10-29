import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, STACK, TABS } from "../data";
import { Chip, cx } from "./ui";
import TabCerts from "./TabCerts";

type TabId = "projects" | "stack" | "certs";

export default function Portfolio({ onCase }: { onCase: (id: string) => void }) {
  const [tab, setTab] = useState<TabId>("projects");

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="font-mono text-xs text-cy/80">~/portfolio</div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Studi Kasus &amp; Arsenal</h2>
        <p className="mt-3 max-w-2xl text-white/60">
          Tiga lapis: <span className="text-white/80">kerja yang sudah dibuktikan</span>,{" "}
          <span className="text-white/80">perlengkapan yang dikuasai</span>, dan{" "}
          <span className="text-white/80">pembelajaran yang berjalan</span>.
        </p>

        <div
          className="mt-8 inline-flex max-w-full overflow-x-auto rounded-full border border-white/10 bg-white/[.03] p-1"
          role="tablist"
          aria-label="Tab portfolio"
        >
          {TABS.map((t) => {
            const is = tab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={is}
                onClick={() => setTab(t.id)}
                className="relative whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-colors sm:px-5"
              >
                {is && (
                  <motion.span
                    layoutId="tab-pill"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-cy/12 ring-1 ring-cy/40"
                  />
                )}
                <span className={cx("relative z-10", is ? "text-cy" : "text-white/55 hover:text-white/85")}>
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-7 min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              {tab === "projects" && <TabProjects onCase={onCase} />}
              {tab === "stack" && <TabStack />}
              {tab === "certs" && <TabCerts />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function TabProjects({ onCase }: { onCase: (id: string) => void }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {PROJECTS.map((p, i) => (
        <motion.article
          key={p.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.06 }}
          className="group flex flex-col rounded-2xl border border-white/8 bg-panel/50 p-6 transition-colors hover:border-cy/30 hover:bg-panel/80"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10.5px] text-white/30">{p.id}</span>
            <div className="flex flex-wrap justify-end gap-1.5">
              {p.tags.map((t) => (
                <Chip key={t.t} s={t.s}>
                  {t.t}
                </Chip>
              ))}
            </div>
          </div>
          <h3 className="mt-4 text-[17px] font-semibold leading-snug text-white">{p.title}</h3>
          <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-white/60">{p.desc}</p>
          <div className="mt-4 font-mono text-[11.5px] text-cgreen">→ {p.result}</div>
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/6 pt-4">
            {p.stack.map((s) => (
              <span key={s} className="font-mono text-[10px] text-white/35">
                {s}
              </span>
            ))}
            <a
              href="#contact"
              onClick={() => onCase("projects")}
              className="ml-auto inline-flex items-center gap-1 font-mono text-[10.5px] text-cy/70 transition-colors hover:text-cy"
            >
              tanya detail <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function TabStack() {
  return (
    <div className="space-y-9">
      {STACK.map((g) => (
        <div key={g.group}>
          <div className="font-mono text-xs text-cy/80">
            {"//"} {g.group}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {g.items.map((it) => (
              <div
                key={it.name}
                className="flex items-start gap-3 rounded-xl border border-white/8 bg-panel/50 p-4 transition-colors hover:border-cy/25"
              >
                <div className="rounded-lg bg-cy/10 p-2 text-cy">
                  <it.icon size={17} strokeWidth={1.8} />
                </div>
                <div>
                  <div className="text-[13.5px] font-medium text-white">{it.name}</div>
                  <div className="mt-0.5 text-xs leading-relaxed text-white/50">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

