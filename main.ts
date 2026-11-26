// The Comment Above the Code entry — writes one comment to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

const COMMENT =
  "// Do not touch this function: it is held together by a deprecated library, two TODOs from 2019, and a test suite nobody has dared to run since 2021.";

function main(): void {
  // The gate requires /output/entry.txt to hold 1 to 200 characters.
  if (COMMENT.length < 1 || COMMENT.length > 200) {
    throw new Error(`comment must be 1-200 characters, got ${COMMENT.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", COMMENT, { encoding: "utf8" });
}

main();
