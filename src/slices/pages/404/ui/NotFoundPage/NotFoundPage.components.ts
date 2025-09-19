"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Title as BaseTitle, ContentBackground } from "@/slices/shared/ui";

export const Container = styled.section`
  text-align: center;
`;

export const Background = styled(ContentBackground)`
  padding: 110px 2rem 0;
  text-align: center;
`;
export const Description = styled.div`
  color: ${color.text.sandWhite};
  font-size: ${font.size.medium}px;
  margin-bottom: 1.25rem;
`;

export const Title = styled(BaseTitle)`
  text-transform: uppercase;
`;
