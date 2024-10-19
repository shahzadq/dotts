import type { z } from "zod";
import type {
  cssAbsoluteLengthUnit,
  cssFontRelativeLengthUnit,
  cssViewportRelativeLengthUnit,
  cssRelativelengthUnit,
  cssLengthUnit,
  cssResolutionUnit,
  cssAngleUnit,
  cssTimeUnit,
  cssUnit,
} from "@dotts/css-zod-schemas";

export type CSSAbsoluteLengthUnit = z.infer<typeof cssAbsoluteLengthUnit>;

export type CSSFontRelativeLengthUnit = z.infer<
  typeof cssFontRelativeLengthUnit
>;
export type CSSViewportRelativeLengthUnit = z.infer<
  typeof cssViewportRelativeLengthUnit
>;
export type CSSRelativeLengthUnit = z.infer<typeof cssRelativelengthUnit>;

export type CSSLengthUnit = z.infer<typeof cssLengthUnit>;

export type CSSResolutionUnit = z.infer<typeof cssResolutionUnit>;
export type CSSAngleUnit = z.infer<typeof cssAngleUnit>;
export type CSSTimeUnit = z.infer<typeof cssTimeUnit>;

export type CSSUnit = z.infer<typeof cssUnit>;

export type CSSValueWithUnit<U extends CSSUnit> = `${number}${U}`;
