import type {
  CSSLengthMediaFeaturesUnits,
  CSSResolutionMediaFeaturesUnits,
} from "@dotts/css-types";

export type MaybeArray<T> = T | T[];

export type OverrideFeatures = CSSLengthMediaFeaturesUnits &
  CSSResolutionMediaFeaturesUnits;
