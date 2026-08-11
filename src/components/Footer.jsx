import { useTranslation } from "react-i18next";
import { Heart } from "lucide-react";
import profile from "../data/profile";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 border-t border-edge px-4 py-5 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-2 font-mono text-[11px] text-ink-dim sm:flex-row">
        <span>
          © {year} {profile.fullName} · {t("footer.rights")}
        </span>
        <span className="flex items-center gap-1.5">
          {t("footer.theme")} <Heart size={11} className="text-cyan" />
        </span>
      </div>
    </footer>
  );
}
