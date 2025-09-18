"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Title as BaseTitle, Row } from "@/slices/shared/ui";

export const Container = styled.article`
`;

export const Header = styled(Row)`
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled(BaseTitle)`
  text-transform: uppercase;
`;

export const Content = styled.div`
  padding: 0 1rem;
`;

export const UpdatedDate = styled.div`
  font-size: ${font.size.small}px;
  color: ${color.text.sandWhite};
`;
