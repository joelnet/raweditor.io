import { defineConfig } from "vite";

export default defineConfig({
  build: { target: "es2022" },
  server: { host: true, allowedHosts: true },
  preview: { host: true, allowedHosts: true },
});
