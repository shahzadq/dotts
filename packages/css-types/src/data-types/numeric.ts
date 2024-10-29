import type { Units } from "..";

export type Number = number;
export type Integer = Number;

export type Dimension<
  U extends
    | Units.Flex
    | Units.Angle
    | Units.Frequency
    | Units.Length
    | Units.Percentage
    | Units.Resolution
    | Units.Time,
> = `${number}${U}`;

export type Percentage = Dimension<Units.Percentage>;

export type Ratio = number | `${number}/${number}`;

export type Flex = Dimension<Units.Flex>;
