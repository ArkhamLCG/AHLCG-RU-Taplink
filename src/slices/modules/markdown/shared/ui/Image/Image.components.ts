"use client";
import styled from "@emotion/styled";

export const Container = styled.span`
  position: relative;
  display: inline-block;
  min-height: 100px;
  &::before {
    content: "";
    background-image: url("/images/border/thumbnail.png");
    background-size: 100% 100%;
    display: block;
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -10px;
    right: -10px;
    z-index: 1;
  }
`;
