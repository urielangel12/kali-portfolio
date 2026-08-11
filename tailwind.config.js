/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#070b12",
        panel: "#0c1420",
        "panel-2": "#0f1b2c",
        edge: "#1c2c40",
        cyan: {
          glow: "#3fd0ff",
          DEFAULT: "#38bdf8",
        },
        term: {
          green: "#2be08c",
          red: "#ff5f56",
          yellow: "#ffbd2e",
        },
        ink: {
          DEFAULT: "#dbe6f0",
          muted: "#6b7f95",
          dim: "#455467",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(63,208,255,0.15), 0 0 24px -8px rgba(63,208,255,0.35)",
        "glow-lg": "0 0 0 1px rgba(63,208,255,0.2), 0 8px 40px -12px rgba(63,208,255,0.45)",
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
