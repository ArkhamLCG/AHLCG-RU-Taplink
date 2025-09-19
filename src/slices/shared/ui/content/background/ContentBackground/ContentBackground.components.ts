"use client";
import styled from "@emotion/styled";
import { Col } from "../../../layout";

export const Container = styled(Col)<{ $src: string }>`
  justify-content: center;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  min-height: 100vh;
  &::before {
    content: "";
    display: block;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
`;
