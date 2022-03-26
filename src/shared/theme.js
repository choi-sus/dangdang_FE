const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  ssmall: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
};

const lineHeight = {
  ssmall: "18px",
  small: "22px",
  base: "24px",
  lg: "28px",
  xl: "30px",
  xxl: "32px",
  xxxl: "34px",
};

const fontWeight = {
  Regular: 400,
  Medium: 500,
  Bold: 700,
};

const colors = {
  main_1: "#fffbf1",
  main_2: "#ffd04c",
  main_3: "#ffac0a",
  bg: "#ffe7a5",
  white: "#ffffff",
};

const paddings = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(20),
};

const margins = {
  small: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(14),
  xxl: calcRem(16),
  xxxl: calcRem(18),
  xxxxl: calcRem(20),
};

const horizontalityInterval = {
  small: `0 ${calcRem(16)}`,
  base: `0 ${calcRem(20)}`,
};

const theme = {
  fontSizes,
  lineHeight,
  fontWeight,
  colors,
  paddings,
  margins,
  horizontalityInterval,
};

export default theme;