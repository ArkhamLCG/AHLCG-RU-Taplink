import moment from "moment";
import { identity } from "ramda";
import { getMarkdownData } from "@/slices/modules/markdown/shared/lib/getMarkdownData";
import { Markdown } from "@/slices/modules/markdown/shared/ui";
import { Tag } from "@/slices/shared/ui";
import type { ArticleMeta } from "../../model";
import * as C from "./ArticleContent.components";

export type ArticleContentProps = {
  slug: string;
};

export async function PageContent({ slug }: ArticleContentProps) {
  const { content, meta } = await getMarkdownData<ArticleMeta>(slug);
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
        <Markdown content={content} />
      </C.Content>
    </C.Container>
  );
}
