import { CERTS } from "../data";
import { Chip } from "./ui";
import CertGallery from "./CertGallery";

export default function TabCerts() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {CERTS.map((c) => (
          <div
            key={c.title}
            className="flex gap-4 rounded-2xl border border-white/8 bg-panel/50 p-5 transition-colors hover:border-cy/25"
          >
            <div className="h-fit rounded-xl bg-cy/10 p-3 text-cy">
              <c.icon size={19} strokeWidth={1.7} />
            </div>
            <div className="min-w-0">
              <div className="text-[15px] font-semibold text-white">{c.title}</div>
              <div className="font-mono text-[11px] text-white/40">{c.org}</div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">{c.desc}</p>
              <div className="mt-2.5">
                <Chip s={c.s}>{c.status}</Chip>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-9">
        <div className="font-mono text-xs text-cy/80">{"//"} bukti — galeri</div>
        <h3 className="mt-1.5 text-xl font-semibold">Galeri Sertifikat</h3>
        <CertGallery />
      </div>
      <p className="mt-4 font-mono text-[11px] text-white/30">* status diperbarui berkala — minta daftar terbaru lewat kontak.</p>
      {/* TODO: status — sesuaikan dengan pencapaian sertifikasi asli */}
    </div>
  );
}
