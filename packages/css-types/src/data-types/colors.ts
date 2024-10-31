import type {
  currentColor,
  namedColors,
  standardColors,
  systemColors,
  transparentColor,
} from "@dotts/css-constants";
import type { ArrayElement } from "../utils";

export type TransparentColor = typeof transparentColor;

export type StandardColor = ArrayElement<typeof standardColors>;

export type NamedColor = ArrayElement<typeof namedColors>;

export type SystemColor = ArrayElement<typeof systemColors>;

export type CurrentColor = typeof currentColor;

// export type Hex = `#${string}`;

// export type AlphaValue =
//   | DataTypes.Numeric.Number
//   | DataTypes.Numeric.Percentage;

// type H =
//   | DataTypes.Quantities.Angle
//   | DataTypes.Numeric.Number
//   | DataTypes.Textual.NoneKeyword;
// type S =
//   | DataTypes.Numeric.Percentage
//   | DataTypes.Numeric.Number
//   | DataTypes.Textual.NoneKeyword;
// type L =
//   | DataTypes.Numeric.Percentage
//   | DataTypes.Numeric.Number
//   | DataTypes.Textual.NoneKeyword;
// type A = AlphaValue | DataTypes.Textual.NoneKeyword;

// type HslSyntaxBase = `${H} ${S} ${L}` | `${H} ${S} ${L} / ${A}`;
// type HslAbsoluteSyntax = `hsl(${HslSyntaxBase})`;
// type HslRelativeSyntax = `hsl(from ${Color} ${HslSyntaxBase})`;
// export type Hsl = HslAbsoluteSyntax | HslRelativeSyntax;

// export type Color = Named | System | CurrentColor | Hex | Hsl;
