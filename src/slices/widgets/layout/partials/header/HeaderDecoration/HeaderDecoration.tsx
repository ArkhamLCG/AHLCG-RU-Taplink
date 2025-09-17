"use client";
import Link from "next/link";
import type { JSX } from "react";
import * as C from "./HeaderDecoration.components";

type HeaderDecorationProps = JSX.IntrinsicElements["div"];

export function HeaderDecoration(props: HeaderDecorationProps) {
  return (
    <C.Container {...props}>
      <C.TripleSegmentLine>
        <C.LeftTentacles />
        <C.Line />
        <C.LeftCorner />
      </C.TripleSegmentLine>

      <C.DualSegmentLine>
        <C.MobileLine />
        <C.MobileTentacles src="/images/header/deco-left-mobile.svg" />
      </C.DualSegmentLine>

      <C.LogoContainer>
        <Link href="/">
          <C.Logo src="/images/ah-logo.png" />
        </Link>
      </C.LogoContainer>

      <C.DualSegmentLine>
        <C.MobileTentacles src="/images/header/deco-right-mobile.svg" />
        <C.MobileLine />
      </C.DualSegmentLine>

      <C.TripleSegmentLine>
        <C.RightCorner />
        <C.Line />
        <C.RightTentacles />
      </C.TripleSegmentLine>
    </C.Container>
  );
}
