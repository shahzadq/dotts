import type { none, wideKeywords } from "@dotts/css-constants";
import type { ArrayElement } from "../utils";

export type WideKeyword = ArrayElement<typeof wideKeywords>;
export type None = typeof none;
