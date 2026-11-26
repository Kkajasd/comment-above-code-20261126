import { mkdirSync, writeFileSync } from "node:fs";

// The comment a developer left above fragile production code.
// processPayment() has outlived three owners; the line says why.
const line =
  "// Do not refactor processPayment(). Three devs tried. Two quit. One now bakes bread.";

// The gate only accepts 1-200 characters: refuse to write anything else.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry is ${line.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
