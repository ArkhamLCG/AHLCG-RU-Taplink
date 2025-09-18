"use client";
import type { JSX } from "react";
import * as C from "./Menu.components";

type MenuProps = JSX.IntrinsicElements["div"];
export function Menu(props: MenuProps) {
  return (
    <C.Container {...props}>
      <C.MenuContainer>
        <C.Content>
          <C.Button />
          <C.Search />
        </C.Content>
      </C.MenuContainer>
    </C.Container>
  );
}
