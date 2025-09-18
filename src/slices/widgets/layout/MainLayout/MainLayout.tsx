"use client";
import type { PropsWithChildren } from "react";
import * as C from "./MainLayout.components";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <C.Container>
      <C.Header />
      <C.Content>{children}</C.Content>
      <C.Footer />
    </C.Container>
  );
}
