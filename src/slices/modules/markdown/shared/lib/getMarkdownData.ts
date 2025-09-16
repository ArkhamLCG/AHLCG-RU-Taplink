import * as fs from "node:fs";
import * as path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { MarkdownData } from "../model";

const contentDirectory = path.join(process.cwd(), "content");

export async function getMarkdownData<Meta>(
  slug: string,
): Promise<MarkdownData<Meta>> {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);

  const meta = data as Meta;

  return {
    content: processedContent.toString(),
    meta,
  };
}
