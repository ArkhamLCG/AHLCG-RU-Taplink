"use client";
import styled from "@emotion/styled";
import { Body } from "@/slices/shared/ui";
import { Footer as BaseFooter, Header as BaseHeader } from "../partials";

export const Container = styled(Body)`
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  padding-bottom: 158px;
`;

export const Header = styled(BaseHeader)`
  position: fixed;
  z-index: 100;
`;

export const Footer = styled(BaseFooter)`

`;
