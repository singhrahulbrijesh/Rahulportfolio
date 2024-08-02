import { defineConfig } from "vite";

export default defineConfig({
  base: "/Rahulportfolio/", // Set the base path to the repo name
  build: {
    minify: "terser",
  },
});
