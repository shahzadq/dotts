# @dotts/css-media-queries

CSS Media Query type-safe generation (inspired by [json2mq](https://github.com/akiran/json2mq)).

```shell
pnpm add @dotts/css-media-queries
```

## Usage
```ts
import { createMediaQuery } from "@dotts/css-media-queries";

// generate a media query
const query = createMediaQuery({
    type: "screen",
    minWidth: "100px",
    maxWidth: "1000px"
})

// use in css
const styles = css`
    background-color: red;

    @media ${query} {
        background-color: blue;
    }
`

// or use in js
const match = window.matchMedia(query);
```

### Type
To specify the device type for a query, use the `type` property which includes all non deprecated values.

### Advanced Queries
To generate a more advanced query, we provide a couple of different syntaxs for different user preferences.

Let's take the example query: `screen and (((min-width: 100px) and (max-width: 1000px)) or ((min-width: 1100px) and (max-width: 2000px))) and not (orientation: landscape)`

#### Object Syntax
Using object syntax, to generate the above query we would use:
```ts
import { createMediaQuery } from "@dotts/css-media-queries";

const query = createMediaQuery({
    type: "screen",
    or: [
        { minWidth: 100, maxWidth: 1000 },
        { minWidth: 1100, maxWidth: 2000 }
    ],
    not: {
        orientation: "landscape"
    }
})
```
Operators are nested and accept arrays of properties (note within a single feature group (i.e. `{ minWidth: 100, maxWidth: 1000 }`), all features will be joined with an `and` operator).

#### Functional Syntax
Using function syntax, to generatethe above query we would use:
```ts
import { createMediaQuery } from "@dotts/css-media-queries";

const query = createMediaQuery(({ and, or, not }) => and([
    {
        type: "screen"
    },
    or([
        { minWidth: 100, maxWidth: 1000 },
        { minWidth: 1100, maxWidth: 2000 }
    ]),
    not({ 
        orientation: "landscape"
     })
]))
```
In this syntax, we destructure helper functions from `createMediaQuery` and apply them as needed (note:  we don't need the top level `and` function as an array will be joined with `and` operators by default).

#### Keep in mind
For advanced queries it is better to remove redundant `and` operators and not excessively wrap queries otherwise the generated output will be unneccesarily wrapped in lots of brackets (this shouldn't effect the desired output).

### Recursion
Our functions are written recursively, meaning you create as in depth queries as you want.

```ts

import { createMediaQuery } from "@dotts/css-media-queries";

// if for some weird reason you wanted a not inside a not, you can!
// note: the createMediaQuery function isn't clever enough to cancel the not operators out so you'll end up with two of them
// expected output: screen and not (not (orientation: landscape))
const query = createMediaQuery(
    {
        type: "screen",
        not: {
            not: {
                orientation: "landscape",
                // you can keep going if you want...
            }
        }
    }
)
```

### Differences with json2mq
While the original inspiration for this package came from json2mq, there are a few differences in the way we implement our features:

1. Recursive function - As mentioned above, out function is recursive, so you can create complex queries easily.
2. The type property - json2mq uses separate properties to add type features to a query (for example to add `screen` you would add `{ screen: true }` to your query). We, however, use a single `type` property.
3. Complete type-safety - The main inspiration for writing this package was creating a type-safe json2mq. It is strongly recommended to use this package with typescript for autocomplete.

### Types
The types for CSS media features and operators come from [@dotts/css-types](https://github.com/shahzadq/dotts/blob/main/packages/css-types).