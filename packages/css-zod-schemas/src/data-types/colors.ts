import { typedZod } from "../utils";
import type {
  CurrentColor,
  NamedColor,
  StandardColor,
  SystemColor,
  TransparentColor,
} from "@dotts/css-types";

import * as constants from "@dotts/css-constants";

export const transparentColor = typedZod.literal<TransparentColor>(
  constants.transparentColor,
);

export const standardColor = typedZod.enum<StandardColor>(
  constants.standardColors,
);

export const namedColor = typedZod.enum<NamedColor>(constants.namedColors);

export const systemColor = typedZod.enum<SystemColor>(constants.systemColors);

export const currentColor = typedZod.literal<CurrentColor>(
  constants.currentColor,
);
