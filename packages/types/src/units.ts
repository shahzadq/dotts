export type CSSAbsoluteLengthUnit =
  | "cm"
  | "mm"
  | "Q"
  | "in"
  | "pc"
  | "pt"
  | "px";
export type CSSRelativeLengthUnit =
  | "em"
  | "ex"
  | "ch"
  | "rem"
  | "lh"
  | "rlh"
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
export type CSSLengthUnit = CSSAbsoluteLengthUnit | CSSRelativeLengthUnit;

export type CSSResolutionUnit = "dpi" | "dpcm" | "dppx" | "x";

export type CSSUnit = CSSLengthUnit | CSSResolutionUnit;

export type WithUnit<U extends CSSUnit> = `${number}${U}`;
