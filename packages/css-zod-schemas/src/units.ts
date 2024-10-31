import type {
  FrequencyUnit,
  PercentageUnit,
  AbsoluteLengthUnit,
  AngleUnit,
  FontRelativeLengthUnit,
  LengthUnit,
  RelativeLengthUnit,
  ResolutionUnit,
  TimeUnit,
  ViewportRelativeLengthUnit,
  FlexUnit,
  Unit,
} from "@dotts/css-types";
import * as constants from "@dotts/css-constants";
import { typedZod } from "./utils";

export const absoluteLengthUnit = typedZod.enum<AbsoluteLengthUnit>(
  constants.absoluteLengthUnits,
);
export const fontRelativeLengthUnit = typedZod.enum<FontRelativeLengthUnit>(
  constants.fontRelativeLengthUnits,
);
export const viewportRelativeLengthUnit =
  typedZod.enum<ViewportRelativeLengthUnit>(
    constants.viewportRelativeLengthUnits,
  );
export const relativeLengthUnit = typedZod.enum<RelativeLengthUnit>(
  constants.relativeLengthUnits,
);
export const lengthUnit = typedZod.enum<LengthUnit>(constants.lengthUnits);

export const resolutionUnit = typedZod.enum<ResolutionUnit>(
  constants.resolutionUnits,
);

export const angleUnit = typedZod.enum<AngleUnit>(constants.angleUnits);

export const timeUnit = typedZod.enum<TimeUnit>(constants.timeUnits);

export const frequencyUnit = typedZod.enum<FrequencyUnit>(
  constants.frequencyUnits,
);

export const percentageUnit = typedZod.literal<PercentageUnit>(
  constants.percentageUnit,
);

export const flexUnit = typedZod.literal<FlexUnit>(constants.flexUnit);

export const unit = typedZod.enum<Unit>(constants.units);
