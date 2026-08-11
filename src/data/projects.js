import { ShieldCheck, Target, Code2 } from "lucide-react";

// ============================================================
// EDITA AQUÍ TUS PROYECTOS.
// category: "cybersecurity" | "development" | "networks" | "osint"
// ============================================================
const projects = [
  {
    id: 1,
    category: "cybersecurity",
    icon: ShieldCheck,
    title_es: "Evaluación de Ciberseguridad Industrial",
    title_en: "Industrial Cybersecurity Assessment",
    desc_es:
      "Análisis de activos, amenazas, vulnerabilidades y riesgos en un entorno industrial con acceso remoto seguro.",
    desc_en:
      "Analysis of assets, threats, vulnerabilities and risks in an industrial environment with secure remote access.",
    tags: ["NIST CSF", "ISO 27001", "ISO 27002"],
    url: "#",
  },
  {
    id: 2,
    category: "cybersecurity",
    icon: Target,
    title_es: "Matriz de Riesgos de Ciberseguridad",
    title_en: "Cybersecurity Risk Matrix",
    desc_es:
      "Identificación y priorización de riesgos relacionando vulnerabilidades, impacto, probabilidad y controles.",
    desc_en:
      "Identification and prioritization of risks relating vulnerabilities, impact, likelihood and controls.",
    tags: ["ISO 27005", "RISK MATRIX", "CONTROLS"],
    url: "#",
  },
  {
    id: 3,
    category: "development",
    icon: Code2,
    title_es: "Restaurant Management System",
    title_en: "Restaurant Management System",
    desc_es:
      "Aplicación web para operaciones, pedidos, mesas y reportes construida con arquitectura full-stack.",
    desc_en:
      "Web application for operations, orders, tables and reports built with a full-stack architecture.",
    tags: ["REACT", "NODE.JS", "POSTGRESQL"],
    url: "#",
  },
];

export default projects;
