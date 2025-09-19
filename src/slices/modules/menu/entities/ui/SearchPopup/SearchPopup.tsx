"use client";
import type { JSX } from "react";
import * as C from "./SearchPopup.components";

type SearchPopupProps = JSX.IntrinsicElements["div"] & {
  onClose: () => void;
};

export function SearchPopup({ onClose, ...props }: SearchPopupProps) {
  return (
    <C.Container {...props}>
      <C.Close onClick={onClose} />
      <C.Content>
        <C.Title>Поиск (сломан упырями)</C.Title>
        <C.Form action="/search">
          <C.Input
            type="text"
            name="s"
            placeholder="Введите текст..."
            required
          />
          <C.SearchButton type="submit" />
        </C.Form>
      </C.Content>
    </C.Container>
  );
}
