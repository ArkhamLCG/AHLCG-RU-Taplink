import moment from "moment";
import { identity } from "ramda";
import { getMarkdownData } from "@/slices/modules/markdown/shared/lib";
import { Markdown } from "@/slices/modules/markdown/shared/ui";
import { Tag } from "@/slices/shared/ui";
import type { MarkdownPageMeta } from "../../model";
import * as C from "./MarkdownPageContent.components";

export type MarkdownPageContentProps = {
  slug: string;
  showTitle?: boolean;
};

export async function MarkdownPageContent({
  slug,
  showTitle = true,
}: MarkdownPageContentProps) {
  const { content, meta } = await getMarkdownData<MarkdownPageMeta>(slug);
  const { tags } = meta;

  const date = moment(meta.date).format("DD.MM.YYYY");

  return (
    <C.Container>
      <C.Content>
        <C.Header>
          {tags.map((tag, index) => (
            <Tag key={identity(index)}>{tag}</Tag>
          ))}
          <C.UpdatedDate>{date}</C.UpdatedDate>
        </C.Header>
        {showTitle && <C.Title>{meta.title}</C.Title>}
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: markdown content */}
        <Markdown dangerouslySetInnerHTML={{ __html: content }} />
      </C.Content>
    </C.Container>
  );
}
