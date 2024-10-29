import { z } from "zod";

export const cssAbsoluteLengthUnit = z.enum([
  "cm",
  "mm",
  "Q",
  "in",
  "pc",
  "pt",
  "px",
]);

export const cssFontRelativeLengthUnit = z.enum([
  "em",
  "ex",
  "ch",
  "rem",
  "lh",
  "rlh",
]);
export const cssViewportRelativeLengthUnit = z.enum([
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
]);
export const cssRelativelengthUnit = z.union([
  cssFontRelativeLengthUnit,
  cssViewportRelativeLengthUnit,
]);

export const cssLengthUnit = z.union([
  cssAbsoluteLengthUnit,
  cssRelativelengthUnit,
]);

export const cssResolutionUnit = z.enum(["dpi", "dpcm", "dppx", "x"]);
export const cssAngleUnit = z.enum(["deg", "grad", "rad", "turn"]);
export const cssTimeUnit = z.enum(["s", "ms"]);
export const cssFrequencyUnit = z.enum(["Hz", "kHz"]);

export const cssUnit = z.union([
  cssLengthUnit,
  cssResolutionUnit,
  cssAngleUnit,
  cssTimeUnit,
]);

export const cssPercentageUnit = z.literal("%");
export const cssFlexUnit = z.literal("fr");
