export type AbsoluteLengthUnit = "cm" | "mm" | "Q" | "in" | "pc" | "pt" | "px";
export type FontRelativeLengthUnit = "em" | "ex" | "ch" | "rem" | "lh" | "rlh";
export type ViewportRelativeLengthUnit =
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
export type RelativeLengthUnit =
  | FontRelativeLengthUnit
  | ViewportRelativeLengthUnit;
export type LengthUnit = AbsoluteLengthUnit | RelativeLengthUnit;

export type ResolutionUnit = "dpi" | "dpcm" | "dppx" | "x";

export type AngleUnit = "deg" | "grad" | "rad" | "turn";

export type TimeUnit = "s" | "ms";

export type FrequencyUnit = "Hz" | "kHz";

export type PercentageUnit = "%";

export type FlexUnit = "fr";

export type Unit =
  | LengthUnit
  | ResolutionUnit
  | AngleUnit
  | TimeUnit
  | FrequencyUnit
  | PercentageUnit
  | FlexUnit;
