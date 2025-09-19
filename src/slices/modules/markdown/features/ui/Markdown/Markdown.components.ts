"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";

export const Content = styled.div`
  color: ${color.text.sandWhite};
  font-size: ${font.size.medium}px;
  
  h1, h2, h3, h4, h5, h6 {
    hyphens: auto;
  }

  h2, h3 {
    font-weight: 500;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  ul li::before {
    content: "";
    background-image: url("/images/icon/bullet.svg");
    height: 1em;
    width: 0.75em;
    position: relative;
    top: -0.1em;
    display: inline-block;
    margin-right: 0.25em;
    vertical-align: middle;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top left;
  }

  img {
    max-width: 100%;
  }

  p:has(img) {
    position: relative;
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
  }

  a {
    color: inherit;
  }
  
`;
