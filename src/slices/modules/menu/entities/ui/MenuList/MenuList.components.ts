"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color, font, size } from "@/slices/shared/config";
import { Breakpoint } from "@/slices/shared/lib";
import { Row } from "@/slices/shared/ui";
import { MenuToggleButton, SearchButton } from "../buttons";
import { MenuLink } from "../MenuLink";

export const Container = styled.nav` 
  position: relative;
  font-size: ${font.size.medium}px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const MobileToggle = styled(MenuToggleButton)`
  position: relative;
  z-index: 3;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Search = styled(SearchButton)`
  position: relative;
  z-index: 3;
`;

export const Content = styled(Row)<{ $open: boolean }>`
  position: fixed;
  top: -100vh;
  flex-direction: column;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: ${color.background};
  padding-top: 7rem;
  box-sizing: border-box;
  transition: top 0.3s ease;
  ${({ $open }) =>
    $open &&
    css`
    top: 0px;
  `}
  @media ${Breakpoint.gte(size.breakpoints.tablet)} {
    position: static;
    background-color: transparent;
    height: auto;
    flex-direction: row;
    padding-top: 0;
    flex: 1;

    align-items: center;
    justify-content: space-between;
  }
`;

const listStyles = css`
  display: flex;
  flex-direction: column;
  font-size: ${font.size.xl}px;
  letter-spacing: -0.1rem;
  font-variant: small-caps;

  @media ${Breakpoint.gte(size.breakpoints.tablet)} {
    flex: 1;
    flex-direction: row;
    font-size: inherit;
    font-variant: normal;
    letter-spacing: inherit;
    gap: 1rem;
  }
`;

export const LeftList = styled.nav`
  display: flex;
  ${listStyles}
`;

export const RightList = styled(LeftList)`
  justify-content: flex-end;
`;

export const NavItem = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: "";
    background-image: url("/images/header/line.svg");
    background-repeat: repeat-x;
    background-position: center bottom;
    display: block;
    position: absolute;
    bottom: 0;
    left: 1rem;
    right: 1rem;
    height: 1px;
  }
  @media ${Breakpoint.gte(size.breakpoints.tablet)} {
    width: auto;
    &::after {
      display: none;
    }
  }
`;

export const NavLink = styled(MenuLink)`
  transition: color 0.2s ease;
`;
