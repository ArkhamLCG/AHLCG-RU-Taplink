"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Col } from "../Col";

export const Body = styled(Col)`
  background-color: ${color.background};
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: baseline;
  font-family: ${font.family.primary};
`;
