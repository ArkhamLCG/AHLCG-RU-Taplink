"use client";
import styled from "@emotion/styled";
import { Menu as BaseMenu } from "../../menu";
import { HeaderDecoration } from "../HeaderDecoration";

export const Container = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  &::after {
    content:'';
    display: block;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 200px;
    top: 0;
    left: 0;
    background-image: linear-gradient(to bottom, rgb(13 19 23 / 0.95), transparent);
  }
`;

export const Decoration = styled(HeaderDecoration)`
  position: absolute;
  z-index: 1;
  top: 3.5rem;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    top: 2rem;
  }
`;

export const Menu = styled(BaseMenu)`
  position: relative;
  z-index: 2;
  padding-top: 1rem;
`;
