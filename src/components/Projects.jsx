import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import projects from "../data/projects";

const FILTERS = ["all", "cybersecurity", "development", "networks", "osint"];

export default function Projects() {
  const { t, i18n } = useTranslation();
  const isEs = i18n.language?.startsWith("es");
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-24 px-4 sm:px-6">
      <SectionTitle
        extra={
          <div className="hidden gap-1 sm:flex">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-md px-2.5 py-1 font-mono text-[11px] transition ${
                  filter === f
                    ? "border border-cyan/40 bg-panel-2 text-cyan"
                    : "border border-transparent text-ink-dim hover:text-ink-muted"
                }`}
              >
                {f === "all" ? t("projects.all") : f}
              </button>
            ))}
          </div>
        }
      >
        {t("projects.title")}
      </SectionTitle>

      <div className="mb-4 flex gap-1 overflow-x-auto pb-1 sm:hidden">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex-shrink-0 rounded-md px-2.5 py-1 font-mono text-[11px] ${
              filter === f ? "border border-cyan/40 bg-panel-2 text-cyan" : "border border-edge text-ink-dim"
            }`}
          >
            {f === "all" ? t("projects.all") : f}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map(({ id, icon: Icon, category, tags, url, ...p }) => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="panel flex flex-col p-5 transition hover:border-cyan/40 hover:shadow-glow"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="chip uppercase text-cyan/80">{category}</span>
                <span className="h-2 w-2 rounded-full bg-term-green" />
              </div>
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-edge bg-panel-2 text-cyan">
                <Icon size={16} />
              </span>
              <h3 className="mb-1.5 text-sm font-semibold text-ink sm:text-[15px]">
                {isEs ? p.title_es : p.title_en}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-ink-muted">
                {isEs ? p.desc_es : p.desc_en}
              </p>
              <div className="mb-4 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={url}
                className="flex items-center gap-1.5 font-mono text-xs font-semibold text-cyan transition hover:text-cyan-glow"
              >
                {t("projects.view_case")} <span aria-hidden>&rarr;</span>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-6 text-center">
        <button className="font-mono text-xs font-semibold text-cyan transition hover:text-cyan-glow">
          {t("projects.view_all")} <span aria-hidden>&rarr;</span>
        </button>
      </div>
    </section>
  );
}
