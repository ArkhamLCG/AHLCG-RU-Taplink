"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Row } from "@/slices/shared/ui";
import { MenuButton, SearchButton } from "../buttons";

export const Container = styled.div`
  font-size: ${font.size.small}px;
  color: ${color.text.sandWhite};
  text-transform: uppercase;
`;

export const MenuContainer = styled.div`
  margin: 0 auto;
  
  @media (max-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Content = styled(Row)`
  justify-content: space-between;
`;

export const Button = styled(MenuButton)`

`;

export const Search = styled(SearchButton)`

`;
