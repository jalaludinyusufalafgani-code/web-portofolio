import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ImagePlus, X } from "lucide-react";
import { CERT_PHOTOS } from "../data";

export default function CertGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const has = CERT_PHOTOS.filter((p) => p.src).length;

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => ((v ?? 0) + 1) % CERT_PHOTOS.length);
      if (e.key === "ArrowLeft") setOpen((v) => ((v ?? 0) - 1 + CERT_PHOTOS.length) % CERT_PHOTOS.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const lightbox = (
    <AnimatePresence>
      {open !== null && CERT_PHOTOS[open] && CERT_PHOTOS[open].src && (
        <motion.div
          onClick={() => setOpen(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <img
              src={CERT_PHOTOS[open].src}
              alt={CERT_PHOTOS[open].title}
              className="mx-auto max-h-[76vh] w-auto rounded-xl border border-white/15 shadow-2xl"
            />
            <div className="mt-3 flex items-center justify-between gap-4">
              <button
                onClick={() => setOpen((open - 1 + CERT_PHOTOS.length) % CERT_PHOTOS.length)}
                className="flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] text-white/70 hover:border-cy/50 hover:text-cy"
              >
                <ChevronLeft size={14} /> prev
              </button>
              <div className="font-mono text-[11px] text-white/60">
                {CERT_PHOTOS[open].title} <span className="text-white/25">· {open + 1}/{CERT_PHOTOS.length}</span>
              </div>
              <button
                onClick={() => setOpen((open + 1) % CERT_PHOTOS.length)}
                className="flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 font-mono text-[11px] text-white/70 hover:border-cy/50 hover:text-cy"
              >
                next <ChevronRight size={14} />
              </button>
            </div>
            <button
              onClick={() => setOpen(null)}
              aria-label="Tutup"
              className="absolute -top-11 right-0 rounded-full border border-white/15 p-2 text-white/70 hover:border-cy/50 hover:text-cy"
            >
              <X size={17} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div>
      <p className="mt-1.5 text-[13px] text-white/50">
        Foto sertifikat, badge &amp; CTF — klik untuk zoom. Navigasi: ← → atau tombol.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {CERT_PHOTOS.map((ph, i) =>
          ph.src ? (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/60 text-left"
            >
              <img
                src={ph.src}
                alt={ph.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-3.5">
                <div className="text-[13px] font-medium text-white">{ph.title}</div>
              </div>
              <div className="absolute right-3 top-3 rounded-full bg-black/60 p-2 text-cy opacity-0 transition-opacity group-hover:opacity-100">
                <ImagePlus size={15} />
              </div>
            </button>
          ) : (
            <div
              key={i}
              className="grid aspect-[4/3] place-items-center rounded-2xl border border-dashed border-white/15 bg-white/[.02] p-5 text-center"
            >
              <div>
                <Award size={26} className="mx-auto text-white/15" />
                <div className="mt-2.5 font-mono text-[11.5px] text-white/40">{ph.title}</div>
                <div className="mt-1 font-mono text-[10px] text-white/20">
                  slot-0{i + 1} — kosong (isi src di CERT_PHOTOS)
                </div>
              </div>
            </div>
          )
        )}
      </div>
      {has === 0 && (
        <p className="mt-3 font-mono text-[10.5px] text-white/25">
          * semua slot masih kosong — kirim fotomu, nanti kutempel di sini.
        </p>
      )}
      {createPortal(lightbox, document.body)}
    </div>
  );
}
