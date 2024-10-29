import { z } from "zod";

export const CSSFontAbsoluteSize = z.enum([
  "xx-small",
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large",
  "xxx-large",
]);
