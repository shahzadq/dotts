import type { Integer, Ratio } from "@dotts/css-types";
import { z } from "zod";
import { flexUnit, percentageUnit } from "../units";
import { typedZod } from "../utils";

export const number = z.coerce.number();
export const integer = number.refine((arg): arg is Integer => {
  return Number.isInteger(arg);
});

export const dimension = <U extends z.ZodType<string>>(units: U) =>
  z.any().refine((arg): arg is `${number}${z.infer<U>}` => {
    if (typeof arg !== "string") return false;
    return units.safeParse(arg.replace(/\d+/, "")).success;
  });

export const percentage = dimension(percentageUnit);

export const ratio = typedZod.union<Ratio>([
  number,
  typedZod.regex<`${number}/${number}`>(/\d+\/\d+/),
]);

export const flex = dimension(flexUnit);
