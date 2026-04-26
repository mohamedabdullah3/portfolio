"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 26, stiffness: 380, mass: 0.4 });
  const sy = useSpring(y, { damping: 26, stiffness: 380, mass: 0.4 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const interactive = t.closest(
        "a,button,[role='button'],input,textarea,select,label,[data-cursor='hover']"
      );
      setHovering(!!interactive);
    };

    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerenter", onEnter);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerenter", onEnter);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-accent)]"
        animate={{
          width: hovering ? 36 : 10,
          height: hovering ? 36 : 10,
          backgroundColor: hovering
            ? "rgba(255,122,69,0.12)"
            : "rgba(255,122,69,0.95)",
          opacity: hidden ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
      />
    </motion.div>
  );
}
