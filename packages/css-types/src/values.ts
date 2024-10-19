import type { z } from "zod";
import type { cssRatioValue } from "@dotts/css-zod-schemas";

export type CSSRatioValue = z.infer<typeof cssRatioValue>;
