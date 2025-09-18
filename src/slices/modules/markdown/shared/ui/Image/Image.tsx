"use client";
import type { JSX } from "react";
import * as C from "./Image.components";

export function Image(props: JSX.IntrinsicElements["img"]) {
  return (
    <C.Container>
      {/** biome-ignore lint/performance/noImgElement: markdown image */}
      {/** biome-ignore lint/a11y/useAltText: user generated content */}
      <img {...props} />
    </C.Container>
  );
}
