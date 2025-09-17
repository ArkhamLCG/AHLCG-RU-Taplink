"use client";
import styled from "@emotion/styled";
import { HeaderDecoration } from "../HeaderDecoration";

export const Container = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
`;

export const Decoration = styled(HeaderDecoration)`
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  @media (min-width: 768px) {
    top: 2rem;
  }
`;
