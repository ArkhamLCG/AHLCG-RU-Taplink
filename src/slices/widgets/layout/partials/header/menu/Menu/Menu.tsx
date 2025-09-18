"use client";
import type { JSX } from "react";
import * as C from "./Menu.components";

export type MenuProps = JSX.IntrinsicElements["div"];

export function Menu(props: MenuProps) {
  return (
    <C.Container {...props}>
      <C.MenuContainer>
        <C.List />
      </C.MenuContainer>
    </C.Container>
  );
}
