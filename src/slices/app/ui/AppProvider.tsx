import type { PropsWithChildren } from "react";
import type { MenuItem } from "@/slices/entities/menu/model";
import { MenuProvider } from "@/slices/entities/menu/ui";
import { EmotionProvider } from "./providers";

type AppProviderProps = PropsWithChildren & {
  menuItems: MenuItem[];
};

export function AppProvider({ children, menuItems }: AppProviderProps) {
  return (
    <MenuProvider items={menuItems}>
      <EmotionProvider>{children}</EmotionProvider>
    </MenuProvider>
  );
}
