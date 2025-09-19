"use client";
import type { JSX } from "react";
import * as C from "./LeadTitle.components";

type LeadTitleProps = JSX.IntrinsicElements["h1"];

export function LeadTitle(props: LeadTitleProps) {
  return (
    <C.Container>
      <C.Rule src="/images/decoration/underline.png" />
      <C.Lead {...props} />
    </C.Container>
  );
}
