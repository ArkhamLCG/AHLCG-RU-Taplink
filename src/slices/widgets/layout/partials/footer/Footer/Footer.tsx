"use client";
import { MenuContext } from "@modules/menu/entities/lib";
import { identity } from "ramda";
import { useContext } from "react";
import * as C from "./Footer.components";

export function Footer() {
  const items = useContext(MenuContext);

  const data = items.filter(({ url }) => url !== "/");

  return (
    <C.Container>
      <C.Rule />
      <C.MainColumn>
        <C.Content>
          <C.Column>
            <C.Logo src="/images/logo.svg" alt="Arkham Horror" />
            <C.Blockquote>
              <C.BlockquoteText>
                «Не мёртво то, что вовеки прибудет, и со странной эрой даже
                смерть уйдёт.»
              </C.BlockquoteText>
              <C.Cite>
                – <C.Author>Г.Ф. Лавкрафт</C.Author>— Зов Ктулху
              </C.Cite>
            </C.Blockquote>
          </C.Column>
          <C.Column>
            <C.Menu>
              {data.map((item, index) => (
                <C.MenuItem key={identity(index)} href={item.url}>
                  {item.title}
                </C.MenuItem>
              ))}
            </C.Menu>
          </C.Column>
          <C.Column>
            <C.MainSocial>
              <C.MenuItem
                href="https://t.me/arkhamhorrorlcg_ru_chat"
                target="_blank"
              >
                Чат
              </C.MenuItem>
              <C.MenuItem
                href="https://t.me/arkhamhorrorlcg_ru"
                target="_blank"
              >
                Канал
              </C.MenuItem>
            </C.MainSocial>

            <C.Social>
              <C.SocialLink
                href="https://t.me/arkhamhorrorlcg_ru_chat"
                target="_blank"
              >
                <C.SocialIcon src="/images/icon/telegram.svg" alt="Telegram" />
              </C.SocialLink>
              <C.SocialLink
                href="https://www.youtube.com/@ArkhamHorrorRuCommunity"
                target="_blank"
              >
                <C.SocialIcon src="/images/icon/youtube.svg" alt="Youtube" />
              </C.SocialLink>
              <C.SocialLink
                href="https://vk.com/arkham_cardgame"
                target="_blank"
              >
                <C.SocialIcon src="/images/icon/vk.svg" alt="VK" />
              </C.SocialLink>
            </C.Social>
          </C.Column>
        </C.Content>
      </C.MainColumn>
    </C.Container>
  );
}
