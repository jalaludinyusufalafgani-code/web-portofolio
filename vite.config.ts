import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" → assets pakai path relatif: aman di GitHub Pages subfolder & Netlify
export default defineConfig({
  base: "./",
  plugins: [react()],
});
