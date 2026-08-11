import { useTranslation } from "react-i18next";
import { Download, FileText } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Resume() {
  const { t } = useTranslation();
  return (
    <section id="resume" className="scroll-mt-24 px-4 sm:px-6">
      <SectionTitle>{t("resume.title")}</SectionTitle>
      <div className="panel flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-edge bg-panel-2 text-cyan">
            <FileText size={20} />
          </span>
          <div>
            <p className="text-sm font-medium text-ink">CV — Uriel Briceño</p>
            <p className="text-xs text-ink-muted">{t("resume.subtitle")}</p>
          </div>
        </div>
        {/* Coloca tu archivo CV.pdf en /public y actualiza el href */}
        <a
          href="/CV.pdf"
          download
          className="flex items-center gap-2 rounded-md border border-cyan/40 bg-panel-2 px-4 py-2 font-mono text-xs font-semibold text-cyan transition hover:shadow-glow"
        >
          <Download size={14} /> {t("resume.download")}
        </a>
      </div>
    </section>
  );
}
