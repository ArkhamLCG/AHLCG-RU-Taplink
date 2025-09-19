"use client";
import type { LinkProps } from "next/link";
import type { JSX, PropsWithChildren } from "react";
import * as C from "./Button.components";

type ButtonProps = JSX.IntrinsicElements["div"];

export function Button({ children, ...props }: ButtonProps) {
  return (
    <C.Container {...props}>
      <C.Left src="/images/decoration/button.svg" />
      <C.Content>{children}</C.Content>
      <C.Right src="/images/decoration/button.svg" />
    </C.Container>
  );
}

export function LinkButton({
  children,
  ...props
}: LinkProps & PropsWithChildren) {
  return (
    <C.LinkButton {...props}>
      <Button>{children}</Button>
    </C.LinkButton>
  );
}

export function FormButton({
  children,
  ...props
}: JSX.IntrinsicElements["button"]) {
  return (
    <C.FormButton {...props}>
      <Button>{children}</Button>
    </C.FormButton>
  );
}
