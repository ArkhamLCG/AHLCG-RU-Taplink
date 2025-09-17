import {
  MarkdownPageContent,
  type MarkdownPageContentProps,
} from "@/slices/modules/markdown/entities/page/ui";
import { Container } from "@/slices/shared/ui";
import { MainLayout } from "../MainLayout";
import * as C from "./PageLayout.components";

type PageLayoutProps = MarkdownPageContentProps;

export function PageLayout({ ...props }: PageLayoutProps) {
  return (
    <MainLayout>
      <C.Container>
        <C.Background />
        <C.Content>
          <Container>
            <MarkdownPageContent {...props} />
          </Container>
        </C.Content>
      </C.Container>
    </MainLayout>
  );
}
