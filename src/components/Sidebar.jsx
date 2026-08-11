import { useTranslation } from "react-i18next";
import {
  Home,
  User,
  ShieldHalf,
  Briefcase,
  FolderGit2,
  FlaskConical,
  BadgeCheck,
  FileText,
  Mail,
  Settings,
  Power,
  TerminalSquare,
  X,
} from "lucide-react";
import profile from "../data/profile";

const NAV_ITEMS = [
  { id: "home", icon: Home, key: "nav.home" },
  { id: "about", icon: User, key: "nav.about" },
  { id: "arsenal", icon: ShieldHalf, key: "nav.arsenal" },
  { id: "experience", icon: Briefcase, key: "nav.experience" },
  { id: "projects", icon: FolderGit2, key: "nav.projects" },
  { id: "labs", icon: FlaskConical, key: "nav.labs" },
  { id: "certifications", icon: BadgeCheck, key: "nav.certifications" },
  { id: "resume", icon: FileText, key: "nav.resume" },
  { id: "contact", icon: Mail, key: "nav.contact" },
];

export default function Sidebar({ active, onNavigate, open, onClose }) {
  const { t } = useTranslation();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen w-[270px] flex-col border-r border-edge bg-void/95 px-4 py-5 transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 100 100" className="h-9 w-9 text-cyan drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]">
              <path
                d="M10 55 C 25 30, 45 25, 55 35 C 65 20, 85 15, 95 25 C 80 28, 70 35, 68 45 C 78 42, 88 45, 92 55 C 78 52, 68 58, 62 68 C 55 58, 42 55, 30 62 C 38 50, 30 42, 10 55 Z"
                fill="currentColor"
              />
            </svg>
            <div className="leading-tight">
              <div className="font-mono text-lg font-bold tracking-wide text-ink">KALI</div>
              <div className="-mt-1 font-mono text-[10px] tracking-[0.3em] text-cyan/70">LINUX</div>
            </div>
          </div>
          <button className="text-ink-muted lg:hidden" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>

        <div className="mb-3 font-mono text-xs text-term-green">
          {profile.shortName}@kali:~$
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 overflow-y-auto pr-1">
          {NAV_ITEMS.map(({ id, icon: Icon, key }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-mono text-sm transition ${
                  isActive
                    ? "border border-cyan/40 bg-panel-2 text-cyan shadow-glow"
                    : "border border-transparent text-ink-muted hover:border-edge hover:bg-panel-2/50 hover:text-ink"
                }`}
              >
                <Icon size={16} className={isActive ? "text-cyan" : "text-ink-dim"} />
                <span>
                  <span className="text-cyan/70">{isActive ? ">_ " : ""}</span>
                  {t(key)}
                </span>
              </button>
            );
          })}
        </nav>

        {/* System info */}
        <div className="mt-4 rounded-lg border border-edge bg-panel-2/40 p-3 font-mono text-[11px] text-ink-muted">
          <div className="mb-2 flex items-center gap-2 text-ink-dim">
            <TerminalSquare size={13} />
            <span className="tracking-widest">{t("system.title")}</span>
          </div>
          <dl className="space-y-1">
            <Row label={t("system.user")} value={profile.shortName} />
            <Row label={t("system.os")} value={profile.system.os} />
            <Row label={t("system.kernel")} value={profile.system.kernel} />
            
            <Row label={t("system.shell")} value={profile.system.shell} />
            <Row
              label={t("system.status")}
              value={
                <span className="flex items-center gap-1.5 text-term-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-term-green shadow-[0_0_6px_#2be08c]" />
                  {t("system.online")}
                </span>
              }
            />
          </dl>
          <div className="mt-3 flex items-center justify-between border-t border-edge pt-3">
            <div className="flex gap-2 text-ink-dim">
              <IconDot />
              <IconDot />
            </div>
            <div className="flex gap-2 text-ink-dim">
              <Settings size={14} className="cursor-pointer transition hover:text-cyan" />
              <Power size={14} className="cursor-pointer transition hover:text-term-red" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-ink-dim">{label}</dt>
      <dd className="text-ink-muted">{value}</dd>
    </div>
  );
}

function IconDot() {
  return <span className="h-2 w-2 rounded-full border border-edge" />;
}
