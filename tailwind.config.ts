import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./context/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Manuscript / illumination palette — dark ink ground with
        // gilded and lapis accents, vellum surface for reading cards.
        ink: {
          950: "#0E1116",
          900: "#151A21",
          800: "#1D242D",
          700: "#28313C"
        },
        vellum: {
          DEFAULT: "#F4ECD8",
          dim: "#EADFC2",
          line: "#D9C9A0"
        },
        gold: {
          DEFAULT: "#C6992F",
          soft: "#E4C878",
          deep: "#8C6A1E"
        },
        lapis: {
          DEFAULT: "#2E4C7D",
          soft: "#4A6FA5"
        },
        maroon: "#7A2E2E"
      },
      fontFamily: {
        display: ["var(--font-amiri)", "serif"],
        body: ["var(--font-newsreader)", "serif"],
        arabic: ["var(--font-noto-naskh)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"]
      },
      boxShadow: {
        folio: "0 2px 6px rgba(0,0,0,0.35), 0 18px 40px -12px rgba(0,0,0,0.55)",
        gilt: "0 0 0 1px rgba(198,153,47,0.55), 0 0 0 3px rgba(198,153,47,0.12)"
      },
      backgroundImage: {
        "grain": "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%220.035%22/></svg>')"
      }
    }
  },
  plugins: []
};

export default config;
