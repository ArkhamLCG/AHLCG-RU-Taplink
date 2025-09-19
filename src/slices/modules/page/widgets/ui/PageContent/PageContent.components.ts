"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Title as BaseTitle, LeadTitle, Row } from "@/slices/shared/ui";
import { ImageBackground } from "@/slices/shared/ui/content";

export const Container = styled.div`
  position: relative;
`;

const backgroundStyle = css`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;  
`;

export const DefaultBackground = styled.div`

  ${backgroundStyle};
  background-image: url("/images/background/starfield.avif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
 
  height: 154vw;
  max-height: 100%;
  &::before {
    content: "";
    display: block;    
    background: linear-gradient(0deg, rgba(13, 19, 23, 0.8) 0%, rgba(13, 19, 23, 0.00) 100%);
    height: 100%;
    max-height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
`;

export const Background = styled(ImageBackground)`
  ${backgroundStyle}
`;

export const FirstScreen = styled.div`
  position: relative;
`;

export const Lead = styled(LeadTitle)`
`;

export const Header = styled(Row)`
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled(BaseTitle)`
  text-transform: uppercase;
`;

export const Content = styled.div`
  position: relative;
  padding: 0 1rem;
  z-index: 2;
`;

export const UpdatedDate = styled.div`
  font-size: ${font.size.small}px;
  color: ${color.text.sandWhite};
`;
