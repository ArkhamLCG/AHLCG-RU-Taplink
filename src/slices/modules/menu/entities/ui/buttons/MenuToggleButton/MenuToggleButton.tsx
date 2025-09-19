"use client";
import type { JSX } from "react";
import * as C from "./MenuToggleButton.components";

type MenuToggleButtonProps = JSX.IntrinsicElements["button"] & {
  active?: boolean;
};

export function MenuToggleButton({
  active = false,
  ...props
}: MenuToggleButtonProps) {
  return (
    <C.Container {...props}>
      <C.Toggle>
        <C.TopLine $active={active} />
        <C.BottomLine $active={active} />
      </C.Toggle>
      <C.Text>Меню</C.Text>
    </C.Container>
  );
}
