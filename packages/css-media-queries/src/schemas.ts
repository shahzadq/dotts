import {
  cssMediaAndOperator,
  cssMediaFeatures,
  cssMediaNotOperator,
  cssMediaOrOperator,
  cssMediaType,
} from "@dotts/css-zod-schemas";
import { z } from "zod";
import type { OverrideFeatures } from "./types";

const extendSchemaWithNumber = <S extends z.ZodSchema>(schema: S) =>
  z.union([schema, z.number()]);

export const mediaFeaturesSchema = cssMediaFeatures
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
  } satisfies Record<keyof OverrideFeatures, boolean>)
  .extend({
    minWidth: extendSchemaWithNumber(cssMediaFeatures.shape.minWidth),
    maxWidth: extendSchemaWithNumber(cssMediaFeatures.shape.maxWidth),
    width: extendSchemaWithNumber(cssMediaFeatures.shape.width),
    minHeight: extendSchemaWithNumber(cssMediaFeatures.shape.minHeight),
    maxHeight: extendSchemaWithNumber(cssMediaFeatures.shape.maxHeight),
    height: extendSchemaWithNumber(cssMediaFeatures.shape.height),
    minResolution: extendSchemaWithNumber(cssMediaFeatures.shape.minResolution),
    maxResolution: extendSchemaWithNumber(cssMediaFeatures.shape.maxResolution),
    resolution: extendSchemaWithNumber(cssMediaFeatures.shape.resolution),
    type: cssMediaType,
  });

export type MediaFeatures = z.infer<typeof mediaFeaturesSchema>;

export const operatorsSchema = z.union([
  cssMediaAndOperator,
  cssMediaNotOperator,
  cssMediaOrOperator,
]);
