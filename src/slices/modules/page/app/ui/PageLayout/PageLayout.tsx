import { PageContent, type PageContentProps } from "@modules/page/widgets/ui";
import { MainLayout } from "../../../../../widgets/layout/MainLayout";

type PageLayoutProps = PageContentProps;

export function PageLayout({ ...props }: PageLayoutProps) {
  return (
    <MainLayout>
      <PageContent {...props} />
    </MainLayout>
  );
}
