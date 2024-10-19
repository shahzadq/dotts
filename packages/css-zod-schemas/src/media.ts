import { z } from "zod";
import { cssLengthUnit, cssResolutionUnit, cssValueWithUnit } from "./units";
import { cssRatioValue } from "./values";

export const cssLengthMediaFeaturesUnits = z.object({
  minWidth: cssLengthUnit,
  maxWidth: cssLengthUnit,
  width: cssLengthUnit,
  minHeight: cssLengthUnit,
  maxHeight: cssLengthUnit,
  height: cssLengthUnit,
});

export const cssResolutionMediaFeaturesUnits = z.object({
  minResolution: cssResolutionUnit,
  maxResolution: cssResolutionUnit,
  resolution: cssResolutionUnit,
});

export const cssMediaFeatures = z.object({
  minWidth: cssValueWithUnit(cssLengthMediaFeaturesUnits.shape.minWidth),
  maxWidth: cssValueWithUnit(cssLengthMediaFeaturesUnits.shape.maxWidth),
  width: cssValueWithUnit(cssLengthMediaFeaturesUnits.shape.width),
  minHeight: cssValueWithUnit(cssLengthMediaFeaturesUnits.shape.minHeight),
  maxHeight: cssValueWithUnit(cssLengthMediaFeaturesUnits.shape.maxHeight),
  height: cssValueWithUnit(cssLengthMediaFeaturesUnits.shape.height),
  minResolution: cssValueWithUnit(
    cssResolutionMediaFeaturesUnits.shape.minResolution,
  ),
  maxResolution: cssValueWithUnit(
    cssResolutionMediaFeaturesUnits.shape.maxResolution,
  ),
  resolution: cssValueWithUnit(
    cssResolutionMediaFeaturesUnits.shape.resolution,
  ),
  minAspectRatio: cssRatioValue,
  maxAspectRatio: cssRatioValue,
  aspectRatio: cssRatioValue,
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
    "borwser",
    "window-controls-overlay",
  ]),
  dynamicRange: z.enum(["standard", "high"]),
  forcedColors: z.enum(["none", "active"]),
  grid: z.union([z.literal(1), z.literal(0)]),
  hover: z.enum(["none", "hover"]),
  invertedColors: z.enum(["none", "inverted"]),
  overflowBlock: z.enum(["none", "scroll", "optional-paged", "paged"]),
  overlowInline: z.enum(["none", "scroll"]),
  pointer: z.enum(["none", "coarse", "fine"]),
  prefersColorScheme: z.enum(["light", "dark"]),
  prefersContrast: z.enum(["no-preference", "more", "less", "custom"]),
  prefersReducedMotion: z.enum(["no-preference", "reduce"]),
  scan: z.enum(["interlace", "progressive"]),
  scripting: z.enum(["none", "initial-only", "enabled"]),
  update: z.enum(["none", "slow", "fast"]),
  videoDynamicRange: z.enum(["standard", "high"]),
});

export const cssMediaOrOperator = z.literal("or");
export const cssMediaAndOperator = z.literal("and");
export const cssMediaNotOperator = z.literal("not");
export const cssMediaOnlyOperator = z.literal("only");

export const cssMediaBasicType = z.enum(["screen", "print", "all"]);
export const cssMediaType = z.union([
  cssMediaBasicType,
  z.enum([
    "only screen",
    "not screen",
    "only print",
    "not print",
    "only all",
    "not all",
  ]),
]);
