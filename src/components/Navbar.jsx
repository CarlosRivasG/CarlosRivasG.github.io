import { useLanguage } from '../i18n';
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "../styles/navbar.css";
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
const links = ["Home", "Work", "About", "Experience", "Contact"];
export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false),
    [active, setActive] = useState("home");
  const button = useRef(null),
    panel = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main > section[id]")
      .forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const main = document.querySelector("main");
    if (main) main.inert = true;
    panel.current?.querySelector("a")?.focus();
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
      if (e.key === "Tab") {
        const items = [...document.querySelectorAll('.nav-controls button'), ...panel.current.querySelectorAll('a')];
        const i = items.indexOf(document.activeElement);
        e.preventDefault();
        items[
          (i + (e.shiftKey ? -1 : 1) + items.length) % items.length
        ].focus();
      }
    };
    const resize = () => {
      if (innerWidth > 768) setOpen(false);
    };
    window.addEventListener("keydown", key);
    window.addEventListener("resize", resize);
    return () => {
      document.body.style.overflow = previous;
      if (main) main.inert = false;
      window.removeEventListener("keydown", key);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <>
      <motion.header
        className={`navbar ${open ? "menu-open" : ""}`}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <a
          href="#home"
          className="wordmark"
          onClick={() => setOpen(false)}
          aria-label={t("Carlos Rivas, home")}
        >
          <span className="desktop-name">
            CARLOS RIVAS<span className="logo-dot">.</span>
          </span>
          <span className="mobile-name">
            CR<span className="logo-dot">.</span>
          </span>
        </a>
        <nav aria-label={t("Main navigation")} className="desktop-nav">
          {links.map((l, i) => (
            <a
              href={`#${l.toLowerCase()}`}
              key={l}
              aria-current={active === l.toLowerCase() ? "location" : undefined}
            >
              <span>0{i + 1} / </span>
              {t(l).toUpperCase()}
            </a>
          ))}
        </nav>
        <div className="nav-controls">
        <LanguageToggle />
        <ThemeToggle />
        <button
          ref={button}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {t(open ? "CLOSE −" : "MENU +")}
        </button>
        </div>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.nav
            ref={panel}
            id="mobile-menu"
            className="mobile-menu"
            aria-label={t("Mobile navigation")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {links.map((l, i) => (
              <a
                href={`#${l.toLowerCase()}`}
                key={l}
                onClick={() => {
                  setOpen(false);
                  button.current?.focus();
                }}
              >
                <span>0{i + 1}</span>
                {t(l)}
              </a>
            ))}
            <p>{t("SANTIAGO, CHILE · REMOTE / LATAM")}</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

