import { getMarkdownData } from "@/slices/modules/markdown/shared/lib";
import type { MarkdownPageMeta } from "../../model";

type MarkdownPageContentProps = {
  slug: string;
};

export async function MarkdownPageContent({ slug }: MarkdownPageContentProps) {
  const { content, meta } = await getMarkdownData<MarkdownPageMeta>(slug);
  return (
    <>
      <h1>{meta.title}</h1>
      {/** biome-ignore lint/security/noDangerouslySetInnerHtml: markdown content */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}
