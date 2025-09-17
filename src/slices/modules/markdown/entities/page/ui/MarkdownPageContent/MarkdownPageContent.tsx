import moment from "moment";
import { identity } from "ramda";
import { getMarkdownData } from "@/slices/modules/markdown/shared/lib";
import { Tag } from "@/slices/shared/ui";
import type { MarkdownPageMeta } from "../../model";
import * as C from "./MarkdownPageContent.components";

type MarkdownPageContentProps = {
  slug: string;
};

export async function MarkdownPageContent({ slug }: MarkdownPageContentProps) {
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
        <C.Title>{meta.title}</C.Title>
        {/** biome-ignore lint/security/noDangerouslySetInnerHtml: markdown content */}
        <C.Markdown dangerouslySetInnerHTML={{ __html: content }} />
      </C.Content>
    </C.Container>
  );
}
