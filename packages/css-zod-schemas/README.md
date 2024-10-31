# @dotts/css-zod-schemas

Zod schemas for CSS properties based on the MDN docs including media features, units and more.

```shell
pnpm add -D @dotts/css-zod-schemas
```

## Usage
```ts
import { ratio } from "@dotts/css-zod-schemas";

const { success } = ratio.safeParse("1/1");
console.log(success); // => true
```


## Schemas

### Units
- [`absoluteLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#absolute_length_units)
- [`fontRelativeLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`viewportRelativeLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`relativeLengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`lengthUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [`resolutionUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)
- [`angleUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)
- [`timeUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/time)
- [`frequencyUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/frequency)
- [`percentageUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)
- [`flexUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value)
- `unit`

### Data Types
- [`transparentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color#transparent)
- [`standardColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)
- [`namedColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)
- [`systemColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color)
- [`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)
- [`integer`](https://developer.mozilla.org/en-US/docs/Web/CSS/integer)
- [`dimension`](https://developer.mozilla.org/en-US/docs/Web/CSS/dimension)
- [`percentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)
- [`ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/ratio)
- [`flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value)
- [`wideKeyword`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types#css-wide_keywords)
- `none`
- [`string`](https://developer.mozilla.org/en-US/docs/Web/CSS/string)
- [`url`](https://developer.mozilla.org/en-US/docs/Web/CSS/url_value)
- [`length`](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [`angle`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)
- [`time`](https://developer.mozilla.org/en-US/docs/Web/CSS/time)
- [`frequency`](https://developer.mozilla.org/en-US/docs/Web/CSS/frequency)
- [`resolution`](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)
- [`lengthPercentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/length-percentage)
- [`frequencyPercentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/frequency-percentage)
- [`anglePercentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle-percentage)
- [`timePercentage`](https://developer.mozilla.org/en-US/docs/Web/CSS/time-percentage)

### Media
- `mediaFeaturesLengthUnits`
- `mediaFeaturesResolutionUnits`
- [`mediaFeatures`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features)
- [`mediaOrOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`mediaAndOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`mediaNotOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`mediaOnlyOperator`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators)
- [`mediaBasicType`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types)
- [`mediaType`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_types)