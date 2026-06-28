import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        navy: "#07163D",
        "deep-blue": "#0F2C8C",
        electric: "#1F4FFF",
        accent: "#285CFF",
        "soft-white": "#F5F7FA",
        "muted-gray": "#9AA4B2",
        surface: "#0A1128",
        card: "#101B3C",
        border: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-jakarta)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "var(--font-jakarta)", "sans-serif"],
      },
      fontSize: {
        hero: ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "800" }],
        section: ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        subhead: ["28px", { lineHeight: "1.3", fontWeight: "600" }],
      },
      spacing: {
        "section": "120px",
        "section-md": "80px",
        "section-sm": "60px",
      },
      borderRadius: {
        xl: "20px",
        "2xl": "24px",
      },
      boxShadow: {
        glow: "0 0 40px rgba(31,79,255,0.4)",
        "glow-sm": "0 0 20px rgba(31,79,255,0.25)",
        "card-hover": "0 20px 60px -15px rgba(31,79,255,0.45)",
        premium: "0 10px 30px -10px rgba(7,22,61,0.8)",
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 0%, rgba(31,79,255,0.15), transparent 60%)",
        "blue-gradient": "linear-gradient(135deg, #0F2C8C 0%, #1F4FFF 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        "gradient-x": "gradient-x 6s ease infinite",
      },
    },
  },
  plugins: [],
};

export default config;
