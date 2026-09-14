import { useLanguage } from '../i18n';
import { useEffect, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "motion/react";
export default function CustomCursor() {
  const { t } = useLanguage();
  const x = useMotionValue(-100),
    y = useMotionValue(-100);
  const [mode, setMode] = useState("default"),
    [enabled, setEnabled] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const media = matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(media.matches);
    const change = () => setEnabled(media.matches);
    media.addEventListener("change", change);
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setMode(
        e.target.closest("[data-project-link]")
          ? "project"
          : e.target.closest("a,button")
            ? "link"
            : "default",
      );
    };
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };
    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      media.removeEventListener("change", change);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);
  return enabled && !reduced ? (
    <motion.div
      aria-hidden="true"
      className={`custom-cursor ${mode}`}
      style={{ left: x, top: y }}
      animate={{
        width: mode === "project" ? 72 : mode === "link" ? 18 : 6,
        height: mode === "project" ? 72 : mode === "link" ? 18 : 6,
      }}
      transition={{ duration: 0.2 }}
    >
      {mode === "project" ? t("VIEW") : ""}
    </motion.div>
  ) : null;
}
