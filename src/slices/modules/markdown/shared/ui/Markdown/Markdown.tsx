"use client";
import type { JSX } from "react";
import * as C from "./Markdown.components";

type MarkdownProps = JSX.IntrinsicElements["div"] & {
  content: string;
};

export function Markdown({ content }: MarkdownProps) {
  /** biome-ignore lint/security/noDangerouslySetInnerHtml: markdown content */
  return <C.Content dangerouslySetInnerHTML={{ __html: content }} />;
}
