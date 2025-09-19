"use client";
import type { JSX } from "react";
import { LeadTitle } from "@/slices/shared/ui";
import * as C from "./LeadScreen.components";

type LeadScreenProps = JSX.IntrinsicElements["section"] & {
  title: string;
};

export function LeadScreen({ title, children, ...props }: LeadScreenProps) {
  return (
    <C.Container {...props}>
      <LeadTitle>{title}</LeadTitle>
      <C.Description>{children}</C.Description>
    </C.Container>
  );
}
