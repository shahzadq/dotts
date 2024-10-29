import type { DataTypes, Units } from ".";

export type FeaturesLengthUnits = Record<
  "minWidth" | "maxWidth" | "width" | "minHeight" | "maxHeight" | "height",
  Units.Length
>;

export type FeaturesResolutionUnits = Record<
  "minResolution" | "maxResolution" | "resolution",
  Units.Resolution
>;

export type Features = {
  minWidth: DataTypes.Numeric.Dimension<FeaturesLengthUnits["minWidth"]>;
  maxWidth: DataTypes.Numeric.Dimension<FeaturesLengthUnits["maxWidth"]>;
  width: DataTypes.Numeric.Dimension<FeaturesLengthUnits["width"]>;
  minHeight: DataTypes.Numeric.Dimension<FeaturesLengthUnits["minHeight"]>;
  maxHeight: DataTypes.Numeric.Dimension<FeaturesLengthUnits["maxHeight"]>;
  height: DataTypes.Numeric.Dimension<FeaturesLengthUnits["height"]>;
  minResolution: DataTypes.Numeric.Dimension<
    FeaturesResolutionUnits["minResolution"]
  >;
  maxResolution: DataTypes.Numeric.Dimension<
    FeaturesResolutionUnits["maxResolution"]
  >;
  resolution: DataTypes.Numeric.Dimension<
    FeaturesResolutionUnits["resolution"]
  >;
  minAspectRatio: DataTypes.Numeric.Ratio;
  maxAspectRatio: DataTypes.Numeric.Ratio;
  aspectRatio: DataTypes.Numeric.Ratio;
  minColor: DataTypes.Numeric.Number;
  maxColor: DataTypes.Numeric.Number;
  color: DataTypes.Numeric.Number;
  minColorIndex: DataTypes.Numeric.Number;
  maxColorIndex: DataTypes.Numeric.Number;
  colorIndex: DataTypes.Numeric.Number;
  minMonochrome: DataTypes.Numeric.Number;
  maxMonochrome: DataTypes.Numeric.Number;
  monochrome: DataTypes.Numeric.Number;
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
