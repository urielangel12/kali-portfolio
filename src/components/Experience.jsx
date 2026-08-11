import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import experience from "../data/experience";

export default function Experience() {
  const { t, i18n } = useTranslation();
  const isEs = i18n.language?.startsWith("es");

  return (
    <section id="experience" className="scroll-mt-24 px-4 sm:px-6">
      <SectionTitle>{t("experience.title")}</SectionTitle>
      <div className="panel p-5 sm:p-6">
        <ol className="relative space-y-6 border-l border-edge pl-6">
          {experience.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-cyan bg-void shadow-glow" />
              <span className="font-mono text-xs font-bold text-cyan">{item.year}</span>
              <h3 className="mt-1 text-sm font-semibold text-ink sm:text-[15px]">
                {isEs ? item.title_es : item.title_en}
              </h3>
              <p className="font-mono text-xs text-ink-dim">{item.org}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {isEs ? item.desc_es : item.desc_en}
              </p>
            </motion.li>
          ))}
        </ol>
        <button className="mt-6 flex items-center gap-1.5 font-mono text-xs font-semibold text-cyan transition hover:text-cyan-glow">
          {t("experience.more")} <span aria-hidden>&rarr;</span>
        </button>
      </div>
    </section>
  );
}
