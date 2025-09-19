"use client";

import type { PropsWithChildren } from "react";
import { MenuContext } from "../../../entities/lib";
import type { MenuItem } from "../../../entities/model";

interface MenuProviderProps extends PropsWithChildren {
  items: MenuItem[];
}

export function MenuProvider({ children, items }: MenuProviderProps) {
  return <MenuContext.Provider value={items}>{children}</MenuContext.Provider>;
}
