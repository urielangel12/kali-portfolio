import { Shield, Network, Lock, Server, Code2, Search } from "lucide-react";

// ============================================================
// EDITA AQUÍ TUS HABILIDADES.
// "titleKey" apunta a locales/es.json y en.json (arsenal.*)
// "items" son términos técnicos, normalmente iguales en ES/EN.
// ============================================================
const skillCategories = [
  {
    id: "gov",
    titleKey: "arsenal.gov",
    icon: Shield,
    items: ["NIST CSF", "ISO 27001", "ISO 27002", "ISO 27005"],
  },
  {
    id: "net",
    titleKey: "arsenal.net",
    icon: Network,
    items: ["TCP/IP", "Firewalls", "Segmentación", "VPN / TLS"],
  },
  {
    id: "iam",
    titleKey: "arsenal.iam",
    icon: Lock,
    items: ["RBAC", "MFA", "Control de acceso", "Gestión de cuentas"],
  },
  {
    id: "infra",
    titleKey: "arsenal.infra",
    icon: Server,
    items: ["Linux", "Windows", "Virtualización", "Hardening"],
  },
  {
    id: "dev",
    titleKey: "arsenal.dev",
    icon: Code2,
    items: ["React", "Node.js", "Python", "PostgreSQL"],
  },
  {
    id: "osint",
    titleKey: "arsenal.osint",
    icon: Search,
    items: ["Reconocimiento", "OSINT", "Análisis de datos", "Herramientas Kali"],
  },
];

export default skillCategories;
