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

export const cssUnit = z.union([
  cssLengthUnit,
  cssResolutionUnit,
  cssAngleUnit,
  cssTimeUnit,
]);

export const cssValueWithUnit = (
  schema:
    | typeof cssLengthUnit
    | typeof cssResolutionUnit
    | typeof cssAngleUnit
    | typeof cssTimeUnit
    | typeof cssUnit,
) =>
  z.string().refine((arg): arg is `${number}${z.infer<typeof schema>}` => {
    // remove leading numbers from arg and then test against css units
    return schema.safeParse(arg.replace(/\d+/, "")).success;
  });
