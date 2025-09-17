"use client";
import type { PropsWithChildren } from "react";
import { Col } from "../../layout";
import * as C from "./Tag.components";

type TagProps = PropsWithChildren;

const topCornerUrl = "/images/tag/tl.svg";
const bottomCornerUrl = "/images/tag/bl.svg";

export function Tag({ children }: TagProps) {
  return (
    <C.Container>
      <Col>
        <C.LeftCorner src={topCornerUrl} />
        <C.LeftCorner src={bottomCornerUrl} />
      </Col>
      <C.Content>{children}</C.Content>
      <Col>
        <C.RightCorner src={bottomCornerUrl} />
        <C.RightCorner src={topCornerUrl} />
      </Col>
    </C.Container>
  );
}
