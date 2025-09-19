"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Col } from "../../layout";

export const Container = styled(Col)`
  gap: 1.5rem;
  text-align: center;
  align-items: center;
`;

export const Lead = styled.h1`
  color: ${color.text.sandWhite};
  letter-spacing: ${font.letterSpacing.title};
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  margin: 0;
  hyphens: auto;
  font-size: ${font.size.xl}px;
  @media (min-width: 1024px) {
    font-size: ${font.size.lead}px;
  }
`;

export const Rule = styled.img`
  max-width: 300px;
`;
