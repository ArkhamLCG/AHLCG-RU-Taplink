"use client";
import type { JSX } from "react";
import * as C from "./Title.components";

type TitleSize = 1 | 2;

type TitleProps = JSX.IntrinsicElements["h1"] & {
  size?: TitleSize;
};

const componentMap: Record<TitleSize, typeof C.Title1> = {
  1: C.Title1,
  2: C.Title2,
};

export function Title({ size = 1, ...props }: TitleProps) {
  const Component = componentMap[size];
  return <Component {...props} />;
}
