import { useLanguage } from '../i18n';
import { ArrowUpRight, ArrowUp } from "lucide-react";
import Reveal from "./Reveal";
export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="contact shell">
      <div className="section-top">
        <h2 className="section-label">{t("04 — Contact")}</h2>
        <p className="mono">
          SANTIAGO, CHILE
          <br />{t("REMOTE / HYBRID · CHILE / LATAM")}</p>
      </div>
      <Reveal>
        <h2 className="contact-title">{t("LET’S BUILD")}<br />
          <span>{t("SOMETHING.")}</span>
        </h2>
      </Reveal>
      <div className="contact-bottom">
        <div>
          <p>{t("Have a product, role or problem worth solving?")}</p>
          <a className="contact-cta" href="mailto:carlosrmgtech9@gmail.com">{t("GET IN TOUCH")}<ArrowUpRight strokeWidth={1} />
          </a>
          <a className="email" href="mailto:carlosrmgtech9@gmail.com">
            carlosrmgtech9@gmail.com
          </a>
        </div>
        <div className="socials mono">
          <a
            href="https://www.linkedin.com/in/carlosmrivasg"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN <ArrowUpRight size={15} />
          </a>
          <a
            href="https://github.com/CarlosRivasG"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <footer className="footer mono">
        <span>CARLOS RIVAS</span>
        <span>SANTIAGO, CHILE</span>
        <span>© 2026</span>
        <a href="#home" aria-label={t("Back to top")}>
          <ArrowUp size={16} />
        </a>
      </footer>
    </section>
  );
}
