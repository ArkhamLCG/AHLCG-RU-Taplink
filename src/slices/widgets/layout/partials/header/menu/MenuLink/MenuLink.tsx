"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import { color } from "@/slices/shared/config";

export const MenuLink = styled(Link)`
  padding: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  color: ${color.text.sandWhite};
  text-decoration: none;
  &:hover {
    color: ${color.action.hover};
  }
`;
