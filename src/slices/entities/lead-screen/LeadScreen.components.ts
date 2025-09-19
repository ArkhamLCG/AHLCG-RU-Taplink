"use client";
import styled from "@emotion/styled";
import { color, font, size } from "@/slices/shared/config";
import { Col } from "@/slices/shared/ui";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
 
  box-sizing: border-box;
  min-height: 100vh;
  padding-top: ${size.header.paddingTop}px;
`;

export const Description = styled.p`
  font-size: ${font.size.medium}px;
  color: ${color.text.sandWhite};
  max-width: 450px;
`;

export const Content = styled(Col)`
  flex: 1;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
`;

export const Overlay = styled.div`
  filter: blur(100px);
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const Shadow1 = styled.div`
  background: linear-gradient(0deg, rgba(13, 19, 23, 0.8) 0%, rgba(13, 19, 23, 0.00) 100%);
  height: 100%;
  max-height: 350px;
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
`;

export const Shadow2 = styled.div`
  background: linear-gradient(to top, rgba(13, 19, 23, 0.6), transparent);
  height: 40vh;
  width: 100%;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
`;
