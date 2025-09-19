"use client";
import { MenuContext } from "@modules/menu/entities/lib";
import { type JSX, useContext, useState } from "react";
import * as C from "./MenuList.components";

type MenuListProps = JSX.IntrinsicElements["nav"];

export function MenuList(props: MenuListProps) {
  const items = useContext(MenuContext);

  const primary = items.filter(({ primary }) => primary);
  const secondary = items.filter(({ primary }) => !primary);

  const [open, setOpen] = useState(false);

  return (
    <C.Container {...props}>
      <C.MobileToggle active={open} onClick={() => setOpen(!open)} />
      <C.Content $open={open}>
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
