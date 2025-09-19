export const Breakpoint = {
  lte: (value: number) => `(max-width: ${value}px)`,
  gte: (value: number) => `(min-width: ${value}px)`,
  between: (min: number, max: number) =>
    `(min-width: ${min}px) and (max-width: ${max}px)`,
  lt: (value: number) => `(max-width: ${value - 1}px)`,
  gt: (value: number) => `(min-width: ${value + 1}px)`,
};
