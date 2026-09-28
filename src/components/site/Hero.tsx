import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { collections, designer } from "@/data/portfolio";

const EASE = [0.22, 1, 0.36, 1] as const;

const scenes = [
  {
    title: collections[0]!.title,
    number: collections[0]!.number,
    concept: collections[0]!.concept,
    primary: collections[0]!.images[0]!,
    secondary: collections[0]!.images[4]!,
    tone: "hero-scene-ice",
  },
  {
    title: collections[1]!.title,
    number: collections[1]!.number,
    concept: collections[1]!.concept,
    primary: collections[1]!.images[0]!,
    secondary: collections[1]!.images[3]!,
    tone: "hero-scene-mirror",
  },
  {
    title: collections[2]!.title,
    number: collections[2]!.number,
    concept: collections[2]!.concept,
    primary: collections[2]!.images[0]!,
    secondary: collections[2]!.images[2]!,
    tone: "hero-scene-noir",
  },
] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scene = scenes[active]!;

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % scenes.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-screen min-h-[100svh] w-full overflow-hidden bg-ink text-paper"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={scene.title}
            className={`absolute inset-0 grid h-[114%] w-full grid-cols-1 sm:grid-cols-[1.35fr_1fr] ${scene.tone}`}
            initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 1.035 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.015 }}
            transition={{ duration: reduce ? 0 : 1.25, ease: EASE }}
          >
            <motion.img
              src={scene.primary.src}
              alt={scene.primary.alt}
              className="h-full w-full object-cover"
              style={{ objectPosition: scene.primary.position }}
              initial={reduce ? { scale: 1 } : { scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6.5, ease: "linear" }}
            />
            <motion.img
              src={scene.secondary.src}
              alt={scene.secondary.alt}
              className="hidden h-full w-full object-cover sm:block"
              style={{ objectPosition: scene.secondary.position }}
              initial={reduce ? { scale: 1 } : { scale: 1.04 }}
              animate={{ scale: 1.08 }}
              transition={{ duration: 6.5, ease: "linear" }}
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/25 to-ink/95" />

      <span className="vertical-label absolute left-4 top-1/2 hidden -translate-y-1/2 text-chrome lg:block">
        Chapter {scene.number} — {scene.title}
      </span>

      <motion.div
        style={{ opacity: fade }}
        className="relative flex h-full flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20"
      >
        <motion.p
          className="label mb-5 text-chrome"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {designer.role} — Final Semester 2026
        </motion.p>

        <div className="relative overflow-hidden pb-2">
          <motion.h1
            className="display text-[clamp(1.75rem,6.6vw,7.5rem)] uppercase"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, delay: 2.4, ease: EASE }}
          >
            {designer.name}
          </motion.h1>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={scene.title}
            className="mt-5 flex min-w-0 items-baseline gap-4 sm:gap-6"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: reduce ? 0 : 0.8, ease: EASE }}
          >
            <span className="font-display text-2xl text-gold sm:text-4xl">{scene.number}</span>
            <div className="min-w-0">
              <p className="display text-2xl uppercase sm:text-4xl">{scene.title}</p>
              <p className="mt-1 max-w-md text-xs font-light text-chrome sm:text-sm">
                {scene.concept}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-8 flex flex-wrap items-end justify-between gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 2.9 }}
        >
          <div className="flex items-center gap-2" aria-label="Choose collection theme">
            {scenes.map((item, index) => (
              <Button
                key={item.title}
                type="button"
                variant="ghost"
                size="icon"
                aria-label={`Show ${item.title} collection`}
                aria-pressed={active === index}
                onClick={() => setActive(index)}
                className="group relative h-8 w-11 rounded-none p-0 hover:bg-transparent"
              >
                <span className="absolute inset-x-0 h-px bg-paper/35" />
                <motion.span
                  className="absolute inset-x-0 h-px bg-gold"
                  initial={false}
                  animate={{ scaleX: active === index ? 1 : 0 }}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.55, ease: EASE }}
                />
                <span className="sr-only">{item.title}</span>
              </Button>
            ))}
          </div>
          <a href="#statement" className="label flex items-center gap-3 text-chrome">
            Discover
            <motion.span
              className="block h-px w-12 bg-gold"
              animate={reduce ? { scaleX: 1 } : { scaleX: [0.3, 1, 0.3] }}
              style={{ transformOrigin: "left" }}
              transition={{ duration: 3, repeat: reduce ? 0 : Infinity, ease: "easeInOut" }}
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
