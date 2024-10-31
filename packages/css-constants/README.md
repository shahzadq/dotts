# @dotts/css-constants

CSS constants for types and validation.

```shell
pnpm add -D @dotts/css-constants
```

## Usage
```ts
import { absoluteLengthUnits } from "@dotts/css-constants";

const px = "px";
console.log(absoluteLengthUnits.includes(px)); // => true
```

## Constants

### Data Types
- [`wideKeyword`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types#css-wide_keywords)
- `none`
- [`transparentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color#transparent)
- [`standardColors`](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)
- [`namedColors`](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color)
- [`systemColors`](https://developer.mozilla.org/en-US/docs/Web/CSS/system-color)
- [`currentColor`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword)

### Units
- [`absoluteLengthUnits`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#absolute_length_units)
- [`fontRelativeLengthUnits`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`viewportRelativeLengthUnits`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`relativeLengthUnits`](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
- [`lengthUnits`](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- [`resolutionUnits`](https://developer.mozilla.org/en-US/docs/Web/CSS/resolution)
- [`angleUnits`](https://developer.mozilla.org/en-US/docs/Web/CSS/angle)
- [`timeUnits`](https://developer.mozilla.org/en-US/docs/Web/CSS/time)
- [`frequencyUnits`](https://developer.mozilla.org/en-US/docs/Web/CSS/frequency)
- [`percentageUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage)
- [`flexUnit`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value)
- `units`