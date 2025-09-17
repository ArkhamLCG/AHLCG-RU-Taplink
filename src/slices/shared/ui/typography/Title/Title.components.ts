"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";

const commonStyle = css`
  font-family: var(--font-old-standard-tt);
  color: ${color.text.sandWhite};
  letter-spacing: ${font.letterSpacing.title};
`;

export const Title1 = styled.h1`
  ${commonStyle};
  margin: 2rem 0 1rem 0;
`;

export const Title2 = styled.h2`
  ${commonStyle}
`;
