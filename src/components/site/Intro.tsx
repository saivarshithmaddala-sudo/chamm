import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { designer } from "@/data/portfolio";

export function Intro() {
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const t = setTimeout(() => setDone(true), reduce ? 350 : 2600);
    return () => clearTimeout(t);
  }, [reduce]);

  useEffect(() => {
    if (done) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-center justify-center overflow-hidden bg-ink"
          exit={reduce ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: reduce ? 0.2 : 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full px-6 text-center sm:px-10">
            <motion.p
              className="label mb-6 text-gold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              Portfolio — 2026
            </motion.p>
            <div className="overflow-hidden py-2">
              <motion.h1
                className="display text-[clamp(1.5rem,7vw,5rem)] text-paper"
                initial={reduce ? { opacity: 1 } : { opacity: 0, y: "110%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
              >
                {designer.name.toUpperCase()}
              </motion.h1>
            </div>
            <div className="mx-auto mt-8 h-px max-w-md overflow-hidden bg-paper/20">
              <motion.div
                className="h-full bg-gold"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ transformOrigin: "left" }}
                transition={{ duration: reduce ? 0 : 1.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
            <motion.p
              className="label mt-5 text-chrome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ice — Mirror — Noir
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
