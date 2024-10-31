import { z } from "zod";

export const typedZod = {
  regex: <T extends string>(regex: RegExp) =>
    z.any().refine((arg): arg is T => {
      if (typeof arg !== "string") return false;
      return regex.test(arg);
    }),
  literal: <S extends string>(str: S) => z.literal(str),
  enum: <
    T extends string,
    A extends readonly [T, ...T[]] = readonly [T, ...T[]],
  >(
    arr: A,
  ) => z.enum(arr),
  union: <
    T,
    Z extends z.ZodType<T> = z.ZodType<T>,
    A extends readonly [Z, Z, ...Z[]] = readonly [Z, Z, ...Z[]],
  >(
    args: A,
  ) => z.union(args),
  object: <
    O extends object,
    Z extends Record<keyof O, z.ZodSchema> = {
      [Key in keyof O]: z.ZodType<O[Key]>;
    },
  >(
    obj: Z,
  ) => z.object(obj),
};
