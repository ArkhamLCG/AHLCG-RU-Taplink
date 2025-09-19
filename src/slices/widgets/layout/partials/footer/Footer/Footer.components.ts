"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Container as BaseContainer, Col, Row } from "@/slices/shared/ui";

export const Container = styled.div`
  background-image: url('/images/footer/background.avif');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    max-width: 600px;
    max-height: 440px;
    background-image: url('/images/footer/big-powder-right.avif');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    bottom: -150px;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 320px;
    max-height: 340px;
    background-image: url('/images/footer/small-powder.avif');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Rule = styled.div`
  background-image: linear-gradient(0deg, #088479 0%, #088479 100%), url('/images/footer/greenseparator.avif');
  background-blend-mode: overlay, normal;
  background-size: cover;
  height: 0.75rem;
`;

export const Logo = styled.img`
  width: 160px;
  max-width: 100%;
`;

export const MainColumn = styled(BaseContainer)`
  position: relative;
  &::after {
    content: '';
    position: absolute;
  z-index: 1;
  bottom: 0;
  left: 4rem;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 440px;
  background-image: url('/images/footer/big-powder-center.avif');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  }
`;

export const Content = styled(Row)`
  position: relative;
  z-index: 2;
  gap: 2rem;
  padding: 4rem 0;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Blockquote = styled.blockquote`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${color.text.sandWhite};
  padding: 0;
  margin: 0;
`;

export const BlockquoteText = styled.span`
  font-style: italic;
`;

export const Author = styled.span`
  font-style: normal;
`;

export const Cite = styled.cite`
  display: block;
`;

export const Column = styled(Col)`
  flex: 1;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  max-width: 14rem;

  margin: 0 auto;
  text-align: center;
  @media (min-width: 1024px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const Menu = styled.div`
`;

export const MainSocial = styled(Row)`
  gap: 1rem;
`;

export const MenuItem = styled.a`
  display: block;
  color: ${color.text.sandWhite};
  font-size: ${font.size.large}px;
`;

export const Social = styled(Row)`
  display: flex;
  gap: 0.5rem;
`;

export const SocialLink = styled.a`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${color.text.sandWhite};
  border-radius: 50%;
`;

export const SocialIcon = styled.img`
  width: 20px;
`;
