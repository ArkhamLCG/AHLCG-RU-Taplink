"use client";
import type { JSX } from "react";
import * as C from "./MenuToggleButton.components";

type MenuToggleButtonProps = JSX.IntrinsicElements["button"] & {
  open?: boolean;
};

export function MenuToggleButton({
  open = false,
  ...props
}: MenuToggleButtonProps) {
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
