import { MarkdownPageContent } from "@/slices/modules/markdown/entities/page/ui";
import { Container } from "@/slices/shared/ui";
import { MainLayout } from "../MainLayout";

type PageLayoutProps = {
  slug: string;
};

export function PageLayout({ slug }: PageLayoutProps) {
  return (
    <MainLayout>
      <Container>
        <MarkdownPageContent slug={slug} />
      </Container>
    </MainLayout>
  );
}
