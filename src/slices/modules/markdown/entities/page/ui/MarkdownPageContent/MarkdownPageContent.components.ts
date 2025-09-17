"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Title as BaseTitle, Row } from "@/slices/shared/ui";

export const Container = styled.div`
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
  padding: 0 1rem;
`;

export const UpdatedDate = styled.div`
  font-size: ${font.size.small}px;
  color: ${color.text.sandWhite};
`;

// 896x1024

export const Markdown = styled.div`
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
`;
