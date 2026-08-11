import { useTranslation } from "react-i18next";
import { BadgeCheck } from "lucide-react";
import SectionTitle from "./SectionTitle";

// ============================================================
// EDITA AQUÍ: agrega tus certificaciones reales (nombre, entidad, año)
// ============================================================
const certifications = [
  { name: "Python basico", org: "Peru / educa", year: "2024" },
  { name: "Introduction to Cybersecurity", org: "Cisco Networking Academy", year: "2026" },
  { name: "Introduction to Networks ", org: "Cisco Networking Academy", year: "2023" },
  { name: "CCNA V7: Switching, Routing, and Wireless Essentials ", org: "Cisco Networking Academy", year: "2024" },
  { name: "Soporte Tecnico", org: "Peru / educa", year: "2024" },
  { name: "Ingles A2 MRC", org: "Universidad Tecnologica del Peru", year: "2024" },
];

export default function Certifications() {
  const { t } = useTranslation();
  return (
    <section id="certifications" className="scroll-mt-24 px-4 sm:px-6">
      <SectionTitle>{t("certifications.title")}</SectionTitle>
      <p className="mb-4 -mt-2 text-sm text-ink-muted">{t("certifications.subtitle")}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <div key={c.name} className="panel flex items-start gap-3 p-4">
            <BadgeCheck size={18} className="mt-0.5 flex-shrink-0 text-cyan" />
            <div>
              <p className="text-sm font-medium text-ink">{c.name}</p>
              <p className="font-mono text-xs text-ink-dim">
                {c.org} · {c.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
