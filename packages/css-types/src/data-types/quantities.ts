import type {
  AngleUnit,
  FrequencyUnit,
  LengthUnit,
  ResolutionUnit,
  TimeUnit,
} from "../units";
import type { Dimension } from "./numeric";

export type Length = Dimension<LengthUnit>;

export type Angle = Dimension<AngleUnit>;

export type Time = Dimension<TimeUnit>;

export type Frequency = Dimension<FrequencyUnit>;

export type Resolution = Dimension<ResolutionUnit>;
