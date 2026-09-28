import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className ?? ""}
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ImageReveal({
  src,
  alt,
  position = "50% 50%",
  className = "",
  frameClassName = "",
  onClick,
  delay = 0,
  priority = false,
}: {
  src?: string;
  alt: string;
  position?: string;
  className?: string;
  frameClassName?: string;
  onClick?: () => void;
  delay?: number;
  priority?: boolean;
}) {
  const reduce = useReducedMotion();

  if (!src) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className} ${frameClassName}`}>
        <span className="label text-muted-foreground">Image pending</span>
      </div>
    );
  }

  return (
    <motion.div
      className={`zoom-frame relative ${className} ${frameClassName} ${onClick ? "cursor-pointer" : ""}`}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 34, clipPath: "inset(8% 0 12% 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0% 0)" }}
      viewport={{ once: true, amount: 0.02 }}
      transition={{ duration: 1.4, ease: EASE, delay }}
      onClick={onClick}
      {...(!reduce && onClick ? { whileHover: { y: -6 } } : {})}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
        style={{ objectPosition: position }}
      />
    </motion.div>
  );
}
