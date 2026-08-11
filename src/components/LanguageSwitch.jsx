import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export default function LanguageSwitch({ compact = false }) {
  const { i18n } = useTranslation();
  const isEs = i18n.language?.startsWith("es");

  const toggle = () => {
    i18n.changeLanguage(isEs ? "en" : "es");
  };

  return (
    <button
      onClick={toggle}
      className="group flex items-center gap-2 rounded-md border border-edge bg-panel-2/60 px-3 py-1.5 text-xs font-mono text-ink-muted transition hover:border-cyan/50 hover:text-cyan"
      aria-label="Switch language"
      title={isEs ? "Switch to English" : "Cambiar a Español"}
    >
      <Languages size={14} className="text-cyan/80" />
      {!compact && (
        <span className="flex items-center gap-1">
          <span className={isEs ? "text-cyan" : ""}>ES</span>
          <span className="text-edge">/</span>
          <span className={!isEs ? "text-cyan" : ""}>EN</span>
        </span>
      )}
    </button>
  );
}
