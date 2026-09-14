import { useLanguage } from '../i18n';
import ProjectItem from "./ProjectItem";
import Reveal from "./Reveal";
const projects = [
  {
    name: "ÓRBITA",
    category: "B2B PRODUCT / CLIENT OPERATIONS",
    description:
      "A private workspace for technology consultancies and their clients.",
    detail:
      "Replacing fragmented WhatsApp, email and phone communication with structured incidents, ownership, status visibility and history.",
    tech: "Next.js / TypeScript / Supabase / PostgreSQL / RLS / Docker",
    highlight:
      "Multi-tenant isolation enforced at the database level through PostgreSQL Row Level Security.",
    url: "https://github.com/CarlosRivasG/Orbita",
    visual: "orbita",
  },
  {
    name: "SISMÓGRAFO ANDINO",
    category: "REAL-TIME DATA PRODUCT",
    description: "Making seismic activity visible, in real time.",
    detail:
      "A monitoring product focused on Venezuela and Colombia, combining live USGS data, tectonic visualization and aftershock modeling.",
    tech: "React / Vite / Canvas API / USGS API / Data Visualization",
    url: "https://github.com/CarlosRivasG/sismografo-andino",
    visual: "seismic",
  },
  {
    name: "SUBTRACK AI",
    category: "PERSONAL FINANCE / AI",
    description: "A clearer picture of your recurring expenses.",
    detail:
      "Subscription management designed to help users understand future charges and spending patterns, with AI-assisted insights.",
    tech: "Flutter / NestJS / PostgreSQL / AI Insights",
    url: "https://github.com/CarlosRivasG/SubTrackAi2",
    visual: "subtrack",
  },
  {
    name: "KITCHEN OS",
    category: "VERTICAL SAAS / RESTAURANT OPERATIONS",
    description: "An operating system for the rhythm of a kitchen.",
    detail:
      "Designed around mise en place, stock, recipes, kitchen stations and daily operational visibility.",
    tech: "PRIVATE PRODUCT / IN DEVELOPMENT",
    visual: "kitchen",
  },
];
export default function SelectedWork() {
  const { t } = useLanguage();
  return (
    <section id="work" className="work shell">
      <div className="section-top">
        <h2 className="section-label">{t("01 — Selected work")}</h2>
        <p>{t("Selected products and experiments built around real problems.")}</p>
      </div>
      <Reveal>
        <p className="work-heading">{t("Ideas into")}<br />
          <span>{t("working things.")}</span>
        </p>
      </Reveal>
      <div className="project-list">
        {projects.map((p, i) => (
          <ProjectItem key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
