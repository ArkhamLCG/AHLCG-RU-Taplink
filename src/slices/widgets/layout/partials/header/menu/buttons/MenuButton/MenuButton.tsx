"use client";
import type { JSX } from "react";
import * as C from "./MenuButton.components";

type MenuButtonProps = JSX.IntrinsicElements["button"] & {
  open?: boolean;
};

export function MenuButton({ open = false, ...props }: MenuButtonProps) {
  return (
    <C.Container {...props}>
      <C.Toggle>
        <C.TopLine />
        <C.BottomLine />
      </C.Toggle>
      <C.Text>Меню</C.Text>
    </C.Container>
  );
}
