"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";

export const Content = styled.div`
  color: ${color.text.sandWhite};
  font-size: ${font.size.medium}px;

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

  a {
    color: inherit;
  }
  
`;
