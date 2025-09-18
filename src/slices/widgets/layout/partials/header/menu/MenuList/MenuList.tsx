"use client";
import { type JSX, useContext } from "react";
import { MenuContext } from "@/slices/entities/menu/lib/MenuContext";
import * as C from "./MenuList.components";

type MenuListProps = JSX.IntrinsicElements["nav"];

export function MenuList(props: MenuListProps) {
  const items = useContext(MenuContext);

  const half = Math.floor(items.length / 2);

  const left = items.slice(0, half);
  const right = items.slice(half);

  return (
    <C.Container {...props}>
      <C.MobileToggle />
      <C.Content>
        <C.LeftList>
          {left.map((item) => (
            <C.NavItem key={item.url}>
              <C.NavLink href={item.url}>{item.title}</C.NavLink>
            </C.NavItem>
          ))}
        </C.LeftList>
        <C.RightList>
          {right.map((item) => (
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
