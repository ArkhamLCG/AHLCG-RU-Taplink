import { PageContent, type PageContentProps } from "@modules/page/widgets/ui";
import { Container } from "@/slices/shared/ui";
import { MainLayout } from "../../../../../widgets/layout/MainLayout";
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
