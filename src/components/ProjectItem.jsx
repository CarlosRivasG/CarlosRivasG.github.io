import { useLanguage } from '../i18n';
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
function ProjectVisual({ type }) {
  const { t } = useLanguage();
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      {type === "orbita" ? (
        <>
          <span className="visual-label mono">{t("ONE WORKSPACE. EVERY PERSPECTIVE.")}</span>
          <svg viewBox="0 0 800 300">
            <g fill="none" stroke="currentColor">
              <ellipse
                cx="400"
                cy="150"
                rx="210"
                ry="77"
                transform="rotate(-25 400 150)"
              />
              <ellipse
                cx="400"
                cy="150"
                rx="210"
                ry="77"
                transform="rotate(25 400 150)"
              />
              <ellipse
                cx="400"
                cy="150"
                rx="210"
                ry="77"
                transform="rotate(90 400 150)"
              />
              <circle cx="400" cy="150" r="7" fill="currentColor" />
            </g>
          </svg>
          <span className="visual-bottom mono">{t("CLIENT ↔ CONSULTANCY")}</span>
        </>
      ) : type === "seismic" ? (
        <>
          <span className="visual-label mono">{t("SIGNAL / STRUCTURE / UNDERSTANDING")}</span>
          <svg viewBox="0 0 800 300">
            <g stroke="currentColor" fill="none">
              {[70, 110, 150, 190, 230].map((y, i) => (
                <path
                  key={y}
                  opacity={i === 2 ? 1 : 0.22}
                  d={`M0 ${y} H210 l25 -6 20 10 15 -25 14 45 13 -80 15 120 15 -160 16 195 17 -160 16 105 20 -60 18 30 20 -16 30 7 H800`}
                />
              ))}
            </g>
          </svg>
          <span className="visual-bottom mono">VENEZUELA / COLOMBIA</span>
        </>
      ) : type === "subtrack" ? (
        <>
          <span className="visual-label mono">{t("RECURRING DOESN’T HAVE TO MEAN INVISIBLE.")}</span>
          <div className="recurrence">
            {["01", "08", "15", "22", "29"].map((n, i) => (
              <div key={n}>
                <span>{n}</span>
                <i style={{ height: `${[34, 65, 43, 90, 55][i]}px` }} />
              </div>
            ))}
          </div>
          <span className="visual-bottom mono">{t("EXPENSES → PATTERNS → INSIGHTS")}</span>
        </>
      ) : (
        <>
          <span className="visual-label mono">{t("FROM PREPARATION TO SERVICE.")}</span>
          <div className="kitchen-flow">
            <span>{t("PREP")}</span>
            <i />
            <span>{t("STATION")}</span>
            <i />
            <span>{t("SERVICE")}</span>
          </div>
          <span className="visual-bottom mono">{t("A SYSTEM FOR DAILY OPERATIONS")}</span>
        </>
      )}
    </div>
  );
}
export default function ProjectItem({ project: p, index }) {
  const { t } = useLanguage();
  return (
    <Reveal>
      <article className={`project project-${p.visual}`}>
        <div className="project-top">
          <span className="project-number mono">0{index + 1}</span>
          <div className="project-main">
            <p className="project-category mono">{t(p.category)}</p>
            <h3>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  data-project-link
                  aria-label={`${t("VIEW")} ${p.name} — GitHub`}
                >
                  {p.name}
                  <ArrowUpRight className="project-arrow" strokeWidth={1} />
                </a>
              ) : (
                <span>
                  {p.name}
                  <ArrowUpRight className="project-arrow" strokeWidth={1} />
                </span>
              )}
            </h3>
          </div>
        </div>
        <ProjectVisual type={p.visual} />
        <div className="project-bottom">
          <p className="project-intro">{t(p.description)}</p>
          <div className="project-description">
            <p>{t(p.detail)}</p>
            {p.highlight && <p className="project-highlight">{t(p.highlight)}</p>}
            <p className="project-tech mono">{t(p.tech)}</p>
            {p.url ? (
              <a
                className="project-link mono"
                href={p.url}
                target="_blank"
                rel="noreferrer"
              >{t("EXPLORE ON GITHUB")}<ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="project-status mono">{t("CURRENTLY BUILDING")}<ArrowRight size={16} />
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
