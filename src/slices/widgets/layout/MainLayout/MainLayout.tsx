"use client";
import type { PropsWithChildren } from "react";
import { Header } from "../partials";
import * as C from "./MainLayout.components";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <C.Container>
      <Header />
      {children}
    </C.Container>
  );
}
