"use client";
import { Body, LinkButton } from "@/slices/shared/ui";
import { Header } from "@/slices/widgets/layout/partials";
import * as C from "./NotFoundPage.components";

export function NotFoundPage() {
  return (
    <Body>
      <Header />
      <C.Background src="/images/background/lost.avif">
        <C.Content>
          <C.Title>Вы потерялись во времени и пространстве</C.Title>
          <C.Description>
            Страница, которую вы ищете,
            <br />
            могла быть удалена, перемещена
            <br />
            или никогда не существовала.
          </C.Description>
          <LinkButton href="/">На главную</LinkButton>
        </C.Content>
      </C.Background>
    </Body>
  );
}
