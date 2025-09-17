const defaultFontSize = 16;
const fsz = (value: number) => value * defaultFontSize;
export const font = {
  size: {
    xs: fsz(0.7),
    small: fsz(0.875),
    default: defaultFontSize,
    medium: fsz(1.25),
  },
  letterSpacing: {
    title: "-0.05em",
  },
};
