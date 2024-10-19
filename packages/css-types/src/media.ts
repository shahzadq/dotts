import type { z } from "zod";
import type {
  cssLengthMediaFeaturesUnits,
  cssResolutionMediaFeaturesUnits,
  cssMediaFeatures,
  cssMediaOrOperator,
  cssMediaNotOperator,
  cssMediaAndOperator,
  cssMediaOnlyOperator,
  cssMediaBasicType,
  cssMediaType,
} from "@dotts/css-zod-schemas";

export type CSSLengthMediaFeaturesUnits = z.infer<
  typeof cssLengthMediaFeaturesUnits
>;
export type CSSResolutionMediaFeaturesUnits = z.infer<
  typeof cssResolutionMediaFeaturesUnits
>;
export type CSSMediaFeatures = z.infer<typeof cssMediaFeatures>;

export type CSSMediaOrOperator = z.infer<typeof cssMediaOrOperator>;
export type CSSMediaAndOperator = z.infer<typeof cssMediaAndOperator>;
export type CSSMediaNotOperator = z.infer<typeof cssMediaNotOperator>;
export type CSSMediaOnlyOperator = z.infer<typeof cssMediaOnlyOperator>;

export type CSSMediaBasicType = z.infer<typeof cssMediaBasicType>;
export type CSSMediaType = z.infer<typeof cssMediaType>;
