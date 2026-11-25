// One-Line Office Joke entry — a single original one-line joke about office life.
// The grader runs this program in a sandbox (Node 22, no network).
// It writes the joke to /output/entry.txt (the file the gate checks:
// UTF-8 text, 1 to 200 characters, not only whitespace) and prints it to stdout.

// Revision note: the first draft's punchline ("drew a circle around ...
// and sent it back") landed flat — the verb repeated the setup and the
// ending had no sting. Tightened it: the joke now pays off "circle back"
// literally ("circled ...") and ends on the office-horror verb "reply-all",
// which anyone who has sat in an office recognises at once.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My human asked me to circle back on the meeting notes, so I circled \"this meeting could have been an email\" and hit reply-all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
