import {
  cssAngleUnit,
  cssFrequencyUnit,
  cssLengthUnit,
  cssResolutionUnit,
  cssTimeUnit,
} from "../units";
import { cssDimension } from "./numeric";

export const cssLength = cssDimension(cssLengthUnit);
export const cssAngle = cssDimension(cssAngleUnit);
export const cssTime = cssDimension(cssTimeUnit);
export const cssFrequency = cssDimension(cssFrequencyUnit);
export const cssResolution = cssDimension(cssResolutionUnit);
