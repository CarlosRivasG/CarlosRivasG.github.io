import { useLanguage } from '../i18n';
import Reveal from "./Reveal";
export default function AIPhilosophy() {
  const { t } = useLanguage();
  return (
    <div className="ai-philosophy shell">
      <p className="mono ai-label">{t("HUMAN JUDGMENT. AUGMENTED WORKFLOW.")}</p>
      <div className="ai-content">
        <Reveal>
          <h3>{t("AI DOESN’T REPLACE")}<br />
            <span>{t("ENGINEERING JUDGMENT.")}</span>
          </h3>
        </Reveal>
        <div>
          <p>{t("I use AI throughout the product development workflow — research, exploration, implementation, debugging and iteration.")}</p>
          <p>{t("The goal is not to generate more code.")}</p>
          <p className="ai-goal">{t("The goal is to make better decisions and ship better products faster.")}</p>
        </div>
      </div>
    </div>
  );
}
