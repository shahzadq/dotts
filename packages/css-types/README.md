# @dotts/css-types

CSS type definitions based on the MDN docs including media features, units and more.

```shell
pnpm add -D @dotts/css-types
```

## Usage
```ts
import type { Ratio } from "@dotts/css-types";

const ratio: Ratio = "1/1"; // valid type
```

## Types

### Units
- [`AbsoluteLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#absolute_length_units)
- [`FontRelativeLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`ViewportRelativeLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`RelativeLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`LengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [`ResolutionUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)
- [`AngleUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)
- [`TimeUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/time)
- [`FrequencyUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/frequency)
- [`PercentageUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)
- [`FlexUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value)
- `Unit`

### Data Types
- [`TransparentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color#transparent)
- [`StandardColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)
- [`NamedColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)
- [`SystemColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color)
- [`CurrentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)
- [`Integer`](https://developer.mozilla.org/en-US/docs/Web/CSS/integer)
- [`Dimension`](https://developer.mozilla.org/en-US/docs/Web/CSS/dimension)
- [`Percentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)
- [`Ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/ratio)
- [`Flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value)
- [`WideKeyword`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types#css-wide_keywords)
- `None`
- [`String`](https://developer.mozilla.org/en-US/docs/Web/CSS/string)
- [`Url`](https://developer.mozilla.org/en-US/docs/Web/CSS/url_value)
- [`Length`](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [`Angle`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)
- [`Time`](https://developer.mozilla.org/en-US/docs/Web/CSS/time)
- [`Frequency`](https://developer.mozilla.org/en-US/docs/Web/CSS/frequency)
- [`Resolution`](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)
- [`LengthPercentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage)
- [`FrequencyPercentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/frequency-percentage)
- [`AnglePercentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle-percentage)
- [`TimePercentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/time-percentage)

### Media
- `MediaFeaturesLengthUnits`
- `MediaFeaturesResolutionUnits`
- [`MediaFeatures`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features)
- [`MediaOrOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`MediaAndOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`MediaNotOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`MediaOnlyOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`MediaBasicType`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types)
- [`MediaType`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types)