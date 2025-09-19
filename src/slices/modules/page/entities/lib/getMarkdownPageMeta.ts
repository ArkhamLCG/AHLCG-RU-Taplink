import { getMarkdownData } from "../../../markdown/shared/lib/getMarkdownData";
import type { MarkdownPageMeta } from "../model";

export async function getMarkdownPageMeta(slug: string) {
  const { meta } = await getMarkdownData<MarkdownPageMeta>(slug);
  return meta;
}
