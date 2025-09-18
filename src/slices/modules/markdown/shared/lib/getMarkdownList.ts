import * as fs from "node:fs";
import * as path from "node:path";
import matter from "gray-matter";

type Options<T> = {
  slug: string;
  map?: (data: Record<string, unknown>) => T;
};

const defaultMap = <T>(f: Record<string, unknown>) => f as T;

export function getMarkdownList<T>({ slug, map = defaultMap }: Options<T>) {
  const dir = path.join(process.cwd(), slug);
  const filenames = fs.readdirSync(dir);
  const menuItems = filenames
    .filter((name) => name.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return map(data);
    });

  return menuItems;
}
