import { motion } from "framer-motion";
import { METRICS } from "../data";
import { CountUp } from "./ui";

export default function Metrics() {
  return (
    <section className="py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-panel/60 p-5 transition-colors hover:border-cy/30"
          >
            <div className="flex items-center justify-between">
              <m.icon size={22} className="text-cy/90" strokeWidth={1.7} />
              <span className="font-mono text-[10px] text-white/25">0{i + 1}</span>
            </div>
            <div className="mt-4 text-2xl font-bold tracking-tight text-white">
              {m.count ? <CountUp to={m.count} suffix="+" /> : m.value}
            </div>
            <div className="mt-1 text-[13px] text-white/55">{m.label}</div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-cy/8 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
