import { useTranslation } from "react-i18next";
import { MessageCircle, Mail, Menu } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import profile from "../data/profile";
import LanguageSwitch from "./LanguageSwitch";

export default function Topbar({ onMenuClick }) {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-edge bg-void/80 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="flex items-center gap-3">
        <button
          className="text-ink-muted lg:hidden"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        <div className="font-mono text-sm text-ink-muted sm:text-base">
          <span className="text-cyan">{profile.shortName}</span>
          <span className="text-ink-dim">@kali</span>
          <span className="text-ink-dim">:~$ </span>
          <span className="text-ink">{t("topbar.whoami")}</span>
          <div className="text-term-green">
            {t("topbar.answer")}
            <span className="caret" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <SocialLink href={profile.social.linkedin} icon={LinkedinIcon} label="LinkedIn" />
        <SocialLink href={profile.social.github} icon={GithubIcon} label="GitHub" />
        <SocialLink href={profile.social.whatsapp} icon={MessageCircle} label="WhatsApp" />
       <SocialLink href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}   icon={Mail}  label="Email"/>
        <LanguageSwitch />
        <span className="hidden h-2.5 w-2.5 rounded-full bg-term-green shadow-[0_0_8px_#2be08c] sm:block" />
      </div>
    </header>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group hidden flex-col items-center gap-1 sm:flex"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md border border-edge bg-panel-2/60 text-ink-muted transition group-hover:border-cyan/50 group-hover:text-cyan group-hover:shadow-glow">
        <Icon size={15} />
      </span>
      <span className="font-mono text-[10px] text-ink-dim group-hover:text-cyan/80">{label}</span>
    </a>
  );
}
