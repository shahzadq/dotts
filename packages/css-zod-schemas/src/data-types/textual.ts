import { z } from "zod";

export const cssWideKeyword = z.enum(["initial", "inherit", "revert", "unset"]);

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
