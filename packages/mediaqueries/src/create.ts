import type {
  CSSLengthMediaFeaturesUnits,
  CSSMediaAndOperator,
  CSSMediaFeatures,
  CSSMediaOrOperator,
  CSSMediaType,
  CSSResolutionMediaFeaturesUnits,
} from "@cssdotts/types";
import { addBrackets, camelCaseToKebabCase, getKeys, isDefined } from "./utils";

type MaybeArray<T> = T | T[];

type FeaturesToOverride = CSSLengthMediaFeaturesUnits &
  CSSResolutionMediaFeaturesUnits;

const defaultFeatureUnits = {
  width: "px",
  minWidth: "px",
  maxWidth: "px",
  height: "px",
  minHeight: "px",
  maxHeight: "px",
  resolution: "dpi",
  maxResolution: "dpi",
  minResolution: "dpi",
} as const satisfies FeaturesToOverride;

export type MediaFeatures = Omit<CSSMediaFeatures, keyof FeaturesToOverride> & {
  [Key in keyof FeaturesToOverride]: CSSMediaFeatures[Key] | number;
} & {
  type: CSSMediaType;
};

type MediaOperators = {
  and: Node[];
  or: Node[];
  not: MaybeArray<Node>;
};

type Node = Partial<MediaFeatures & MediaOperators> | string;

const helpers = {
  and: (queries: MediaOperators["and"]) => ({ and: queries }),
  or: (queries: MediaOperators["or"]) => ({ or: queries }),
  not: (queries: MediaOperators["not"]) => ({ not: queries }),
};

export type MediaQuery =
  | MaybeArray<Node>
  | ((h: typeof helpers) => MaybeArray<Node>);

const defaultFeatureUnitsKeys = Object.keys(defaultFeatureUnits);
const defaultFeatureUnitsIncludesKey = (
  tbd: string,
): tbd is keyof typeof defaultFeatureUnits =>
  defaultFeatureUnitsKeys.includes(tbd);

const parseMediaFeature = <F extends keyof MediaFeatures>(
  feature: F,
  value: MediaFeatures[F],
) => {
  const parse = (value: string) =>
    addBrackets(`${camelCaseToKebabCase(feature)}: ${value}`);

  if (typeof value === "number" && defaultFeatureUnitsIncludesKey(feature))
    return parse(value + defaultFeatureUnits[feature]);

  return parse(value.toString());
};

const parseNode = (
  node: Node,
  config: { hasParentNode: boolean } = { hasParentNode: false },
): string => {
  if (typeof node === "string") return node;

  const joinAndAddBrackets = (
    queries: string[],
    { joinWith }: { joinWith: CSSMediaAndOperator | CSSMediaOrOperator },
  ) => {
    const query = queries.join(` ${joinWith} `);

    // console.log({ query, ...config });

    return config.hasParentNode && queries.length > 1
      ? addBrackets(query)
      : query;
  };

  const keys = getKeys(node).filter((key) => isDefined(node[key]));

  if (keys.length > 1 && !config.hasParentNode)
    return parseNode({ and: keys.map((key) => ({ [key]: node[key] })) });

  //   console.log({ keys, ...config });

  return joinAndAddBrackets(
    keys
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

            return joinAndAddBrackets(
              value.map((n) => parseNode(n, { hasParentNode: true })),
              {
                joinWith: key,
              },
            );
          }

          case "not": {
            if (typeof value === "number" || typeof value === "undefined")
              return undefined;

            const addNot = (query: string) => `not ${query}`;

            if (!Array.isArray(value))
              return addNot(parseNode(value, { hasParentNode: true }));

            return addNot(
              joinAndAddBrackets(
                value.map((n) => parseNode(n, { hasParentNode: true })),
                { joinWith: "and" },
              ),
            );
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
      .filter(isDefined),
    { joinWith: "and" },
  );
};

export const createMediaQuery = (query: MediaQuery) => {
  const resolvedQuery = typeof query === "function" ? query(helpers) : query;

  if (Array.isArray(resolvedQuery)) return parseNode({ and: resolvedQuery });

  return parseNode(resolvedQuery);
};
