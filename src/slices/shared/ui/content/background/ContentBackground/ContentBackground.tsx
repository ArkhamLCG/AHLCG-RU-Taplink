"use client";
import type { JSX } from "react";
import * as C from "./ContentBackground.components";

type ContentBackgroundProps = JSX.IntrinsicElements["div"] & {
  src: string;
};

export function ContentBackground({
  src,
  children,
  ...props
}: ContentBackgroundProps) {
  return (
    <C.Container {...props} $src={src}>
      <C.Content>{children}</C.Content>
    </C.Container>
  );
}
