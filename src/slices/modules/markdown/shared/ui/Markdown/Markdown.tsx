"use client";
import { Remark } from "react-remark";
import * as C from "./Markdown.components";

type MarkdownProps = {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  return (
    <C.Content>
      <Remark>{content}</Remark>
    </C.Content>
  );
}
