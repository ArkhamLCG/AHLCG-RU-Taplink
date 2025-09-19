const defaultFontSize = 16;
const fsz = (value: number) => value * defaultFontSize;
export const font = {
  family: {
    primary: "var(--font-old-standard-tt)",
    secondary: "var(--font-cormorant-garamond)",
  },
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  size: {
    xs: fsz(0.7),
    small: fsz(0.875),
    default: defaultFontSize,
    medium: fsz(1.125),
    large: fsz(1.5),
    xl: fsz(1.75),
    xxl: fsz(3),
    lead: fsz(5),
  },
  letterSpacing: {
    title: "-0.05em",
  },
};
