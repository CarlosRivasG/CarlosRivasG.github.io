import { useLanguage } from '../i18n';
import Reveal from "./Reveal";
const steps = [
  ["UNDERSTAND", "Problem / Users / Constraints"],
  ["DEFINE", "Scope / Architecture / Trade-offs"],
  ["BUILD", "Frontend / Backend / Infrastructure"],
  ["SHIP", "Validate / Measure / Iterate"],
];
export default function Process() {
  const { t } = useLanguage();
  return (
    <div className="process">
      <h3 className="mono">{t("HOW I WORK")}</h3>
      {steps.map(([title, items], i) => (
        <Reveal key={title}>
          <div className="process-row">
            <span className="mono">0{i + 1}</span>
            <p>{t(title)}</p>
            <span className="process-items">{t(items)}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

