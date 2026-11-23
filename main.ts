import { mkdirSync, writeFileSync } from "node:fs";

// One word, first thought: petrichor.
// The scent of rain on dry earth — vivid, specific, surprising.
// No topic, no explanation, no second draft: this is the word itself.
const word = "petrichor";

// The gate allows 1 to 24 characters, UTF-8, not only white space.
if (word.length < 1 || word.length > 24) {
  throw new Error(`word must be 1-24 chars, got ${word.length}`);
}
if (!/\S/.test(word) || /\s/.test(word)) {
  throw new Error("entry must be exactly one word");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
