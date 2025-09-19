"use client";
import type { PropsWithChildren } from "react";
import { Col } from "../../layout";
import * as C from "./Tag.components";

type TagProps = PropsWithChildren;

const cornerUrl = "/images/decoration/tag-corner.svg";

export function Tag({ children }: TagProps) {
  return (
    <C.Container>
      <Col>
        <C.TopLeftCorner src={cornerUrl} />
        <C.BottomLeftCorner src={cornerUrl} />
      </Col>
      <C.Content>{children}</C.Content>
      <Col>
        <C.TopRightCorner src={cornerUrl} />
        <C.BottomRightCorner src={cornerUrl} />
      </Col>
    </C.Container>
  );
}
