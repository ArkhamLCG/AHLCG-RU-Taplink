import { getMarkdownPageMeta } from "@modules/page/entities/lib";
import { PageLayout } from "@/slices/app/ui/layout/PageLayout";

export const generateMetadata = async () => {
  const metadata = await getMarkdownPageMeta("pages/home");
  return metadata;
};

export default async function Home() {
  return <PageLayout slug="pages/home" showTitle={false} />;
}
