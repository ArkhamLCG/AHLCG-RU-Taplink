import { NotFoundPage } from "@/slices/pages/404/ui";

export const metadata = {
  title: "404",
  description: "404",
};

export default async function PageNotFound() {
  return <NotFoundPage />;
}
