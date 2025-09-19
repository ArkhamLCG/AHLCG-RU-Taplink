"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { size } from "@/slices/shared/config";

export const Container = styled.div<{ $src: string }>`
  position: relative;
  background-position: top;
  background-size: cover;

  background-image: url(${({ $src }) => $src});

  min-height: 100vh;
`;

export const Background = styled.div`
  background-image: url("/images/background/investigators.avif");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: 1;
  mix-blend-mode: overlay;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const shadowStyle = css`
  max-height: 200px;
  @media (min-width: ${size.breakpoints.mobile}px) {

    max-height: 350px;
  }
`;

export const TopShadow = styled.div`
  background: linear-gradient(180deg, rgba(13, 19, 23, 0.8) 0%, rgba(13, 19, 23, 0.00) 100%);
  z-index: 2;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  ${shadowStyle}
`;

export const MainShadow = styled.div`
  background: linear-gradient(0deg, rgba(13, 19, 23, 0.8) 0%, rgba(13, 19, 23, 0.00) 100%);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  ${shadowStyle}
`;

export const BottomShadow = styled.div`
  background-image: linear-gradient(to top, rgba(13, 19, 23, 0.6), transparent);
  position: absolute;
  z-index: 2;
  bottom: -2rem;
  left: 0;
  right: 0;
  width: 100%;
  height: 40vh;
`;
