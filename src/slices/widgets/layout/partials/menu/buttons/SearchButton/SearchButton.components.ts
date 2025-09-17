"use client";
import styled from "@emotion/styled";

export const Container = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 1rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-family: inherit;
  color: inherit;
  text-transform: inherit;
`;

export const Text = styled.div`
  line-height: 1;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
