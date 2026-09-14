import { createContext, useContext, useEffect, useState } from 'react';

export const spanish = {
  'Home':'Inicio', 'Work':'Proyectos', 'About':'Sobre mí', 'Experience':'Experiencia', 'Contact':'Contacto',
  'Skip to content':'Saltar al contenido', 'Carlos Rivas, home':'Carlos Rivas, inicio', 'Main navigation':'Navegación principal', 'Mobile navigation':'Navegación móvil', 'Back to top':'Volver al inicio',
  'Switch to dark mode':'Cambiar a modo oscuro', 'Switch to light mode':'Cambiar a modo claro', 'CLOSE −':'CERRAR −', 'MENU +':'MENÚ +', 'VIEW':'VER',
  'INDEPENDENT MIND.':'MENTE INDEPENDIENTE.', 'PRODUCT-DRIVEN ENGINEERING.':'INGENIERÍA CON VISIÓN DE PRODUCTO.', 'PORTFOLIO — 2026':'PORTAFOLIO — 2026',
  'PRODUCT ENGINEER,':'INGENIERO DE PRODUCTO,', 'SOFTWARE ENGINEER':'INGENIERO DE SOFTWARE', '& AI-NATIVE BUILDER.':'Y CREADOR CON IA.',
  'REMOTE / LATAM':'REMOTO / LATAM', 'SANTIAGO, CHILE · REMOTE / LATAM':'SANTIAGO, CHILE · REMOTO / LATAM',
  'I turn problems into products —':'Transformo problemas en productos —', 'from idea to production.':'de la idea a producción.', 'SCROLL TO EXPLORE':'EXPLORA EL PORTAFOLIO', 'AVAILABLE FOR REMOTE / HYBRID':'DISPONIBLE EN REMOTO / HÍBRIDO',
  '01 — Selected work':'01 — Proyectos destacados', 'Selected products and experiments built around real problems.':'Productos y experimentos creados para resolver problemas reales.', 'Ideas into':'Ideas que se vuelven', 'working things.':'productos reales.',
  'B2B PRODUCT / CLIENT OPERATIONS':'PRODUCTO B2B / GESTIÓN DE CLIENTES',
  'A private workspace for technology consultancies and their clients.':'Un espacio privado de trabajo para consultoras tecnológicas y sus clientes.',
  'Replacing fragmented WhatsApp, email and phone communication with structured incidents, ownership, status visibility and history.':'Reemplaza la comunicación dispersa por WhatsApp, correo y teléfono con incidencias estructuradas, responsables, estados visibles e historial.',
  'Multi-tenant isolation enforced at the database level through PostgreSQL Row Level Security.':'Aislamiento entre organizaciones aplicado directamente en la base de datos mediante Row Level Security de PostgreSQL.',
  'REAL-TIME DATA PRODUCT':'PRODUCTO DE DATOS EN TIEMPO REAL', 'Making seismic activity visible, in real time.':'La actividad sísmica, visible en tiempo real.',
  'A monitoring product focused on Venezuela and Colombia, combining live USGS data, tectonic visualization and aftershock modeling.':'Un producto de monitoreo enfocado en Venezuela y Colombia que combina datos en vivo de USGS, visualización tectónica y modelado de réplicas.',
  'PERSONAL FINANCE / AI':'FINANZAS PERSONALES / IA', 'A clearer picture of your recurring expenses.':'Una visión más clara de tus gastos recurrentes.',
  'Subscription management designed to help users understand future charges and spending patterns, with AI-assisted insights.':'Gestión de suscripciones para entender los próximos cobros y patrones de gasto, con análisis asistido por IA.',
  'VERTICAL SAAS / RESTAURANT OPERATIONS':'SAAS VERTICAL / OPERACIÓN DE RESTAURANTES', 'An operating system for the rhythm of a kitchen.':'Un sistema operativo para el ritmo de una cocina.',
  'Designed around mise en place, stock, recipes, kitchen stations and daily operational visibility.':'Diseñado en torno a la mise en place, el inventario, las recetas, las estaciones de cocina y la visibilidad de la operación diaria.',
  'PRIVATE PRODUCT / IN DEVELOPMENT':'PRODUCTO PRIVADO / EN DESARROLLO', 'EXPLORE ON GITHUB':'VER EN GITHUB', 'CURRENTLY BUILDING':'EN DESARROLLO',
  'ONE WORKSPACE. EVERY PERSPECTIVE.':'UN ESPACIO. TODAS LAS PERSPECTIVAS.', 'CLIENT ↔ CONSULTANCY':'CLIENTE ↔ CONSULTORA', 'SIGNAL / STRUCTURE / UNDERSTANDING':'SEÑAL / ESTRUCTURA / COMPRENSIÓN',
  'RECURRING DOESN’T HAVE TO MEAN INVISIBLE.':'LO RECURRENTE TAMBIÉN DEBE SER VISIBLE.', 'EXPENSES → PATTERNS → INSIGHTS':'GASTOS → PATRONES → ANÁLISIS', 'FROM PREPARATION TO SERVICE.':'DE LA PREPARACIÓN AL SERVICIO.',
  'PREP':'PREPARACIÓN', 'STATION':'ESTACIÓN', 'SERVICE':'SERVICIO', 'A SYSTEM FOR DAILY OPERATIONS':'UN SISTEMA PARA LA OPERACIÓN DIARIA',
  '02 — About':'02 — Sobre mí', 'I care about what gets built':'Me importa lo que se construye', 'before I care about how much':'antes que la cantidad de', 'code gets written.':'código que se escribe.',
  'ENGINEER BY PRACTICE.':'INGENIERO POR OFICIO.', 'BUILDER BY NATURE.':'CREADOR POR NATURALEZA.',
  'I’m Carlos Rivas, a software engineer focused on building products end-to-end.':'Soy Carlos Rivas, ingeniero de software enfocado en construir productos de principio a fin.',
  'My work sits between product thinking, backend engineering, full-stack development and AI-assisted workflows.':'Mi trabajo combina visión de producto, ingeniería backend, desarrollo full stack y flujos de trabajo asistidos por IA.',
  'I enjoy turning ambiguous problems into clear systems: understanding the problem, defining the smallest useful product, choosing the architecture and taking it into production.':'Disfruto transformar problemas ambiguos en sistemas claros: entender el problema, definir el producto mínimo útil, elegir la arquitectura y llevarlo a producción.',
  'CODE IS PART OF THE JOB.':'EL CÓDIGO ES PARTE DEL TRABAJO.', 'UNDERSTANDING':'ENTENDER', 'WHAT TO BUILD':'QUÉ CONSTRUIR', 'IS THE CRAFT.':'ES EL OFICIO.',
  'HOW I WORK':'CÓMO TRABAJO', 'UNDERSTAND':'ENTENDER', 'DEFINE':'DEFINIR', 'BUILD':'CONSTRUIR', 'SHIP':'LANZAR', 'Problem / Users / Constraints':'Problema / Usuarios / Restricciones', 'Scope / Architecture / Trade-offs':'Alcance / Arquitectura / Decisiones', 'Frontend / Backend / Infrastructure':'Frontend / Backend / Infraestructura', 'Validate / Measure / Iterate':'Validar / Medir / Iterar',
  '03 — Experience':'03 — Experiencia', 'Product thinking.':'Visión de producto.', 'Production experience.':'Experiencia en producción.', 'Built in the real world.':'Experiencia en el mundo real.',
  'FULL STACK SOFTWARE ENGINEER':'INGENIERO DE SOFTWARE FULL STACK', 'BACKEND SOFTWARE ENGINEER':'INGENIERO DE SOFTWARE BACKEND',
  'Full-stack development for an industrial management platform.':'Desarrollo full stack para una plataforma de gestión industrial.',
  'Additional backend experience with Java and Spring Boot.':'Experiencia adicional en backend con Java y Spring Boot.',
  'Backend development for platforms supporting Jumbo, Santa Isabel, SPID and Paris.':'Desarrollo backend para plataformas que dan soporte a Jumbo, Santa Isabel, SPID y Paris.',
  'HUMAN JUDGMENT. AUGMENTED WORKFLOW.':'CRITERIO HUMANO. TRABAJO POTENCIADO.', 'AI DOESN’T REPLACE':'LA IA NO REEMPLAZA', 'ENGINEERING JUDGMENT.':'EL CRITERIO TÉCNICO.',
  'I use AI throughout the product development workflow — research, exploration, implementation, debugging and iteration.':'Uso IA durante todo el desarrollo de producto: investigación, exploración, implementación, depuración e iteración.',
  'The goal is not to generate more code.':'El objetivo no es generar más código.', 'The goal is to make better decisions and ship better products faster.':'El objetivo es tomar mejores decisiones y entregar mejores productos más rápido.',
  '04 — Contact':'04 — Contacto', 'REMOTE / HYBRID · CHILE / LATAM':'REMOTO / HÍBRIDO · CHILE / LATAM', 'LET’S BUILD':'CONSTRUYAMOS', 'SOMETHING.':'ALGO JUNTOS.',
  'Have a product, role or problem worth solving?':'¿Tienes un producto, una oportunidad o un problema que resolver?', 'GET IN TOUCH':'CONVERSEMOS',
  'React / Vite / Canvas API / USGS API / Data Visualization':'React / Vite / Canvas API / USGS API / Visualización de datos',
  'Flutter / NestJS / PostgreSQL / AI Insights':'Flutter / NestJS / PostgreSQL / Análisis con IA',
  'NestJS / TypeScript / GraphQL / PostgreSQL / Kafka / Docker / DataLoader / Scheduled processes':'NestJS / TypeScript / GraphQL / PostgreSQL / Kafka / Docker / DataLoader / Procesos programados'
};
const LanguageContext = createContext(null);
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try { return localStorage.getItem('portfolio-language') === 'es' ? 'es' : 'en'; } catch { return 'en'; }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem('portfolio-language', language); } catch { /* Selection works even when storage is blocked. */ }
    document.title = language === 'es' ? 'Carlos Rivas — Ingeniero de producto' : 'Carlos Rivas — Product Engineer';
  }, [language]);
  const t = (text) => language === 'es' ? (spanish[text] ?? text) : text;
  return <LanguageContext.Provider value={{language, setLanguage, t}}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
