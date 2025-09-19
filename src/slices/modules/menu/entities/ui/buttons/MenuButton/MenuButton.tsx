"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";

export const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-family: inherit;
  color: inherit;
  font-size: ${font.size.small}px;
  text-transform: uppercase;
  &:hover {
    color: ${color.action.hover};
  }
`;
