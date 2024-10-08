import type {
  CSSMediaFeatures,
  CSSMediaType,
  CSSUnit,
  WithUnit,
} from "@cssdotts/types";
import { addBrackets, camelCaseToKebabCase, getKeys, isDefined } from "./utils";
import type { KeysMatching } from "./types";

type OverrideKeys = KeysMatching<CSSMediaFeatures, WithUnit<CSSUnit>>;

type WithUnitExtended<K extends OverrideKeys> = CSSMediaFeatures[K] | number;

const defaultUnits = {
  width: "px",
  maxWidth: "px",
  minWidth: "px",
  height: "px",
  maxHeight: "px",
  minHeight: "px",
  resolution: "dpi",
  maxResolution: "dpi",
  minResolution: "dpi",
} as const satisfies Record<OverrideKeys, CSSUnit>;

const defaultUnitsFeatures = Object.keys(defaultUnits);

export type MediaFeatures = Omit<CSSMediaFeatures, OverrideKeys> &
  Record<OverrideKeys, WithUnitExtended<OverrideKeys>> & {
    type: CSSMediaType;
  };

export type MediaOperators = {
  and: MediaQueries[];
  or: MediaQueries[];
  not: MediaQueries[];
};

export type MediaQueries = Partial<MediaFeatures & MediaOperators> | string;
type Queries = MediaQueries | ((h: typeof helpers) => MediaQueries);

const helpers = {
  and: (...queries: MediaQueries[]) => ({ and: queries }),
  or: (...queries: MediaQueries[]) => ({ or: queries }),
  not: (...queries: MediaQueries[]) => ({ not: queries }),
} as const;

const joins = {
  and: " and ",
  or: " or ",
} as const;

const parseQueries = (
  queries: Queries,
  config: { hasParentNode?: boolean } = {},
): string => {
  // if the query is a function, run it
  const node = typeof queries === "function" ? queries(helpers) : queries;
  // if a node is a string, we assumes it an already parsed query
  if (typeof node === "string") return node;
  // extract all the keys and filter out anything that doesn't have a defined value
  const keys = getKeys(node).filter((key) => isDefined(node[key]));

  const query = keys
    .map((key) => {
      const value = node[key];

      switch (key) {
        case "type": {
          if (typeof value !== "string") return undefined;
          return value;
        }

        case "and":
        case "or":
        case "not": {
          if (!Array.isArray(value)) return undefined;

          const queries = value.map((query) =>
            parseQueries(query, { hasParentNode: true }),
          );

          const query = `${key === "not" ? "not " : ""}${queries.join(joins[key === "not" ? "and" : key])}`;

          return queries.length > 1 && config.hasParentNode
            ? addBrackets(query)
            : query;
        }

        default: {
          // features
          if (typeof value !== "string" && typeof value !== "number")
            return undefined;

          let parsedValue = value;

          if (typeof value === "number" && defaultUnitsFeatures.includes(key))
            parsedValue = `${value}${defaultUnits[key as keyof typeof defaultUnits]}`;

          return addBrackets(`${camelCaseToKebabCase(key)}: ${parsedValue}`);
        }
      }
    })
    .filter(isDefined)
    .join(joins.and);

  return keys.length > 1 && config.hasParentNode ? addBrackets(query) : query;
};

export const createMediaQuery = (...queries: Queries[]) => {
  if (queries.length === 1 && queries[0]) return parseQueries(queries[0]);
  return parseQueries({
    and: queries.map((q) => (typeof q === "function" ? q(helpers) : q)),
  });
};
