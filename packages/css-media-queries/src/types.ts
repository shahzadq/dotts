import type {
  CSSLengthMediaFeaturesUnits,
  CSSResolutionMediaFeaturesUnits,
} from "@dotts/css-types";

export type MaybeArray<T> = T | T[];

export type OverrideFeatures = CSSLengthMediaFeaturesUnits &
  CSSResolutionMediaFeaturesUnits;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
