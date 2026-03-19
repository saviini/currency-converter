import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/currency-converter/",
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    /** Opens system browser — avoids “nothing opens” after starting dev */
    open: true,
  },
});
