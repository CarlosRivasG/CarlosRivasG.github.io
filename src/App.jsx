import { LanguageProvider, useLanguage } from './i18n';
import { MotionConfig } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import SelectedWork from "./components/SelectedWork";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function Portfolio() {
  const { t } = useLanguage();
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#work">
        {t("Skip to content")}
      </a>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Experience />
        <Contact />
      </main>
      <CustomCursor />
    </MotionConfig>
  );
}

export default function App() { return <LanguageProvider><Portfolio /></LanguageProvider>; }
