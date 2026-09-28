import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Img } from "@/data/portfolio";

export function Lightbox({
  images,
  index,
  title,
  onClose,
  onIndexChange,
}: {
  images: Img[];
  index: number | null;
  title: string;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const open = index !== null;
  const touchX = useRef<number | null>(null);
  const [dir, setDir] = useState(1);
  const reduce = useReducedMotion();

  const go = useCallback(
    (step: number) => {
      if (index === null) return;
      setDir(step);
      onIndexChange((index + step + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, go, onClose]);

  const current = index !== null ? images[index] : undefined;

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-ink"
          initial={reduce ? { opacity: 1 } : { opacity: 0, clipPath: "inset(100% 0 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between px-6 py-6 text-paper sm:px-10">
            <span className="label text-chrome">
              {title} — {String(index + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              aria-label="Close gallery"
              className="rounded-none text-paper hover:bg-paper/10 hover:text-gold"
            >
              <X aria-hidden="true" />
            </Button>
          </div>

          <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4 pb-6 sm:px-16">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.img
                key={current.src}
                src={current.src}
                alt={current.alt}
                className="max-h-full max-w-full object-contain"
                initial={reduce ? { opacity: 1 } : { opacity: 0, x: dir * 80, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -80, scale: 1.02 }}
                transition={{ duration: reduce ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>

            <Button
              aria-label="Previous image"
              onClick={() => go(-1)}
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 h-12 w-12 -translate-y-1/2 rounded-none text-chrome hover:bg-paper/10 hover:text-gold sm:left-6"
            >
              <ChevronLeft aria-hidden="true" />
            </Button>
            <Button
              aria-label="Next image"
              onClick={() => go(1)}
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 h-12 w-12 -translate-y-1/2 rounded-none text-chrome hover:bg-paper/10 hover:text-gold sm:right-6"
            >
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={current.src}
              className="px-6 pb-4 text-center text-xs font-light tracking-wide text-chrome sm:px-10"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {current.alt}
            </motion.p>
          </AnimatePresence>
          <div className="h-px w-full bg-paper/15">
            <motion.div
              className="h-full bg-gold"
              animate={{ scaleX: (index + 1) / images.length }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
