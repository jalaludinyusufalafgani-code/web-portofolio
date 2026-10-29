/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0c",
        panel: "#0f1015",
        cy: "#00f2fe",
        cblue: "#2c67ed",
        cgreen: "#10b981",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
      },
      animation: {
        blink: "blink 1.05s steps(2,start) infinite",
      },
    },
  },
  plugins: [],
};
