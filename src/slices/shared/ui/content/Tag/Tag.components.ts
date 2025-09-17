"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Col } from "../../layout";

export const Container = styled.div`
  display: inline-flex;
  border: 1px solid #F4F3EA;
`;

export const Corners = styled(Col)`
  
`;

const cornerStyle = css`
  width: 12px;
  height: 12px;
`;

export const LeftCorner = styled.img`
  ${cornerStyle}
`;

export const Content = styled(Col)`
  color: ${color.text.sandWhite};
  letter-spacing: ${font.letterSpacing.title};
  font-size: ${font.size.xs}px;
  white-space: nowrap;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  line-height: 1;
  padding: 0.25rem 0.25rem 0;
`;

export const RightCorner = styled.img`
  ${cornerStyle}
  transform: rotate(180deg);
`;

export const RightTopCorner = styled.img`
  ${cornerStyle}
  transform: rotate(90deg);
`;

export const RightBottomCorner = styled.img`
  ${cornerStyle}
  transform: rotate(180deg);
`;
