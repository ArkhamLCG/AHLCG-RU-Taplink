import { MenuProvider } from "@modules/menu/app/ui";
import type { MenuItem } from "@modules/menu/entities/model";
import type { PropsWithChildren } from "react";
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
