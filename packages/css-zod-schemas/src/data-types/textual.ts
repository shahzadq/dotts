import { z } from "zod";
import { zodEnum } from "../utils";
import type * as CSS from "@dotts/css-types";

// export const cssWideKeyword = z.enum(["initial", "inherit", "revert", "unset"]);
export const cssWideKeyword = zodEnum<CSS.DataTypes.Textual.WideKeyword>([
  "inherit",
  "initial",
  "revert",
  "unset",
]);

// TODO - REPLACE WITH REGEX
export const cssCustomIndent = z.string();
export const cssDashedIndent = z.string();

export const cssString = z
  .string()
  .regex(/("(.|\n)+"|'(.|\n)+')/)
  .refine((arg): arg is `"${string}"` | `'${string}'` => true);

export const cssUrl = z
  .string()
  .regex(/url\(.+\)/)
  .refine((arg): arg is `url(${string})` => true);
