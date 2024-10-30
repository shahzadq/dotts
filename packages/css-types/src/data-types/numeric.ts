import type {
  AngleUnit,
  FlexUnit,
  FrequencyUnit,
  LengthUnit,
  PercentageUnit,
  ResolutionUnit,
  TimeUnit,
} from "../units";

export type Integer = number;

export type Dimension<
  U extends
    | FlexUnit
    | AngleUnit
    | FrequencyUnit
    | LengthUnit
    | PercentageUnit
    | ResolutionUnit
    | TimeUnit,
> = `${number}${U}`;

export type Percentage = Dimension<PercentageUnit>;

export type Ratio = number | `${number}/${number}`;

export type Flex = Dimension<FlexUnit>;
