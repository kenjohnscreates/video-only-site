import { describe, it, expect } from "vitest";
import { execSync } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

describe("build contract", () => {
  it("build produces dist/index.html", () => {
    const root = process.cwd();
    execSync("astro build", { cwd: root, stdio: "pipe" });
    const indexPath = join(root, "dist", "index.html");
    expect(existsSync(indexPath)).toBe(true);
  });
});
