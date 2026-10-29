import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Send } from "lucide-react";
import { PROFILE } from "../data";
import { cx } from "./ui";

interface Status {
  ok: boolean;
  msg: string;
}

export default function Contact() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [status, setStatus] = useState<Status | null>(null);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!form.nama.trim() || form.nama.trim().length < 2) return setStatus({ ok: false, msg: "[!] Nama terlalu pendek." });
    if (!emailRe.test(form.email)) return setStatus({ ok: false, msg: "[!] Format email tidak valid." });
    if (form.pesan.trim().length < 10)
      return setStatus({ ok: false, msg: "[!] Ceritakan kebutuhanmu minimal 10 karakter." });
    const subject = encodeURIComponent(`[Portfolio] Pesan dari ${form.nama.trim()}`);
    const body = encodeURIComponent(`${form.pesan.trim()}\n\n— ${form.nama.trim()}\n${form.email.trim()}`);
    setStatus({
      ok: true,
      msg: "[ok] membuka aplikasi email kamu… (kalau tidak terbuka, kirim manual ke " + PROFILE.email + ")",
    });
    setTimeout(() => {
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    }, 350);
  };

  const field =
    "w-full rounded-xl border border-white/10 bg-white/[.04] px-4 py-3 text-[16px] sm:text-sm text-white placeholder-white/25 transition-colors focus:border-cy/60 focus:outline-none focus:ring-1 focus:ring-cy/40";

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="font-mono text-xs text-cy/80">~/contact</div>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Hubungi Saya</h2>
        <p className="mt-3 max-w-xl text-white/60">
          Punya sistem yang perlu dites — fungsional maupun keamanannya? Atau mau kolaborasi? Ceritakan di sini.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
          <motion.form
            onSubmit={submit}
            noValidate
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl border border-white/8 bg-panel/60 p-6 sm:p-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-nama" className="text-xs font-medium text-white/60">
                  Nama
                </label>
                <input
                  id="c-nama"
                  className={cx(field, "mt-2")}
                  placeholder="Nama kamu"
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="c-email" className="text-xs font-medium text-white/60">
                  Email
                </label>
                <input
                  id="c-email"
                  type="email"
                  className={cx(field, "mt-2")}
                  placeholder="kamu@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="c-pesan" className="text-xs font-medium text-white/60">
                Pesan
              </label>
              <textarea
                id="c-pesan"
                rows={5}
                className={cx(field, "mt-2 resize-y")}
                placeholder="Ceritakan target, lingkup, dan ekspektasinya…"
                value={form.pesan}
                onChange={(e) => setForm({ ...form, pesan: e.target.value })}
              />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cy to-cblue px-6 py-3 text-sm font-semibold text-ink shadow-[0_0_30px_-8px_rgba(0,242,254,0.55)] transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Kirim Pesan <Send size={15} />
              </button>
              {status && (
                <span className={cx("font-mono text-xs", status.ok ? "text-cgreen" : "text-rose-300")}>{status.msg}</span>
              )}
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-3"
          >
            {PROFILE.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-3.5 rounded-xl border border-white/8 bg-panel/60 px-5 py-4 transition-colors hover:border-cy/40"
              >
                <s.icon size={18} className="text-cy" />
                <span className="text-sm font-medium text-white/85">{s.label}</span>
                <ArrowUpRight size={15} className="ml-auto text-white/25" />
              </a>
            ))}
            <div className="rounded-xl border border-white/8 bg-panel/60 p-5">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cgreen opacity-60"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cgreen"></span>
                </span>
                <span className="text-sm font-medium text-white/85">Open untuk kerja &amp; kolaborasi</span>
              </div>
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-white/45">
                respon biasanya &lt; 24 jam · audit kecil–menengah · QA manual/hybrid · mentoring dasar linux &amp; security
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
