import { createContext } from "react";
import type { MenuItem } from "../model";

export const MenuContext = createContext([] as MenuItem[]);
