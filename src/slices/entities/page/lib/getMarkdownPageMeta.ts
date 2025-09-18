import { getMarkdownData } from "../../../modules/markdown/shared/lib";
import type { MarkdownPageMeta } from "../model";

export async function getMarkdownPageMeta(slug: string) {
  const { meta } = await getMarkdownData<MarkdownPageMeta>(slug);
  return meta;
}
