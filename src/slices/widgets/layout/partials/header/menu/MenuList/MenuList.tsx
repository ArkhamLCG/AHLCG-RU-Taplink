"use client";
import { type JSX, useContext } from "react";
import { MenuContext } from "@/slices/entities/menu/lib";
import * as C from "./MenuList.components";

type MenuListProps = JSX.IntrinsicElements["nav"];

export function MenuList(props: MenuListProps) {
  const items = useContext(MenuContext);

  const primary = items.filter(({ active, primary }) => active && primary);
  const secondary = items.filter(({ active, primary }) => active && !primary);

  return (
    <C.Container {...props}>
      <C.MobileToggle />
      <C.Content>
        <C.LeftList>
          {primary.map((item) => (
            <C.NavItem key={item.url}>
              <C.NavLink href={item.url}>{item.title}</C.NavLink>
            </C.NavItem>
          ))}
        </C.LeftList>
        <C.RightList>
          {secondary.map((item) => (
            <C.NavItem key={item.url}>
              <C.NavLink href={item.url}>{item.title}</C.NavLink>
            </C.NavItem>
          ))}
        </C.RightList>
      </C.Content>
      <C.Search />
    </C.Container>
  );
}
