import type { MediaType } from "@dotts/css-types";
import { mediaFeatures, mediaType } from "@dotts/css-zod-schemas";
import { z } from "zod";
import type { MaybeArray, OverrideFeatures } from "./types";

const extendSchemaWithNumber = <S extends z.ZodSchema>(schema: S) =>
  z.union([schema, z.number()]);

export const features = mediaFeatures
  .omit({
    minWidth: true,
    maxWidth: true,
    width: true,
    minHeight: true,
    maxHeight: true,
    height: true,
    resolution: true,
    minResolution: true,
    maxResolution: true,
  } satisfies Record<keyof OverrideFeatures, true>)
  .extend({
    minWidth: extendSchemaWithNumber(mediaFeatures.shape.minWidth),
    maxWidth: extendSchemaWithNumber(mediaFeatures.shape.maxWidth),
    width: extendSchemaWithNumber(mediaFeatures.shape.width),
    minHeight: extendSchemaWithNumber(mediaFeatures.shape.minHeight),
    maxHeight: extendSchemaWithNumber(mediaFeatures.shape.maxHeight),
    height: extendSchemaWithNumber(mediaFeatures.shape.height),
    minResolution: extendSchemaWithNumber(mediaFeatures.shape.minResolution),
    maxResolution: extendSchemaWithNumber(mediaFeatures.shape.maxResolution),
    resolution: extendSchemaWithNumber(mediaFeatures.shape.resolution),
  });

export type MediaFeatures = z.infer<typeof features>;

type FeaturesAndOperators =
  | Partial<
      MediaFeatures & {
        type: MediaType;
        and: FeaturesAndOperators[];
        or: FeaturesAndOperators[];
        not: MaybeArray<FeaturesAndOperators>;
      }
    >
  | string;

// recursive zod schema requires an explicit type
export const featuresAndOperators: z.ZodType<FeaturesAndOperators> = z.union([
  features
    .extend({
      type: mediaType,
      and: z.lazy(() => operators.shape.and),
      or: z.lazy(() => operators.shape.or),
      not: z.lazy(() => operators.shape.not),
    })
    .partial(),
  z.string(),
]);

export const operators = z.object({
  and: z.array(featuresAndOperators).optional(),
  or: z.array(featuresAndOperators).optional(),
  not: z
    .union([featuresAndOperators, z.array(featuresAndOperators)])
    .optional(),
});

export const query = z.union([
  featuresAndOperators,
  z.array(featuresAndOperators),
  z
    .function()
    .args(
      z.object({
        and: z
          .function()
          .args(operators.shape.and)
          .returns(z.object({ and: operators.shape.and })),
        or: z
          .function()
          .args(operators.shape.or)
          .returns(z.object({ or: operators.shape.or })),
        not: z
          .function()
          .args(operators.shape.not)
          .returns(z.object({ not: operators.shape.not })),
      }),
    )
    .returns(z.union([featuresAndOperators, z.array(featuresAndOperators)])),
]);

// helper for zod schemas to ensure parsed object matches same order as input
export const retainObjectOrder = <S extends z.ZodSchema>(schema: S) =>
  z.custom((value) => schema.safeParse(value).success) as S;
