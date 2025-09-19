"use client";
import styled from "@emotion/styled";

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

export const TopShadow = styled.div`
  background: linear-gradient(180deg, #0D1317 0%, rgba(13, 19, 23, 0.00) 100%);
  z-index: 2;
  height: 100%;
  width: 100%;
  max-height: 350px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const MainShadow = styled.div`
  background: linear-gradient(0deg, #0D1317 0%, rgba(13, 19, 23, 0.00) 100%);
  height: 100%;
  width: 100%;
  max-height: 350px;
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const BottomShadow = styled.div`
  background-image: linear-gradient(to top, #0D1317, transparent);
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40vh;
`;
