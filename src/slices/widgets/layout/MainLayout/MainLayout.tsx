"use client";
import type { PropsWithChildren } from "react";
import { Body } from "@/slices/shared/ui";
import { Header } from "../partials";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <Body>
      <Header />
      {children}
    </Body>
  );
}
