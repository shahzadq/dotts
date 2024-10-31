import { defineConfig } from "tsup";

export default defineConfig({
  bundle: true,
  clean: true,
  minify: true,
  dts: true,
  entry: ["src/**/*.ts", "!src/**/*.test.*"],
  format: ["cjs", "esm"],
  outDir: "dist",
});
