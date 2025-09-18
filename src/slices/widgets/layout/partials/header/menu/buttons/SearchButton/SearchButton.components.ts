"use client";
import styled from "@emotion/styled";
import { MenuButton } from "../MenuButton";

export const Container = styled(MenuButton)`
`;

export const Text = styled.div`
  color: inherit;
  padding-top: 0.25rem;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Icon = styled.img`
  flex: 0;
  aspect-ratio: 1;
  width: 20px;
`;
