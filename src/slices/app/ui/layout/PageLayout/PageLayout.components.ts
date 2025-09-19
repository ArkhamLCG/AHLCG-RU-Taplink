"use client";
import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  padding-top: 7rem;
`;

export const Background = styled.div`
  background-image: url("/images/background/starfield.avif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 154vw;
  max-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  &::after {
    content: "";
    display: block;    
    background: linear-gradient(0deg, #0D1317 0%, rgba(13, 19, 23, 0.00) 100%);
    height: 100%;
    max-height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
`;
