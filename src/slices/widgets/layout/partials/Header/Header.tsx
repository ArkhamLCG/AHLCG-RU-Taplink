"use client";
import * as C from "./Header.components";

export function Header() {
  return (
    <C.Container>
      <C.Decoration>
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
          <C.Logo src="/images/ah-logo.png" />
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
      </C.Decoration>
    </C.Container>
  );
}
