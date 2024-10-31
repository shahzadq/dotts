import type { Dimension, Ratio } from "./data-types";
import type { LengthUnit, ResolutionUnit } from "./units";

export type MediaFeaturesLengthUnits = Record<
  "minWidth" | "maxWidth" | "width" | "minHeight" | "maxHeight" | "height",
  LengthUnit
>;

export type MediaFeaturesResolutionUnits = Record<
  "minResolution" | "maxResolution" | "resolution",
  ResolutionUnit
>;

export type MediaFeatures = {
  minWidth: Dimension<MediaFeaturesLengthUnits["minWidth"]>;
  maxWidth: Dimension<MediaFeaturesLengthUnits["maxWidth"]>;
  width: Dimension<MediaFeaturesLengthUnits["width"]>;
  minHeight: Dimension<MediaFeaturesLengthUnits["minHeight"]>;
  maxHeight: Dimension<MediaFeaturesLengthUnits["maxHeight"]>;
  height: Dimension<MediaFeaturesLengthUnits["height"]>;
  minResolution: Dimension<MediaFeaturesResolutionUnits["minResolution"]>;
  maxResolution: Dimension<MediaFeaturesResolutionUnits["maxResolution"]>;
  resolution: Dimension<MediaFeaturesResolutionUnits["resolution"]>;
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
  forcedColors: "none" | "active";
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

export type MediaOrOperator = "or";
export type MediaAndOperator = "and";
export type MediaNotOperator = "not";
export type MediaOnlyOperator = "only";

export type MediaBasicType = "screen" | "print" | "all";
export type MediaType =
  | MediaBasicType
  | `${MediaOnlyOperator} ${MediaBasicType}`
  | `${MediaNotOperator} ${MediaBasicType}`;
