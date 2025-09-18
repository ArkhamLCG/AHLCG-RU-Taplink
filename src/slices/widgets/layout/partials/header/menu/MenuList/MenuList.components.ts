"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Row } from "@/slices/shared/ui";
import { MenuToggleButton, SearchButton } from "../buttons";
import { MenuLink } from "../MenuLink";

export const Container = styled.nav` 
  font-size: ${font.size.medium}px;
  display: flex;
  flex: 1;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
`;

export const MobileToggle = styled(MenuToggleButton)`
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Search = styled(SearchButton)`
`;

export const Content = styled(Row)`
  flex: 1;

  align-items: center;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const listStyles = css`
  display: flex;
  flex: 1;
  gap: 1rem;
`;

export const LeftList = styled(Row)`
  ${listStyles}
`;

export const RightList = styled(Row)`
  ${listStyles}
  justify-content: flex-end;
`;

export const NavItem = styled.div`
  position: relative;
`;

export const NavLink = styled(MenuLink)`
 
  transition: color 0.2s ease;
  
  &:hover {
    color: ${color.text.white};
  }
`;
