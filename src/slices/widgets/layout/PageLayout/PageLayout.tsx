import { PageContent, type PageContentProps } from "@/slices/entities/page/ui";
import { Container } from "@/slices/shared/ui";
import { MainLayout } from "../MainLayout";
import * as C from "./PageLayout.components";

type PageLayoutProps = PageContentProps;

export function PageLayout({ ...props }: PageLayoutProps) {
  return (
    <MainLayout>
      <C.Container>
        <C.Background />
        <C.Content>
          <Container>
            <PageContent {...props} />
          </Container>
        </C.Content>
      </C.Container>
    </MainLayout>
  );
}
