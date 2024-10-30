import type { FlexUnit, PercentageUnit, Unit } from "../units";

export type Integer = number;

export type Dimension<U extends Unit = Unit> = `${number}${U}`;

export type Percentage = Dimension<PercentageUnit>;

export type Ratio = number | `${number}/${number}`;

export type Flex = Dimension<FlexUnit>;
