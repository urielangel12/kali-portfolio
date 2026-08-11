import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import skillCategories from "../data/skills";

export default function Arsenal() {
  const { t } = useTranslation();

  return (
    <section id="arsenal" className="scroll-mt-24 px-4 sm:px-6">
      <SectionTitle>{t("arsenal.title")}</SectionTitle>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {skillCategories.map(({ id, titleKey, icon: Icon, items }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="panel group flex flex-col items-center gap-2 p-4 text-center transition hover:border-cyan/40 hover:shadow-glow"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-edge bg-panel-2 text-cyan transition group-hover:shadow-glow">
              <Icon size={18} />
            </span>
            <h3 className="font-mono text-[11px] font-bold tracking-wide text-ink">{t(titleKey)}</h3>
            <ul className="mt-1 space-y-1 text-[11px] text-ink-muted">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
