"use client";
import styled from "@emotion/styled";
import { color } from "@/slices/shared/config";
import { Row } from "@/slices/shared/ui";
import { MenuList } from "../MenuList";

export const Container = styled.div`
  color: ${color.text.sandWhite};
`;

export const MenuContainer = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 1280px) {
    max-width: 1280px;
  }
`;

export const Content = styled(Row)`
  justify-content: space-between;
  align-items: center;
`;

export const List = styled(MenuList)`

`;
