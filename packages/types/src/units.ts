export type CSSAbsoluteLengthUnit =
  | "cm"
  | "mm"
  | "Q"
  | "in"
  | "pc"
  | "pt"
  | "px";

export type CSSFontRelativeLengthUnit =
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "lh"
  | "rlh";
export type CSSViewportRelativeLengthUnit =
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "vb"
  | "vi"
  | "svw"
  | "svh"
  | "lvw"
  | "lvh"
  | "dvw"
  | "dvh";
export type CSSRelativeLengthUnit =
  | CSSFontRelativeLengthUnit
  | CSSViewportRelativeLengthUnit;

export type CSSLengthUnit = CSSAbsoluteLengthUnit | CSSRelativeLengthUnit;

export type CSSResolutionUnit = "dpi" | "dpcm" | "dppx" | "x";
export type CSSAngleUnit = "deg" | "grad" | "rad" | "turn";
export type CSSTimeUnit = "s" | "ms";

export type CSSUnit = CSSLengthUnit | CSSResolutionUnit | CSSAngleUnit;

export type CSSValueWithUnit<U extends CSSUnit> = `${number}${U}`;
