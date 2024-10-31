import type {
  MediaFeaturesLengthUnits,
  MediaFeaturesResolutionUnits,
} from "@dotts/css-types";

export type MaybeArray<T> = T | T[];

export type OverrideFeatures = MediaFeaturesLengthUnits &
  MediaFeaturesResolutionUnits;

export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;
