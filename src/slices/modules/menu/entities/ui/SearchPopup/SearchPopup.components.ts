"use client";
import styled from "@emotion/styled";
import { color, font } from "@/slices/shared/config";
import { Col } from "@/slices/shared/ui";

export const Container = styled.div`
  position: fixed;
  background-color: black;
`;

export const Content = styled(Col)`
  padding: 5rem 1rem 0;
  gap: 2rem;
`;

export const Title = styled.div`
  
`;

export const Form = styled.form`
  position: relative;

  border-bottom: 1px solid ${color.text.sandWhite};
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-image: url("/images/icon/search.svg");
  background-repeat: no-repeat;
  background-position: right center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
`;

export const Input = styled.input`
  background-color: transparent;
  padding-left: 2rem;
  border: none;
  padding: 0.5rem 0;
  font-size: ${font.size.xxl}px;
  font-family: inherit;
  outline: none;
  caret-color: ${color.text.white};
  color: ${color.text.sandWhite};
  &::placeholder {
    color: ${color.text.sandWhite};
    opacity: 0.3;
  }
`;

export const Close = styled.div`
  background-image: url("/images/icon/cross.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;
