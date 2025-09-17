"use client";
import type { JSX } from "react";
import * as C from "./SearchButton.components";

type SearchButtonProps = JSX.IntrinsicElements["button"];

export function SearchButton(props: SearchButtonProps) {
  return (
    <C.Container {...props}>
      <C.Text>Поиск</C.Text>
      <C.Icon src="/images/icon/search.svg" />
    </C.Container>
  );
}
