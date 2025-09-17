"use client";
import styled from "@emotion/styled";
import { color } from "@/slices/shared/config";
import { Col } from "../Col";

export const Body = styled(Col)`
  background-color: ${color.background};
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: baseline;
  font-family: var(--font-old-standard-tt);
`;
