import { z } from "zod";
import { isDefined } from "@dotts/utils/typeguards";
import { cssAngleUnit, cssPercentageUnit } from "./units";
import { removeLeadingDigits } from "./utils";

export const cssNumberWithUnit = <S extends z.ZodSchema>(schema: S) =>
  z.any().refine((arg): arg is `${number}${z.infer<S>}` => {
    if (typeof arg !== "string") return false;
    return schema.safeParse(removeLeadingDigits(arg)).success;
  });

export const cssNumber = z.coerce.number();

export const cssRatio = z.union([
  z.any().refine(
    (arg): arg is `${number}/${number}` => {
      if (typeof arg !== "string") return false;
      const split = arg.split("/");
      if (split.length !== 2) return false;
      const [num1, num2] = split;
      const isNumber = (tbd: string) => cssNumber.safeParse(tbd).success;
      return (
        isDefined(num1) && isDefined(num2) && isNumber(num1) && isNumber(num2)
      );
    },
    { message: "Invalid ratio. Ratio should match `${number}/${number}`" },
  ),
  cssNumber,
]);

export const cssPercentage = cssNumberWithUnit(cssPercentageUnit);
export const cssAlpha = z.union([cssNumber, cssPercentage]);
export const cssAngle = cssNumberWithUnit(cssAngleUnit);
export const cssAngleOrPercentage = z.union([cssAngle, cssPercentage]);

export const cssBlendMode = z.enum([
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
]);

export const cssCalcKeyword = z.enum([
  "e",
  "-e",
  "pi",
  "-pi",
  "infinity",
  "-infinity",
  "NaN",
]);

type ArithmeticOperator = "+" | "-";

export const cssCalcSum = z
  .any()
  .refine((arg): arg is `${number}${ArithmeticOperator}${number}` => {
    if (typeof arg !== "string") return false;
    return true;
  });
