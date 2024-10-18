import type {
  CSSLengthMediaFeaturesUnits,
  CSSMediaAndOperator,
  CSSMediaFeatures,
  CSSMediaOrOperator,
  CSSMediaType,
  CSSResolutionMediaFeaturesUnits,
} from "@dotts/css-types";
import { addBrackets, camelCaseToKebabCase } from "@dotts/utils/strings";
import { isDefined } from "@dotts/utils/typeguards";

type MaybeArray<T> = T | T[];

// these are features we want to extend the types for
type OverrideFeatures = CSSLengthMediaFeaturesUnits &
  CSSResolutionMediaFeaturesUnits;
// override the above features and replace, also add type property
export type MediaFeatures = Omit<CSSMediaFeatures, keyof OverrideFeatures> & {
  [Key in keyof OverrideFeatures]: CSSMediaFeatures[Key] | number;
} & {
  type: CSSMediaType;
};

type Operators = {
  and: Node[];
  or: Node[];
  not: MaybeArray<Node>;
};
// a node represents a property and its value in the object - either an operator or a group of features or a string
// strings represent previously parsed nodes - although they technically can be anything
// nodes are recursive (nodes can contain other nodes)
// example - { and: [{or: [{}, {}]}, {or: ...}] } - and, or are nodes as are the feature groups they contain
type Node = Partial<MediaFeatures & Operators> | string;

const helpers = {
  and: (queries: Operators["and"]) => ({ and: queries }),
  or: (queries: Operators["or"]) => ({ or: queries }),
  not: (queries: Operators["not"]) => ({ not: queries }),
};

export type MediaQuery =
  | MaybeArray<Node>
  | ((h: typeof helpers) => MaybeArray<Node>);

export const initMediaQueries = (
  { defaultUnits }: { defaultUnits: OverrideFeatures } = {
    defaultUnits: {
      width: "px",
      minWidth: "px",
      maxWidth: "px",
      height: "px",
      minHeight: "px",
      maxHeight: "px",
      resolution: "dpi",
      maxResolution: "dpi",
      minResolution: "dpi",
    },
  },
) => {
  const defaultUnitsKeys = Object.keys(defaultUnits);
  const defaultUnitsKeysIncludes = (
    tbd: string,
  ): tbd is keyof typeof defaultUnits => tbd in defaultUnitsKeys;

  const parseMediaFeature = <F extends keyof MediaFeatures>(
    feature: F,
    value: MediaFeatures[F],
  ) => {
    const parse = (value: string) =>
      addBrackets(`${camelCaseToKebabCase(feature)}: ${value}`);

    // check if there are default units for numbers and if there are, apply them
    if (typeof value === "number" && defaultUnitsKeysIncludes(feature))
      return parse(value + defaultUnits[feature]);

    return parse(value.toString());
  };

  const joinQueries = (
    queries: string[],
    join: CSSMediaAndOperator | CSSMediaOrOperator,
  ) => queries.join(` ${join} `);

  const parseNode = (
    node: Node,
    ctx?: {
      parentNode: keyof Operators;
    },
  ): string => {
    if (typeof node === "string") return node;

    const keys = Object.keys(node).filter((key) =>
      isDefined(node[key as keyof typeof node]),
    ) as (keyof typeof node)[];
    // this condition helps with single objects being passed without a parent node - this seprates them out and adds a parent "and" node for correct brackets
    if (keys.length > 1 && typeof ctx?.parentNode === "undefined")
      return parseNode({ and: keys.map((key) => ({ [key]: node[key] })) });

    const queries = keys
      .map((key) => {
        const value = node[key];

        switch (key) {
          case "type": {
            if (typeof value !== "string") return undefined;
            return value;
          }

          case "and":
          case "or": {
            if (!Array.isArray(value)) return undefined;

            const queries = value.map((n) => parseNode(n, { parentNode: key }));

            const query = joinQueries(queries, key);

            return queries.length > 1 && ctx?.parentNode
              ? addBrackets(query)
              : query;
          }

          case "not": {
            const isArray = Array.isArray(value);

            if (typeof value !== "object" && !isArray) return undefined;

            const values = isArray ? value : [value];

            const queries = values.map((n) =>
              parseNode(n, { parentNode: "not" }),
            );

            const query = joinQueries(queries, "and");

            const queryWithNot = `not ${queries.length > 1 ? addBrackets(query) : query}`;

            return ctx?.parentNode === "not"
              ? addBrackets(queryWithNot)
              : queryWithNot;
          }

          default: {
            if (typeof value !== "string" && typeof value !== "number")
              return undefined;
            return parseMediaFeature(
              key,
              value as CSSMediaFeatures[typeof key],
            );
          }
        }
      })
      .filter(isDefined);

    const query = joinQueries(queries, "and");

    return queries.length > 1 && ctx?.parentNode ? addBrackets(query) : query;
  };

  return (query: MediaQuery) => {
    const resolvedQuery = typeof query === "function" ? query(helpers) : query;

    if (Array.isArray(resolvedQuery))
      return parseNode({
        and: resolvedQuery,
      });

    return parseNode(resolvedQuery);
  };
};

export const createMediaQuery = initMediaQueries();
