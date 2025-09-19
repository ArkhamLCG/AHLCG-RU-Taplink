import { Markdown } from "@/slices/modules/markdown/features/ui";
import { getMarkdownData } from "@/slices/modules/markdown/shared/lib/getMarkdownData";
import type { MarkdownPageMeta } from "../../model";
import * as C from "./PageContent.components";

export type PageContentProps = {
  slug: string;
  showTitle?: boolean;
};

export async function PageContent({
  slug,
  showTitle = true,
}: PageContentProps) {
  const { content, meta } = await getMarkdownData<MarkdownPageMeta>(slug);

  return (
    <C.Container>
      <C.Content>
        {showTitle && <C.Title>{meta.title}</C.Title>}
        <Markdown content={content} />
      </C.Content>
    </C.Container>
  );
}
