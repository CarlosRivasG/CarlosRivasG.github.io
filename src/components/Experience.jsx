import { useLanguage } from '../i18n';
import Reveal from "./Reveal";
import TechMarquee from "./TechMarquee";
import AIPhilosophy from "./AIPhilosophy";
const jobs = [
  {
    company: "BLUE LATAM",
    role: "FULL STACK SOFTWARE ENGINEER",
    period: "2024 — 2025",
    description:
      "Full-stack development for an industrial management platform.",
    tech: "React / TypeScript / NestJS / REST APIs / SQL Server",
    extra: "Additional backend experience with Java and Spring Boot.",
  },
  {
    company: "CENCOSUD / INNOMAR",
    role: "BACKEND SOFTWARE ENGINEER",
    period: "2024",
    description:
      "Backend development for platforms supporting Jumbo, Santa Isabel, SPID and Paris.",
    tech: "NestJS / TypeScript / GraphQL / PostgreSQL / Kafka / Docker / DataLoader / Scheduled processes",
  },
];
export default function Experience() {
  const { t } = useLanguage();
  return (
    <section id="experience" className="experience">
      <div className="shell">
        <div className="section-top">
          <h2 className="section-label">{t("03 — Experience")}</h2>
          <p>{t("Product thinking.")}<br />{t("Production experience.")}</p>
        </div>
        <Reveal>
          <p className="experience-heading">{t("Built in the real world.")}</p>
        </Reveal>
        <div className="timeline">
          {jobs.map((j) => (
            <Reveal key={j.company}>
              <article className="job">
                <p className="job-period mono">{j.period}</p>
                <div>
                  <p className="job-role mono">{t(j.role)}</p>
                  <h3>{j.company}</h3>
                  <p className="job-description">{t(j.description)}</p>
                  <p className="job-tech mono">{t(j.tech)}</p>
                  {j.extra && <p className="job-extra">{t(j.extra)}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <TechMarquee />
      <AIPhilosophy />
    </section>
  );
}
