export type AbsoluteLength = "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px";
export type FontRelativeLength = "em" | "ex" | "ch" | "rem" | "lh" | "rlh";
export type ViewportRelativeLength =
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
export type RelativeLength = FontRelativeLength | ViewportRelativeLength;
export type Length = AbsoluteLength | RelativeLength;

export type Resolution = "dpi" | "dpcm" | "dppx" | "x";

export type Angle = "deg" | "grad" | "rad" | "turn";

export type Time = "s" | "ms";

export type Frequency = "Hz" | "kHz";

export type Percentage = "%";

export type Flex = "fr";
