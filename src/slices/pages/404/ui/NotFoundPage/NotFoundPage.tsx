"use client";
import { LinkButton } from "@/slices/shared/ui";
import { MainLayout } from "@/slices/widgets/layout/MainLayout";
import * as C from "./NotFoundPage.components";

export function NotFoundPage() {
  return (
    <MainLayout>
      <C.Background src="/images/background/lost.avif">
        <C.Title size={1}>Вы потерялись во времени и пространстве</C.Title>
        <C.Description>
          Страница, которую вы ищете, могла быть удалена, перемещена или никогда
          не существовала.
        </C.Description>
        <LinkButton href="/">На главную</LinkButton>
      </C.Background>
    </MainLayout>
  );
}
