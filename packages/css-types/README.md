# @dotts/css-types

CSS type definitions based on the MDN docs including media features, units and more.

```shell
pnpm add -D @dotts/css-types
```

## Usage
```ts
import { CSSRatioValue } from "@dotts/css-types";
```

## Types

### Values
- [`CSSRatioValue`](https://developer.mozilla.org/en-US/docs/Web/CSS/ratio)

### Units
- [`CSSAbsoluteUnitLength`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#absolute_length_units)
- [`CSSFontRelativeUnitLength`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`CSSViewportRelativeUnitLength`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`CSSRelativeLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`CSSLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [`CSSResolutionUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)
- [`CSSAngleUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)
- [`CSSTimeUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/time)
- [`CSSUnit`](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- `CSSValueWithUnit`

### Media
- `CSSLengthMediaFeaturesUnits`
- `CSSResolutionMediaFeaturesUnits`
- [`CSSMediaFeatures`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features)
- [`CSSMediaOrOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`CSSMediaAndOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`CSSMediaNotOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`CSSMediaOnlyOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`CSSMediaBasicType`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types)
- [`CSSMediaType`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types)