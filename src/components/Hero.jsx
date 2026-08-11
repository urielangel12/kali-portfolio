import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import profile from "../data/profile";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="scroll-mt-24 px-4 pt-6 sm:px-6">
      <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="panel relative overflow-hidden"
        >
          <span className="absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-cyan/50" />
          <span className="absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-cyan/50" />
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[11px] sm:aspect-auto sm:h-full">
            <img
              src={profile.photo}
              alt={profile.fullName}
              className="h-full w-full object-cover object-top grayscale-[15%]"
              onError={(e) => {
                e.currentTarget.src =
                  "data:image/svg+xml;utf8," +
                  encodeURIComponent(
                    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='500'><rect width='100%' height='100%' fill='%230f1b2c'/><text x='50%' y='50%' fill='%236b7f95' font-family='monospace' font-size='16' text-anchor='middle'>foto.jpg</text></svg>`
                  );
              }}
            />
          </div>
        </motion.div>

        {/* Info panel */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="panel relative flex flex-col justify-between overflow-hidden p-5 sm:p-8"
        >
          <NetworkMap />

          <div className="relative z-10">
            <h1 className="font-mono text-2xl font-extrabold uppercase leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
              {profile.fullName}
            </h1>
            <p className="mt-3 font-mono text-sm font-semibold uppercase tracking-wide text-cyan sm:text-base">
              {t("hero.role")}
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-[15px]">
              {t("hero.desc")}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ink-muted sm:text-sm">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-cyan" /> {t("hero.location")}
              </span>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-1.5 hover:text-cyan"
>
  <Mail size={14} className="text-cyan" /> {profile.email}
</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-cyan">
                <Phone size={14} className="text-cyan" /> {profile.phone}
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-6 rounded-lg border border-edge bg-panel-2/60 p-3 font-mono text-xs sm:text-sm">
            <span className="text-ink-dim">{profile.shortName}@kali:~$ </span>
            <span className="text-ink">{t("hero.mission_cmd")}</span>
            <div className="mt-1 text-term-green">{t("hero.mission_text")}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function NetworkMap() {
  const dots = [];
  const rows = 14;
  const cols = 24;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const seed = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
      const frac = seed - Math.floor(seed);
      if (frac > 0.6) {
        dots.push({ x: c * 16 + 4, y: r * 16 + 4, o: 0.15 + frac * 0.4 });
      }
    }
  }
  return (
    <svg
      viewBox="0 0 400 240"
      className="pointer-events-none absolute -right-6 -top-4 z-0 hidden h-[260px] w-[420px] opacity-70 sm:block"
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="1.6" fill="#38bdf8" opacity={d.o} />
      ))}
      <path
        d="M40 180 C 90 120, 150 90, 200 110 C 240 60, 300 40, 360 70"
        stroke="#38bdf8"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}
