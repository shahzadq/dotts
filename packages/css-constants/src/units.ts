export const absoluteLengthUnits = [
  "cm",
  "mm",
  "Q",
  "in",
  "pc",
  "pt",
  "px",
] as const;

export const fontRelativeLengthUnits = [
  "em",
  "ex",
  "ch",
  "rem",
  "lh",
  "rlh",
] as const;

export const viewportRelativeLengthUnits = [
  "vw",
  "vh",
  "vmin",
  "vmax",
  "vb",
  "vi",
  "svw",
  "svh",
  "lvw",
  "lvh",
  "dvw",
  "dvh",
] as const;

export const relativeLengthUnits = [
  ...fontRelativeLengthUnits,
  ...viewportRelativeLengthUnits,
] as const;

export const lengthUnits = [
  ...absoluteLengthUnits,
  ...relativeLengthUnits,
] as const;

export const resolutionUnits = ["dpi", "dpcm", "dppx", "x"] as const;

export const angleUnits = ["deg", "grad", "rad", "turn"] as const;

export const timeUnits = ["s", "ms"] as const;

export const frequencyUnits = ["Hz", "kHz"] as const;

export const percentageUnit = "%" as const;

export const flexUnit = "fr" as const;

export const units = [
  ...lengthUnits,
  ...resolutionUnits,
  ...angleUnits,
  ...timeUnits,
  ...frequencyUnits,
  percentageUnit,
  flexUnit,
] as const;
