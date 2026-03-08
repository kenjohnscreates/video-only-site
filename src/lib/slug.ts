/**
 * Converts a string to a URL-safe slug (lowercase, spaces to hyphens, strip non-alphanumeric).
 */
export function slugify(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
