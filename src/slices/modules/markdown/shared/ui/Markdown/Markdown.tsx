"use client";
import { Remark } from "react-remark";
import { Image } from "../Image";
import * as C from "./Markdown.components";

type MarkdownProps = {
  content: string;
};

// biome-ignore lint/suspicious/noExplicitAny: markdown parsing
type MDProps = any;

export function Markdown({ content }: MarkdownProps) {
  return (
    <C.Content>
      <Remark
        rehypeReactOptions={{
          components: {
            img: (props: MDProps) => <Image {...props} />,
          },
        }}
      >
        {content}
      </Remark>
    </C.Content>
  );
}
