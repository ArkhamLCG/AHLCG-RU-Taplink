import { getMarkdownPageMeta } from "@/slices/modules/markdown/entities/page/lib/getMarkdownPageMeta";
import { MarkdownPageContent } from "@/slices/modules/markdown/entities/page/ui";

export const generateMetadata = async () => {
  const metadata = await getMarkdownPageMeta("pages/home");
  return metadata;
};

export default async function Home() {
  return <MarkdownPageContent slug="pages/home" />;
}
