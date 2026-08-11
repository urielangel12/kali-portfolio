import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import profile from "../data/profile";

export default function TerminalWidget() {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(0);

  const lines = [
    { cmd: t("terminal.cmd_whoami"), out: [profile.shortName] },
    { cmd: t("terminal.cmd_mission"), out: [t("hero.mission_text")] },
    { cmd: t("terminal.cmd_status"), out: [t("terminal.line1"), t("terminal.line2"), t("terminal.line3")] },
  ];

  useEffect(() => {
    setStep(0);
    const interval = setInterval(() => {
      setStep((s) => (s < lines.length ? s + 1 : s));
    }, 900);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <section className="scroll-mt-24 px-4 sm:px-6">
      <div className="panel overflow-hidden">
        <div className="flex items-center gap-2 border-b border-edge bg-panel-2/60 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-term-red" />
          <span className="h-2.5 w-2.5 rounded-full bg-term-yellow" />
          <span className="h-2.5 w-2.5 rounded-full bg-term-green" />
          <span className="ml-2 font-mono text-[11px] tracking-widest text-ink-dim">{t("terminal.title")}</span>
        </div>
        <div className="min-h-[180px] space-y-2 p-4 font-mono text-xs leading-relaxed sm:text-sm">
          {lines.slice(0, step).map((line, i) => (
            <div key={i}>
              <div>
                <span className="text-ink-dim">{profile.shortName}@kali:~$ </span>
                <span className="text-ink">{line.cmd}</span>
              </div>
              {line.out.map((o, j) => (
                <div key={j} className="text-term-green">
                  {o}
                </div>
              ))}
            </div>
          ))}
          <div>
            <span className="text-ink-dim">{profile.shortName}@kali:~$ </span>
            <span className="caret" />
          </div>
        </div>
      </div>
    </section>
  );
}
