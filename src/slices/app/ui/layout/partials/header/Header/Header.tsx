"use client";
import type { JSX } from "react";
import * as C from "./Header.components";

type HeaderProps = JSX.IntrinsicElements["div"];

export function Header(props: HeaderProps) {
  return (
    <C.Container {...props}>
      <C.Menu />
      <C.Decoration />
    </C.Container>
  );
}
