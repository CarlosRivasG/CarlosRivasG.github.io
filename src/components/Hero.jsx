import { useLanguage } from '../i18n';
import { lazy, Suspense, Component, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import "../styles/hero.css";
const Scene = lazy(() => import("./Scene"));
class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef(null),
    reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 110]);
  return (
    <section id="home" ref={ref} className="hero">
      <motion.div
        className="hero-art"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8 }}
      >
        <SceneBoundary>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </SceneBoundary>
      </motion.div>
      <div className="hero-edition mono">{t("INDEPENDENT MIND.")}<br />{t("PRODUCT-DRIVEN ENGINEERING.")}</div>
      <div className="hero-index mono">{t("PORTFOLIO — 2026")}<br />
        <span>33.45° S / 70.66° W</span>
      </div>
      <motion.div
        className="hero-composition"
        style={reduced ? {} : { opacity, y }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span>CARLOS</span>
          <span>
            RIVAS<span className="name-period">.</span>
          </span>
        </motion.h1>
        <motion.p
          className="hero-role"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
        >{t("PRODUCT ENGINEER,")}<br />{t("SOFTWARE ENGINEER")}<br />
          <span>{t("& AI-NATIVE BUILDER.")}</span>
        </motion.p>
      </motion.div>
      <motion.div
        className="hero-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <p className="mono location">
          SANTIAGO, CHILE
          <br />
          <span>{t("REMOTE / LATAM")}</span>
        </p>
        <p className="hero-message">{t("I turn problems into products —")}<br />
          <span>{t("from idea to production.")}</span>
        </p>
        <a className="explore mono" href="#work">{t("SCROLL TO EXPLORE")}<ArrowDown size={18} />
        </a>
      </motion.div>
      <a className="hero-availability mono" href="#contact">{t("AVAILABLE FOR REMOTE / HYBRID")}<ArrowUpRight size={13} />
      </a>
    </section>
  );
}
