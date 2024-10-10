import type {
  CSSLengthUnit,
  CSSResolutionUnit,
  CSSValueWithUnit,
} from "./units";
import type { Ratio } from "./values";

type FeatureWithMinMaxVariants<K extends string, T> = Record<
  K | `min${Capitalize<K>}` | `max${Capitalize<K>}`,
  T
>;

export type CSSLengthMediaFeaturesUnits = FeatureWithMinMaxVariants<
  "width",
  CSSLengthUnit
> &
  FeatureWithMinMaxVariants<"height", CSSLengthUnit>;

export type CSSResolutionMediaFeaturesUnits = FeatureWithMinMaxVariants<
  "resolution",
  CSSResolutionUnit
>;

type MediaFeaturesWithUnits = {
  [Key in keyof CSSLengthMediaFeaturesUnits]: CSSValueWithUnit<
    CSSLengthMediaFeaturesUnits[Key]
  >;
} & {
  [Key in keyof CSSResolutionMediaFeaturesUnits]: CSSValueWithUnit<
    CSSResolutionMediaFeaturesUnits[Key]
  >;
};

export type CSSMediaFeatures = MediaFeaturesWithUnits &
  FeatureWithMinMaxVariants<"aspectRatio", Ratio> &
  FeatureWithMinMaxVariants<"color", number> &
  FeatureWithMinMaxVariants<"colorIndex", number> &
  FeatureWithMinMaxVariants<"monochrome", number> & {
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
    overflowBlock: "none" | "scroll" | "optional-paged" | "paged";
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

export type CSSMediaOrOperator = "or";
export type CSSMediaAndOperator = "and";
export type CSSMediaNotOperator = "not";
export type CSSMediaOnlyOperator = "only";

export type CSSMediaBasicType = "screen" | "print" | "all";
export type CSSMediaType =
  | CSSMediaBasicType
  | `${CSSMediaOnlyOperator} ${CSSMediaBasicType}`
  | `${CSSMediaNotOperator} ${CSSMediaBasicType}`;
