import type { DataTypes, Units } from "..";

export type Length = DataTypes.Numeric.Dimension<Units.Length>;

export type Angle = DataTypes.Numeric.Dimension<Units.Angle>;

export type Time = DataTypes.Numeric.Dimension<Units.Time>;

export type Frequency = DataTypes.Numeric.Dimension<Units.Frequency>;

export type Resolution = DataTypes.Numeric.Dimension<Units.Resolution>;
