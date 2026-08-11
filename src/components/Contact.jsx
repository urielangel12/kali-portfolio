import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import profile from "../data/profile";

export default function Contact() {
  const { t } = useTranslation();

const handleSubmit = (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  const subject = encodeURIComponent(`Portafolio — ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

  // Abre Gmail Web directamente, sin depender del cliente de correo del sistema
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`;
  window.open(gmailUrl, "_blank", "noopener,noreferrer");
};

  return (
    <section id="contact" className="scroll-mt-24 px-4 pb-8 sm:px-6">
      <SectionTitle>{t("contact.title")}</SectionTitle>
      <div className="panel p-5 sm:p-6">
        <p className="mb-5 text-sm text-ink-muted">{t("contact.subtitle")}</p>
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <Field label={t("contact.name")} name="name" required />
          <Field label={t("contact.email")} name="email" type="email" required />
          <div className="sm:col-span-2">
            <label className="mb-1 block font-mono text-xs text-ink-dim">{t("contact.message")}</label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full rounded-md border border-edge bg-panel-2/60 px-3 py-2 text-sm text-ink outline-none transition focus:border-cyan/60 focus:shadow-glow"
            />
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-md border border-cyan/40 bg-panel-2 px-5 py-2.5 font-mono text-xs font-semibold text-cyan transition hover:shadow-glow"
            >
              
              <Send size={14} /> {t("contact.send")}
              
            </button>
            
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="mb-1 block font-mono text-xs text-ink-dim">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-edge bg-panel-2/60 px-3 py-2 text-sm text-ink outline-none transition focus:border-cyan/60 focus:shadow-glow"
      />
    </div>
  );
}
