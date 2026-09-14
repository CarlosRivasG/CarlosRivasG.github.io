import { useLanguage } from '../i18n';
import Reveal from "./Reveal";
import Process from "./Process";
export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about shell">
      <h2 className="section-label">{t("02 — About")}</h2>
      <Reveal>
        <p className="about-statement">{t("I care about what gets built")}<br className="desktop-break" />{" "}{t("before I care about how much")}<br className="desktop-break" />{" "} <span>{t("code gets written.")}</span>
        </p>
      </Reveal>
      <div className="about-copy">
        <p className="mono">
          CARLOS RIVAS
          <br />{t("ENGINEER BY PRACTICE.")}<br />{t("BUILDER BY NATURE.")}</p>
        <div>
          <p>{t("I’m Carlos Rivas, a software engineer focused on building products end-to-end.")}</p>
          <p>{t("My work sits between product thinking, backend engineering, full-stack development and AI-assisted workflows.")}</p>
          <p>{t("I enjoy turning ambiguous problems into clear systems: understanding the problem, defining the smallest useful product, choosing the architecture and taking it into production.")}</p>
        </div>
      </div>
      <div className="manifesto">
        <p className="mono">{t("CODE IS PART OF THE JOB.")}</p>
        {["UNDERSTANDING", "WHAT TO BUILD", "IS THE CRAFT."].map((line, i) => (
          <Reveal key={line} delay={i * 0.08}>
            <p className={i === 2 ? "craft" : ""}>{t(line)}</p>
          </Reveal>
        ))}
      </div>
      <Process />
    </section>
  );
}

