import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Row } from "@/slices/shared/ui";

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const LogoContainer = styled.div`
  align-self: flex-end;
`;

export const Logo = styled.img`
  position: relative;
  z-index: 2;
  width: 8rem;
  flex-shrink: 0;
  margin: 0 -1rem;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const Decoration = styled(Row)`
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  display: flex;
  @media (min-width: 768px) {
    top: 2rem;
  }
`;

const segmentLineStyles = css`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

export const TripleSegmentLine = styled(Row)`
  display: none;
  @media (min-width: 768px) {
    ${segmentLineStyles}
  }
`;

export const DualSegmentLine = styled(Row)`
  flex: 1;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LeftTentacles = styled.div`
  background: url("/images/header/deco-left.svg") no-repeat center bottom;
  width: 78px;
  height: 40px;
`;

export const MobileTentacles = styled.img`
  height: 40px;
  max-width: 100%;
`;

export const LeftCorner = styled.div`
  background: url("/images/header/deco-logo-left.svg") no-repeat left bottom;
  width: 64px;
  height: 40px;
`;

export const RightCorner = styled.div`
  background: url("/images/header/deco-logo-right.svg") no-repeat center bottom;
  width: 64px;
  height: 40px;
`;

export const RightTentacles = styled.div`
  background: url("/images/header/deco-right.svg") no-repeat center bottom;
  width: 78px;
  height: 40px;
`;

export const Line = styled.div`
  flex: 1;
  background: url("/images/header/line.svg") no-repeat center bottom;
  background-size: 571px;
  height: 40px;
`;

export const MobileLine = styled(Line)`
  background-position: center top;
`;
