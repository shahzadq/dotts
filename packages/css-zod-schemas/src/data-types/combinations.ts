import { z } from "zod";
import { cssAngle, cssFrequency, cssLength, cssTime } from "./quantities";
import { cssPercentage } from "./numeric";

export const cssLengthPercentage = z.union([cssLength, cssPercentage]);
export const cssFrequencyPecentage = z.union([cssFrequency, cssPercentage]);
export const cssAnglePercentage = z.union([cssAngle, cssPercentage]);
export const cssTimePercentage = z.union([cssTime, cssPercentage]);
