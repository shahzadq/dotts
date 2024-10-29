import { z } from "zod";
import { removeLeadingDigits } from "../utils";
import { cssFlexUnit, cssPercentageUnit } from "../units";

export const cssNumber = z.coerce.number();
export const cssInteger = cssNumber.refine((arg) => {
  return Number.isInteger(arg);
});

export const cssDimension = <
  U extends
    | z.ZodEnum<[string, ...string[]]>
    | z.ZodLiteral<string>
    | z.ZodUnion<[z.ZodTypeAny, ...z.ZodTypeAny[]]>,
>(
  units: U,
) =>
  z.string().refine((arg): arg is `${number}${z.infer<U>}` => {
    return units.safeParse(removeLeadingDigits(arg)).success;
  });

export const cssPercentage = cssDimension(cssPercentageUnit);

export const cssRatio = z.union([
  cssNumber,
  z
    .string()
    .regex(/\d+\/\d+/)
    .refine((arg): arg is `${number}/${number}` => true),
]);

export const cssFlex = cssDimension(cssFlexUnit);
