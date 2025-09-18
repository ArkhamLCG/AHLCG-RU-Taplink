"use client";
import styled from "@emotion/styled";
import { Body } from "@/slices/shared/ui";
import { Header as BaseHeader } from "../partials";

export const Container = styled(Body)`
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;

export const Header = styled(BaseHeader)`
  position: fixed;
  z-index: 100;
`;
