import { PageLayout } from "@modules/page/app/ui/PageLayout";
import { getMarkdownPageMeta } from "@modules/page/entities/lib";

export const generateMetadata = async () => {
  const metadata = await getMarkdownPageMeta("pages/home");
  return metadata;
};

export default async function Home() {
  return <PageLayout slug="pages/home" />;
}
