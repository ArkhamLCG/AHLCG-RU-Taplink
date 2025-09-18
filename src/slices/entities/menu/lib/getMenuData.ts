import type { MenuItem } from "@/slices/entities/menu/model";
import { getMarkdownList } from "@/slices/modules/markdown/shared/lib/getMarkdownList";

export async function getMenuData() {
  const data = await getMarkdownList<MenuItem>({
    slug: "content/menu",
    map: (data) => {
      return {
        title: data.title,
        url: data.url,
        order: data.order || 0,
        active: data.active !== false,
        external: data.external || false,
        primary: data.primary || false,
      } as MenuItem;
    },
  });

  return data.filter((item) => item.active).sort((a, b) => a.order - b.order);
}
