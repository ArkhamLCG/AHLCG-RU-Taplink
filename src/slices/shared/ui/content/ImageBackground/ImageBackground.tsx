"use client";
import type { JSX } from "react";
import * as C from "./ImageBackground.components";

type ImageBackgroundProps = JSX.IntrinsicElements["div"] & {
  src: string;
};

export function ImageBackground({ src, ...props }: ImageBackgroundProps) {
  return (
    <C.Container {...props} $src={src}>
      <C.Background />
      <C.TopShadow />
      <C.MainShadow />
      <C.BottomShadow />
    </C.Container>
  );
}
