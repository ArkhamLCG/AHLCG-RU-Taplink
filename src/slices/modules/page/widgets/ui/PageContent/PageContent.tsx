import { Markdown } from "@modules/markdown/features/ui";
import { getMarkdownData } from "@modules/markdown/shared/lib/getMarkdownData";
import { LeadScreen } from "@/slices/entities/lead-screen";
import { Container } from "@/slices/shared/ui";
import type { MarkdownPageMeta } from "../../../entities/model";
import * as C from "./PageContent.components";

export type PageContentProps = {
  slug: string;
};

export async function PageContent({ slug }: PageContentProps) {
  const { content, meta } = await getMarkdownData<MarkdownPageMeta>(slug);
  const { image, title, description } = meta;

  const hasImage = Boolean(image);

  return (
    <C.Container>
      {image ? <C.Background src={image} /> : <C.DefaultBackground />}
      {/* <C.Background src={meta.image} /> */}
      {/* {meta.image && <C.Shadows />} */}
      <Container>
        <C.Content>
          {hasImage ? (
            <LeadScreen title={title}>{description}</LeadScreen>
          ) : (
            <C.Title>{title}</C.Title>
          )}
          <Markdown content={content} />
        </C.Content>
      </Container>
    </C.Container>
  );
}
