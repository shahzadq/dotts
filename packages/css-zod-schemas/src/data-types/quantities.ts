import {
  angleUnit,
  frequencyUnit,
  lengthUnit,
  resolutionUnit,
  timeUnit,
} from "../units";
import { dimension } from "./numeric";

export const length = dimension(lengthUnit);

export const angle = dimension(angleUnit);

export const time = dimension(timeUnit);

export const frequency = dimension(frequencyUnit);

export const resolution = dimension(resolutionUnit);
