"use client";
import type { JSX } from "react";
import * as C from "./LeadTitle.components";

type LeadTitleProps = JSX.IntrinsicElements["h1"] & {
  underline?: boolean;
};

export function LeadTitle({ underline, ...props }: LeadTitleProps) {
  return (
    <C.Container>
      {underline && <C.Rule src="/images/decoration/underline.png" />}
      <C.Lead {...props} />
    </C.Container>
  );
}
