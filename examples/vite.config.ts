import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { copyFile, mkdir } from "node:fs/promises";
export default defineConfig({
  base: "./",
  plugins: [
    tailwindcss(),
    {
      name: "preserve-file-compatible-script",
      async closeBundle() {
        await mkdir(resolve(import.meta.dirname, "dist/vanilla"), {
          recursive: true,
        });
        await copyFile(
          resolve(import.meta.dirname, "vanilla/script.js"),
          resolve(import.meta.dirname, "dist/vanilla/script.js"),
        );
      },
    },
  ],
  build: {
    rollupOptions: {
      input: {
        gallery: resolve(import.meta.dirname, "index.html"),
        lab: resolve(import.meta.dirname, "lab.html"),
        northstar: resolve(import.meta.dirname, "vanilla/index.html"),
        commerce: resolve(import.meta.dirname, "commerce/index.html"),
        developer: resolve(import.meta.dirname, "developer/index.html"),
        research: resolve(import.meta.dirname, "research/index.html"),
        cinematic: resolve(import.meta.dirname, "cinematic/index.html"),
        saas: resolve(import.meta.dirname, "saas/index.html"),
        lumaDirected: resolve(import.meta.dirname, "luma-directed/index.html"),
      },
    },
  },
});
