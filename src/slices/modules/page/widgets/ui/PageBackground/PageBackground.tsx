"use client";
import type { JSX } from "react";
import * as C from "./PageBackground.components";

type PageBackgroundProps = JSX.IntrinsicElements["div"] & {
  src: string;
};

export function PageBackground({ src, ...props }: PageBackgroundProps) {
  return (
    <C.Container {...props} $src={src}>
      <C.Background />
      <C.TopShadow />
      <C.MainShadow />
      <C.BottomShadow />
    </C.Container>
  );
}
