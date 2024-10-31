import type {
  MediaAndOperator,
  MediaBasicType,
  MediaFeatures,
  MediaFeaturesLengthUnits,
  MediaFeaturesResolutionUnits,
  MediaNotOperator,
  MediaOnlyOperator,
  MediaOrOperator,
  MediaType,
} from "@dotts/css-types";
import { z } from "zod";
import { dimension, ratio } from "./data-types";
import { lengthUnit, resolutionUnit } from "./units";
import { typedZod } from "./utils";

export const mediaFeaturesLengthUnits =
  typedZod.object<MediaFeaturesLengthUnits>({
    minWidth: lengthUnit,
    maxWidth: lengthUnit,
    width: lengthUnit,
    minHeight: lengthUnit,
    maxHeight: lengthUnit,
    height: lengthUnit,
  });

export const mediaFeaturesResolutionUnits =
  typedZod.object<MediaFeaturesResolutionUnits>({
    minResolution: resolutionUnit,
    maxResolution: resolutionUnit,
    resolution: resolutionUnit,
  });

export const mediaFeatures = typedZod.object<MediaFeatures>({
  minWidth: dimension(mediaFeaturesLengthUnits.shape.minWidth),
  maxWidth: dimension(mediaFeaturesLengthUnits.shape.maxWidth),
  width: dimension(mediaFeaturesLengthUnits.shape.width),
  minHeight: dimension(mediaFeaturesLengthUnits.shape.minHeight),
  maxHeight: dimension(mediaFeaturesLengthUnits.shape.maxHeight),
  height: dimension(mediaFeaturesLengthUnits.shape.height),
  minResolution: dimension(mediaFeaturesResolutionUnits.shape.minResolution),
  maxResolution: dimension(mediaFeaturesResolutionUnits.shape.maxResolution),
  resolution: dimension(mediaFeaturesResolutionUnits.shape.resolution),
  minAspectRatio: ratio,
  maxAspectRatio: ratio,
  aspectRatio: ratio,
  minColor: z.number(),
  maxColor: z.number(),
  color: z.number(),
  minColorIndex: z.number(),
  maxColorIndex: z.number(),
  colorIndex: z.number(),
  minMonochrome: z.number(),
  maxMonochrome: z.number(),
  monochrome: z.number(),
  orientation: z.enum(["landscape", "portrait"]),
  anyHover: z.enum(["none", "hover"]),
  anyPointer: z.enum(["none", "coarse", "fine"]),
  colorGamut: z.enum(["srgb", "p3", "rec2020"]),
  displayMode: z.enum([
    "fullscreen",
    "standalone",
    "minimal-ui",
    "browser",
    "window-controls-overlay",
  ]),
  dynamicRange: z.enum(["standard", "high"]),
  forcedColors: z.enum(["none", "active"]),
  grid: z.union([z.literal(1), z.literal(0)]),
  hover: z.enum(["none", "hover"]),
  invertedColors: z.enum(["none", "inverted"]),
  overflowBlock: z.enum(["none", "scroll", "optional-speed", "paged"]),
  overflowInline: z.enum(["none", "scroll"]),
  pointer: z.enum(["none", "coarse", "fine"]),
  prefersColorScheme: z.enum(["light", "dark"]),
  prefersContrast: z.enum(["no-preference", "more", "less", "custom"]),
  prefersReducedMotion: z.enum(["no-preference", "reduce"]),
  scan: z.enum(["interlace", "progressive"]),
  scripting: z.enum(["none", "initial-only", "enabled"]),
  update: z.enum(["none", "slow", "fast"]),
  videoDynamicRange: z.enum(["standard", "high"]),
});

export const mediaOrOperator = typedZod.literal<MediaOrOperator>("or");
export const mediaAndOperator = typedZod.literal<MediaAndOperator>("and");
export const mediaNotOperator = typedZod.literal<MediaNotOperator>("not");
export const mediaOnlyOperator = typedZod.literal<MediaOnlyOperator>("only");

export const mediaBasicType = typedZod.enum<MediaBasicType>([
  "screen",
  "print",
  "all",
]);
export const mediaType = typedZod.union<MediaType>([
  mediaBasicType,
  typedZod.enum<Exclude<MediaType, MediaBasicType>>([
    "only screen",
    "not screen",
    "only print",
    "not print",
    "only all",
    "not all",
  ]),
]);
