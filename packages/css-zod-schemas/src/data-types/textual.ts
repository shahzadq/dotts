import * as constants from "@dotts/css-constants";
import type { None, WideKeyword } from "@dotts/css-types";
import { typedZod } from "../utils";

export const wideKeyword = typedZod.enum<WideKeyword>(constants.wideKeywords);
export const none = typedZod.literal<None>(constants.none);
