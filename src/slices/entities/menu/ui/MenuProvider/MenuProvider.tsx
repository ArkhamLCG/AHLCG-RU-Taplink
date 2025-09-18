"use client";

import type { PropsWithChildren } from "react";
import { MenuContext } from "../../lib/client";
import type { MenuItem } from "../../model";

interface MenuProviderProps extends PropsWithChildren {
  items: MenuItem[];
}

export function MenuProvider({ children, items }: MenuProviderProps) {
  return <MenuContext.Provider value={items}>{children}</MenuContext.Provider>;
}
