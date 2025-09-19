const defaultFontSize = 16;
const fsz = (value: number) => value * defaultFontSize;
export const font = {
  family: {
    primary: "var(--font-old-standard-tt)",
  },
  size: {
    xs: fsz(0.7),
    small: fsz(0.875),
    default: defaultFontSize,
    medium: fsz(1.125),
    large: fsz(1.5),
    xl: fsz(3),
    xxl: fsz(4),
    lead: fsz(5),
  },
  letterSpacing: {
    title: "-0.05em",
  },
};
