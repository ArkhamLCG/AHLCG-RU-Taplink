"use client";
import styled from "@emotion/styled";
import { color, font, size } from "@/slices/shared/config";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: ${size.header.paddingTop}px;
`;

export const Description = styled.p`
  font-size: ${font.size.medium}px;
  color: ${color.text.sandWhite};
  max-width: 450px;
`;
