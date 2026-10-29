import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { FACTS, PROFILE, PRINCIPLES } from "../data";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 lg:grid-cols-[350px_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative overflow-hidden rounded-3xl border border-white/8 bg-panel/60 p-7 text-center"
        >
          <div className="absolute -top-10 left-1/2 h-32 w-56 -translate-x-1/2 rounded-full bg-cblue/10 blur-3xl" />
          <div className="relative mx-auto h-28 w-28 rounded-full bg-gradient-to-br from-cy to-cblue p-[2px]">
            <div className="grid h-full w-full place-items-center rounded-full bg-ink">
              <span className="text-3xl font-bold tracking-[0.18em] text-white">JY</span>
            </div>
          </div>
          <div className="mt-5 text-lg font-semibold">
            {PROFILE.name1} {PROFILE.name2}
          </div>
          <div className="mt-0.5 font-mono text-[11.5px] text-cy/85">cybersecurity × quality control</div>
          <div className="my-5 h-px bg-white/8" />
          <ul className="space-y-3 text-left">
            {FACTS.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <f.icon size={15} className="mt-0.5 shrink-0 text-cy/80" />
                <span className="font-mono text-[11.5px] leading-relaxed text-white/60">{f.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }}>
          <div className="font-mono text-xs text-cy/80">~/about</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Tentang Saya</h2>

          <p className="mt-6 leading-relaxed text-white/70">
            Aku Jalaludin — orang yang bekerja di persimpangan dua hal:{" "}
            <span className="text-white">memastikan aplikasi berjalan dengan benar</span> (Quality Control) dan{" "}
            <span className="text-white">memastikan aplikasi tidak bisa dijebol</span> (Cybersecurity). Dua bidang ini saling
            mengunci: QA yang kuat membuat fitur terpercaya, security yang tertib membuat fitur bertahan.
          </p>
          <p className="mt-4 leading-relaxed text-white/70">
            Berangkat dari <span className="text-white/90">Teknik Komputer &amp; Jaringan</span>, aku terbiasa hidup di terminal —
            jaringan, Linux, dan cara sistem bicara satu sama lain. Dari sana jalanku melandai ke web security: bermain dengan
            request, header, dan logika yang "seharusnya tidak bisa" — hingga terbukti bisa. Proyek yang paling melekat:
            membangun sekaligus meng-audit sistem e-voting OSIS, dari uji fungsional sampai rate-limiting, type-coercion, dan
            body-request DoS.
          </p>

          <div className="mt-7 rounded-xl border border-white/8 bg-white/[.03] p-5 font-mono text-[12px] leading-relaxed">
            {PRINCIPLES.map((p, i) => (
              <div key={i}>
                <span className="text-cgreen">&gt; </span>
                <span className="text-white/60">prinsip #{i + 1} — </span>
                <span className="text-white/80">{p}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-2 font-mono text-[11px] text-white/35">
            <ShieldCheck size={14} className="text-cgreen" />
            mindset: kalau belum dites, anggap belum aman.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
