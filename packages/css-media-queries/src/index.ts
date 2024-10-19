import type { CSSMediaAndOperator, CSSMediaOrOperator } from "@dotts/css-types";
import { addBrackets, camelCaseToKebabCase } from "@dotts/utils/strings";
import { isDefined } from "@dotts/utils/typeguards";
import {
  mediaFeaturesSchema,
  operatorsSchema,
  type MediaFeatures,
} from "./schemas";
import type { MaybeArray, OverrideFeatures } from "./types";
import type { z } from "zod";

type Node = Partial<
  MediaFeatures & {
    and: Node[];
    or: Node[];
    not: MaybeArray<Node>;
  }
>;

const helpers = {
  and: (queries: Node["and"]) => ({ and: queries }),
  or: (queries: Node["or"]) => ({ or: queries }),
  not: (queries: Node["not"]) => ({ not: queries }),
};

export type MediaQuery =
  | MaybeArray<Node>
  | ((h: typeof helpers) => MaybeArray<Node>);

export type InitMediaQueriesConfig = {
  defaultUnits: OverrideFeatures;
};

export const initMediaQueries = (
  config: InitMediaQueriesConfig = {
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
  const parseMediaFeature = <F extends keyof MediaFeatures>(
    feature: F,
    value: MediaFeatures[F],
  ) => {
    const parse = (value: string) =>
      addBrackets(`${camelCaseToKebabCase(feature)}: ${value}`);

    // check if there are default units for numbers and if there are, apply them
    if (typeof value === "number" && feature in config.defaultUnits)
      return parse(
        value +
          config.defaultUnits[feature as keyof typeof config.defaultUnits],
      );

    return parse(value.toString());
  };

  const joinQueries = (
    queries: string[],
    join: CSSMediaAndOperator | CSSMediaOrOperator,
  ) => queries.join(` ${join} `);

  const parseNode = (
    node: Node | string,
    ctx?: {
      parentNode: z.infer<typeof operatorsSchema>;
    },
  ): string => {
    if (typeof node === "string") return node;

    if (
      typeof ctx !== "undefined" &&
      !operatorsSchema.safeParse(ctx.parentNode).success
    )
      return parseNode(node, { parentNode: "and" });

    const features = Object.entries(node).filter(([, value]) =>
      isDefined(value),
    ) as [keyof typeof node, number | MaybeArray<Node>][];
    // this condition helps with single objects being passed without a parent node - this seprates them out and adds a parent "and" node for correct brackets
    if (features.length > 1 && typeof ctx?.parentNode === "undefined")
      return parseNode({
        and: features.map(([key, value]) => ({ [key]: value })),
      });

    const queries = features
      .map(([key, value]) => {
        switch (key) {
          case "type": {
            return mediaFeaturesSchema.shape.type.safeParse(value).data;
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
            const { data } = mediaFeaturesSchema.shape[key].safeParse(value);
            if (typeof data === "undefined") return undefined;
            return parseMediaFeature(key, data);
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

export type { MediaFeatures };
