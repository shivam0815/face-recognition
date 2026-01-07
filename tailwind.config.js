/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
      },

      /* 🔥 DARK PREMIUM COLOR SYSTEM */
      colors: {
        brand: {
          50: "#f8fafc",
          100: "#e5e7eb",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1e293b",
          800: "#0f172a",
          900: "#020617",
        },

        accent: {
          amber: "#f59e0b",
          bronze: "#b45309",
          graphite: "#111827",
        },
      },

      /* 🎬 CINEMATIC GRADIENTS */
      backgroundImage: {
        /* Hero / banner */
        "hero-gradient":
          "radial-gradient(1100px circle at 20% 10%, rgba(2,6,23,0.85), transparent 55%), radial-gradient(900px circle at 85% 35%, rgba(120,53,15,0.35), transparent 60%), linear-gradient(to bottom, #020617, #020617)",

        /* Section backgrounds */
        "section-gradient":
          "radial-gradient(900px circle at 30% 20%, rgba(15,23,42,0.6), transparent 55%), linear-gradient(to bottom, #020617, #0f172a)",

        /* Card / glass feel */
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      },

      /* ✨ SHADOWS */
      boxShadow: {
        glow:
          "0 0 0 1px rgba(255,255,255,0.05), 0 25px 80px rgba(0,0,0,0.65)",
        card:
          "0 10px 40px rgba(0,0,0,0.55)",
      },
    },
  },
  plugins: [],
};
