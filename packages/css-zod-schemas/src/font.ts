import { fontAbsoluteSizes } from "@dotts/css-constants";
import type { FontAbsoluteSize } from "@dotts/css-types";
import { typedZod } from "./utils";

export const fontAbsoluteSize =
  typedZod.enum<FontAbsoluteSize>(fontAbsoluteSizes);
