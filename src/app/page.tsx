import { getMarkdownPageMeta } from "@/slices/modules/markdown/entities/page/lib";
import { PageLayout } from "@/slices/widgets/layout/PageLayout";

export const generateMetadata = async () => {
  const metadata = await getMarkdownPageMeta("pages/home");
  return metadata;
};

export default async function Home() {
  return <PageLayout slug="pages/home" showTitle={false} />;
}
