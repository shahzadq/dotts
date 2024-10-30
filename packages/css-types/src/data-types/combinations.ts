import type { Percentage } from "./numeric";
import type { Angle, Frequency, Length, Time } from "./quantities";

export type LengthPercentageCombination = Length | Percentage;

export type FrequencyPercentageCombination = Frequency | Percentage;

export type AnglePercentageCombination = Angle | Percentage;

export type TimePercentageCombination = Time | Percentage;
