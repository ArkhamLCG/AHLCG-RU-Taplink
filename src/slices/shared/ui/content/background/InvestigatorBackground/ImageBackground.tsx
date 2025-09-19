"use client";
import type { JSX } from "react";
import * as C from "./ImageBackground.components";

type InvestigatorBackgroundProps = JSX.IntrinsicElements["div"] & {
  src: string;
};

export function InvestigatorBackground({
  src,
  ...props
}: InvestigatorBackgroundProps) {
  return (
    <C.Container {...props} $src={src}>
      <C.Background />
      <C.TopShadow />
      <C.MainShadow />
      <C.BottomShadow />
    </C.Container>
  );
}
