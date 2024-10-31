import type {
  absoluteLengthUnits,
  angleUnits,
  fontRelativeLengthUnits,
  frequencyUnits,
  lengthUnits,
  relativeLengthUnits,
  resolutionUnits,
  timeUnits,
  viewportRelativeLengthUnits,
  percentageUnit,
  flexUnit,
  units,
} from "@dotts/css-constants";
import type { ArrayElement } from "./utils";

export type AbsoluteLengthUnit = ArrayElement<typeof absoluteLengthUnits>;
export type FontRelativeLengthUnit = ArrayElement<
  typeof fontRelativeLengthUnits
>;
export type ViewportRelativeLengthUnit = ArrayElement<
  typeof viewportRelativeLengthUnits
>;
export type RelativeLengthUnit = ArrayElement<typeof relativeLengthUnits>;
export type LengthUnit = ArrayElement<typeof lengthUnits>;

export type ResolutionUnit = ArrayElement<typeof resolutionUnits>;

export type AngleUnit = ArrayElement<typeof angleUnits>;

export type TimeUnit = ArrayElement<typeof timeUnits>;

export type FrequencyUnit = ArrayElement<typeof frequencyUnits>;

export type PercentageUnit = typeof percentageUnit;

export type FlexUnit = typeof flexUnit;

export type Unit = ArrayElement<typeof units>;
