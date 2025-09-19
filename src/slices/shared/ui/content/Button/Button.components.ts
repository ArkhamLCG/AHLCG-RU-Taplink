"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import { color, font } from "@/slices/shared/config";
import { Col, Row } from "../../layout";

export const FormButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

export const LinkButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
`;

export const Container = styled(Row)`

`;

export const Content = styled(Col)`
  border: 1px solid ${color.sand};
  border-width: 1px 0;
  padding: 0 1.25rem;
  align-items: center;
  justify-content: center;
  color: inherit;
  text-transform: uppercase;
  color: ${color.text.sandWhite};
  font-size: ${font.size.small}px;
  font-family: ${font.family.secondary};
  font-weight: ${font.weight.bold};
`;

export const Left = styled.img`

`;

export const Right = styled.img`
  transform: rotate(180deg);
`;
