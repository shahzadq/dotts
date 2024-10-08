import type { CSSLengthUnit, CSSResolutionUnit, WithUnit } from "./units";

export interface CSSMediaFeatures {
  width: WithUnit<CSSLengthUnit>;
  minWidth: WithUnit<CSSLengthUnit>;
  maxWidth: WithUnit<CSSLengthUnit>;
  orientation: "landscape" | "portrait";
  anyHover: "none" | "hover";
  anyPointer: "none" | "coarse" | "fine";
  aspectRatio: string;
  minAspectRatio: string;
  maxAspectRatio: string;
  color: number;
  minColor: number;
  maxColor: number;
  colorGamut: "srgb" | "p3" | "rec2020";
  colorIndex: number;
  minColorIndex: number;
  maxColorIndex: number;
  displayMode:
    | "fullscreen"
    | "standalone"
    | "minimal-ui"
    | "browser"
    | "window-controls-overlay";
  dynamicRange: "standard" | "high";
  forcedColors: "none" | "active";
  grid: "0" | "1";
  height: WithUnit<CSSLengthUnit>;
  minHeight: WithUnit<CSSLengthUnit>;
  maxHeight: WithUnit<CSSLengthUnit>;
  hover: "none" | "hover";
  invertedColors: "none" | "inverted";
  monochrome: number;
  minMonochrone: number;
  maxMonochrone: number;
  overflowBlock: "none" | "scroll" | "optional-paged" | "paged";
  overflowInline: "none" | "scroll";
  pointer: "none" | "coarse" | "fine";
  prefersColorScheme: "light" | "dark";
  prefersContrast: "no-preference" | "more" | "less" | "custom";
  prefersReducedMotion: "no-preference" | "reduce";
  resolution: WithUnit<CSSResolutionUnit>;
  minResolution: WithUnit<CSSResolutionUnit>;
  maxResolution: WithUnit<CSSResolutionUnit>;
  scan: "interlace" | "progressive";
  scripting: "none" | "initial-only" | "enabled";
  update: "none" | "slow" | "fast";
  videoDynamicRange: "standard" | "high";
}

export type CSSMediaOrOperator = "or";
export type CSSMediaAndOperator = "and";
export type CSSMediaNotOperator = "not";
export type CSSMediaOnlyOperator = "only";
export type CSSMediaOperator =
  | CSSMediaOrOperator
  | CSSMediaAndOperator
  | CSSMediaNotOperator
  | CSSMediaOnlyOperator;

export type CSSMediaBasicType = "screen" | "print" | "all";
export type CSSMediaType =
  | CSSMediaBasicType
  | `${CSSMediaOnlyOperator} ${CSSMediaBasicType}`
  | `${CSSMediaNotOperator} ${CSSMediaBasicType}`;
