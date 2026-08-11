import { useTranslation } from "react-i18next";
import { FlaskConical } from "lucide-react";
import SectionTitle from "./SectionTitle";

// ============================================================
// EDITA AQUÍ: agrega tus laboratorios/prácticas (HackTheBox,
// TryHackMe, laboratorios de la maestría, CTFs, etc.)
// ============================================================
const labs = [
  { name: "TryHackMe — Pre Security Path", tag: "En progreso" },
  { name: "Laboratorio de Pentesting con Kali Linux", tag: "Práctico" },
  { name: "Hardening de servidores Linux", tag: "Práctico" },
];

export default function Labs() {
  const { t } = useTranslation();
  return (
    <section id="labs" className="scroll-mt-24 px-4 sm:px-6">
      <SectionTitle>{t("labs.title")}</SectionTitle>
      <p className="mb-4 -mt-2 text-sm text-ink-muted">{t("labs.subtitle")}</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab) => (
          <div key={lab.name} className="panel flex items-center gap-3 p-4">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-edge bg-panel-2 text-cyan">
              <FlaskConical size={16} />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">{lab.name}</p>
              <span className="chip mt-1 inline-block">{lab.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
