import type { DataTypes } from "..";

export type LengthPercentage =
  | DataTypes.Quantities.Length
  | DataTypes.Numeric.Percentage;

export type FrequencyPercentage =
  | DataTypes.Quantities.Frequency
  | DataTypes.Numeric.Percentage;

export type AnglePercentage =
  | DataTypes.Quantities.Angle
  | DataTypes.Numeric.Percentage;

export type TimePercentage =
  | DataTypes.Quantities.Time
  | DataTypes.Numeric.Percentage;
