import type { LengthUnit, ResolutionUnit } from "./units";
import type { Dimension, Ratio } from "./data-types";

export type FeaturesLengthUnits = Record<
  "minWidth" | "maxWidth" | "width" | "minHeight" | "maxHeight" | "height",
  LengthUnit
>;

export type FeaturesResolutionUnits = Record<
  "minResolution" | "maxResolution" | "resolution",
  ResolutionUnit
>;

export type Features = {
  minWidth: Dimension<FeaturesLengthUnits["minWidth"]>;
  maxWidth: Dimension<FeaturesLengthUnits["maxWidth"]>;
  width: Dimension<FeaturesLengthUnits["width"]>;
  minHeight: Dimension<FeaturesLengthUnits["minHeight"]>;
  maxHeight: Dimension<FeaturesLengthUnits["maxHeight"]>;
  height: Dimension<FeaturesLengthUnits["height"]>;
  minResolution: Dimension<FeaturesResolutionUnits["minResolution"]>;
  maxResolution: Dimension<FeaturesResolutionUnits["maxResolution"]>;
  resolution: Dimension<FeaturesResolutionUnits["resolution"]>;
  minAspectRatio: Ratio;
  maxAspectRatio: Ratio;
  aspectRatio: Ratio;
  minColor: number;
  maxColor: number;
  color: number;
  minColorIndex: number;
  maxColorIndex: number;
  colorIndex: number;
  minMonochrome: number;
  maxMonochrome: number;
  monochrome: number;
  orientation: "landscape" | "portrait";
  anyHover: "none" | "hover";
  anyPointer: "none" | "coarse" | "fine";
  colorGamut: "srgb" | "p3" | "rec2020";
  displayMode:
    | "fullscreen"
    | "standalone"
    | "minimal-ui"
    | "browser"
    | "window-controls-overlay";
  dynamicRange: "standard" | "high";
  forcedColor: "none" | "active";
  grid: 0 | 1;
  hover: "none" | "hover";
  invertedColors: "none" | "inverted";
  overflowBlock: "none" | "scroll" | "optional-speed" | "paged";
  overflowInline: "none" | "scroll";
  pointer: "none" | "coarse" | "fine";
  prefersColorScheme: "light" | "dark";
  prefersContrast: "no-preference" | "more" | "less" | "custom";
  prefersReducedMotion: "no-preference" | "reduce";
  scan: "interlace" | "progressive";
  scripting: "none" | "initial-only" | "enabled";
  update: "none" | "slow" | "fast";
  videoDynamicRange: "standard" | "high";
};

export type OrOperator = "or";
export type AndOperator = "and";
export type NotOperator = "not";
export type OnlyOperator = "only";

export type BasicType = "screen" | "print" | "all";
export type Type =
  | BasicType
  | `${OnlyOperator} ${BasicType}`
  | `${NotOperator} ${BasicType}`;
