"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Col } from "@/slices/shared/ui";

export const Container = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: inherit;
  font-family: inherit;
  color: inherit;
  text-transform: inherit;
`;

export const Toggle = styled(Col)`
  width: 20px;
  height: 8px;
  justify-content: space-between;
`;

const lineStyles = css`
  width: 100%;
  height: 2px;
  background-image: url("/images/icon/minus.svg");
`;

export const TopLine = styled.div`
  ${lineStyles}
`;

export const BottomLine = styled.div`
  ${lineStyles};
`;

export const Text = styled.div`
  padding-top: 0.25rem;
  line-height: 1;
`;
