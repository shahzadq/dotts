import type {
  AnglePercentage,
  FrequencyPercentage,
  LengthPercentage,
  TimePercentage,
} from "@dotts/css-types";
import { typedZod } from "../utils";
import { percentage } from "./numeric";
import { angle, frequency, length, time } from "./quantities";

export const lengthPercentage = typedZod.union<LengthPercentage>([
  length,
  percentage,
]);

export const frequencyPercentage = typedZod.union<FrequencyPercentage>([
  frequency,
  percentage,
]);

export const anglePercentage = typedZod.union<AnglePercentage>([
  angle,
  percentage,
]);

export const timePercentage = typedZod.union<TimePercentage>([
  time,
  percentage,
]);
