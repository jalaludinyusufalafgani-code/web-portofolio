import { motion } from "framer-motion";
import { NAV } from "../data";
import { cx } from "./ui";

interface NavProps {
  active: string;
  onGo: (id: string) => void;
}

export default function Nav({ active, onGo }: NavProps) {
  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.15 }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-3"
      aria-label="Navigasi utama"
    >
      <div className="flex items-center gap-1 rounded-full border border-cy/25 bg-ink/70 backdrop-blur-md px-2 py-1.5 shadow-[0_0_28px_-8px_rgba(0,242,254,0.35)] max-w-full overflow-x-auto no-bar">
        <div className="mr-1 hidden sm:grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cy to-cblue text-ink text-[13px] font-bold select-none">
          JY
        </div>
        {NAV.map((n) => {
          const is = active === n.id;
          return (
            <a
              key={n.id}
              href={"#" + (n.id === "skills" || n.id === "projects" ? "work" : n.id)}
              onClick={() => onGo(n.id)}
              className="relative whitespace-nowrap rounded-full px-2.5 sm:px-4 py-2 sm:py-2 text-[12.5px] sm:text-[14px] font-medium transition-colors"
            >
              {is && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  className="absolute inset-0 rounded-full bg-cy/12 ring-1 ring-cy/40"
                />
              )}
              <span className={cx("relative z-10", is ? "text-cy" : "text-white/60 hover:text-white")}>
                {n.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
