"use client";
import { reject } from "ramda";
import { type JSX, useContext } from "react";
import { MenuContext } from "@/slices/entities/menu/lib";
import type { MenuItem } from "@/slices/entities/menu/model";
import * as C from "./MenuList.components";

type MenuListProps = JSX.IntrinsicElements["nav"];

const isPrimary = ({ primary }: MenuItem) => primary;

export function MenuList(props: MenuListProps) {
  const items = useContext(MenuContext);

  const left = items.filter(isPrimary);
  const right = reject(isPrimary, items);

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
