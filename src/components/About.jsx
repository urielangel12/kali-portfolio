import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { UserRound, GraduationCap } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      id="about"
      className="scroll-mt-24 px-4 sm:px-6"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <SectionTitle>{t("about.title")}</SectionTitle>
      <div className="panel flex gap-4 p-5 sm:p-6">
        <UserRound className="mt-1 h-5 w-5 flex-shrink-0 text-cyan" />
        <div>
          <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">{t("about.body")}</p>
          <div className="mt-4 inline-flex items-center gap-2 chip">
            <GraduationCap size={13} className="text-cyan" />
            {t("about.university")}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
