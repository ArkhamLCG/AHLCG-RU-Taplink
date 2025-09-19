"use client";
import { MenuContext } from "@modules/menu/entities/lib";
import { type JSX, useContext, useState } from "react";
import * as C from "./MenuList.components";

type MenuListProps = JSX.IntrinsicElements["nav"];

export function MenuList(props: MenuListProps) {
  const items = useContext(MenuContext);

  const primary = items.filter(({ primary }) => primary);
  const secondary = items.filter(({ primary }) => !primary);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  return (
    <C.Container {...props}>
      {searchVisible && (
        <C.SearchPopup onClose={() => setSearchVisible(!searchVisible)} />
      )}
      <C.MobileToggle
        active={menuVisible}
        onClick={() => setMenuVisible(!menuVisible)}
      />
      <C.Content $open={menuVisible}>
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
      <C.Search onClick={() => setSearchVisible(true)} />
    </C.Container>
  );
}
