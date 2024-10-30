import { z } from "zod";

const regex = {
  digits: /\d+/,
} as const;

export const removeLeadingDigits = (str: string) =>
  str.replace(regex.digits, "");

export const zodLiteral = <T extends string>(arg: T) => z.literal(arg);

export const zodEnum = <A extends string, T extends [A, ...A[]] = [A, ...A[]]>(
  arg: T,
) => z.enum(arg);

export const zodUnion = <
  A extends z.ZodTypeAny,
  T extends [A, A, ...A[]] = [A, A, ...A[]],
>(
  arg: T,
) => z.union(arg);
