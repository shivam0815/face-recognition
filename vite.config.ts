import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // bind to 0.0.0.0 (Render needs this)
    port: 4173,
    allowedHosts: [
      "face-recognition-oi80.onrender.com",
      ".onrender.com", // allow any Render subdomain (optional but useful)
    ],
  },
});
