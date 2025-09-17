"use client";
import type { JSX } from "react";
import { Container } from "@/slices/shared/ui";
import * as C from "./Menu.components";

type MenuProps = JSX.IntrinsicElements["div"];
export function Menu(props: MenuProps) {
  return (
    <C.Container {...props}>
      <Container>
        <C.Content>
          <C.Button />
          <C.Search />
        </C.Content>
      </Container>
    </C.Container>
  );
}
