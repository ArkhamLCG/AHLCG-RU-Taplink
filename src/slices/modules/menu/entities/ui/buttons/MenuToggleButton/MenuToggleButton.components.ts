"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Col } from "@/slices/shared/ui";
import { MenuButton } from "../MenuButton";

export const Container = styled(MenuButton)`
`;

export const Toggle = styled(Col)`
  width: 20px;
  height: 8px;
  justify-content: space-between;
`;

const lineStyles = css`
  width: 100%;
  height: 2px;
  background-image: url("/images/icon/minus.svg");
  transition: transform 0.3s ease;
  transform-origin: center;
`;

export const TopLine = styled.div<{ $active?: boolean }>`
  ${lineStyles}
  ${({ $active }) =>
    $active &&
    css`
    transform: translateX(2px) rotate(45deg) translateY(4px);
  `}
`;

export const BottomLine = styled.div<{ $active?: boolean }>`
  ${lineStyles}
  ${({ $active }) =>
    $active &&
    css`
    transform: translateX(2px) rotate(-45deg) translateY(-4px) ;
  `}
`;

export const Text = styled.div`
  color: inherit;
  padding-top: 0.25rem;
  line-height: 1;
`;
