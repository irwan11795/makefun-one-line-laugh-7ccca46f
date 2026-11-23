import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
const LINE = "Our Wi-Fi only drops during the important part of the call — it clearly has a better sense of drama than I do.";
const dirs = [process.env.MAKEFUN_OUTPUT_DIR, "/output", "output", join(tmpdir(), "output")].filter(Boolean) as string[];
for (const d of dirs) {
  try { mkdirSync(d, { recursive: true }); writeFileSync(join(d, "entry.txt"), LINE, "utf8"); break; } catch {}
}
