import { MarkdownPageContent } from "@/slices/modules/markdown/entities/page/ui";
import { Container } from "@/slices/shared/ui";
import { MainLayout } from "../MainLayout";
import * as C from "./PageLayout.components";

type PageLayoutProps = {
  slug: string;
};

export function PageLayout({ slug }: PageLayoutProps) {
  return (
    <MainLayout>
      <C.Container>
        <C.Background />
        <C.Content>
          <Container>
            <MarkdownPageContent slug={slug} />
          </Container>
        </C.Content>
      </C.Container>
    </MainLayout>
  );
}
