import type {
  CSSMediaAndOperator,
  CSSMediaNotOperator,
  CSSMediaOrOperator,
} from "@dotts/css-types";
import { addBrackets, camelCaseToKebabCase } from "@dotts/utils/strings";
import { isDefined, isEmptyObject } from "@dotts/utils/typeguards";
import { nodeSchema, type MediaFeatures } from "./schemas";
import type { MaybeArray, OverrideFeatures } from "./types";
import { z } from "zod";

type Node = z.infer<typeof nodeSchema>;

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
    const parse = (value: string | number) =>
      addBrackets(`${camelCaseToKebabCase(feature)}: ${value}`);

    // check if there are default units for numbers and if there are, apply them
    if (typeof value === "number" && feature in config.defaultUnits)
      return parse(
        value +
          config.defaultUnits[feature as keyof typeof config.defaultUnits],
      );

    return parse(value);
  };

  const joinQueries = (
    queries: string[],
    join: CSSMediaAndOperator | CSSMediaOrOperator,
  ) => queries.join(` ${join} `);

  const parseNode = (
    node: Node | string,
    ctx?: {
      parentNode:
        | CSSMediaNotOperator
        | CSSMediaAndOperator
        | CSSMediaOrOperator;
    },
  ): string => {
    // a node that is a string is assumed to be an already processed node so we return it as it is
    if (typeof node === "string") return node;
    // remove any entries whose value that has explicitly been set to undefined
    const features = Object.entries(node).filter(([, value]) =>
      isDefined(value),
    );
    // this condition helps with single objects being passed without a parent node - this seprates them out and adds a parent "and" node for correct brackets
    if (features.length > 1 && typeof ctx?.parentNode === "undefined")
      return parseNode({
        and: features.map(([key, value]) => ({ [key]: value })),
      });

    const queries = features
      .map(([k, value]) => {
        const key = k as keyof Node;
        switch (key) {
          case "type": {
            const data = value as unknown as Required<Node>[typeof key];
            return data;
          }

          case "and":
          case "or": {
            const data = value as unknown as Required<Node>[typeof key];

            const queries = data
              .map((n) =>
                !isEmptyObject(n)
                  ? parseNode(n, { parentNode: key })
                  : undefined,
              )
              .filter(isDefined);

            const query = joinQueries(queries, key);

            return queries.length > 1 && ctx?.parentNode
              ? addBrackets(query)
              : query;
          }

          case "not": {
            const data = value as unknown as Required<Node>[typeof key];

            const isArray = Array.isArray(data);

            const values = isArray ? data : [data];

            const queries = values
              .map((n) =>
                !isEmptyObject(n)
                  ? parseNode(n, { parentNode: "not" })
                  : undefined,
              )
              .filter(isDefined);

            const query = joinQueries(queries, "and");

            const queryWithNot = `not ${queries.length > 1 ? addBrackets(query) : query}`;

            return ctx?.parentNode === "not"
              ? addBrackets(queryWithNot)
              : queryWithNot;
          }

          default: {
            const data = value as unknown as Required<Node>[typeof key];
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

    if (Array.isArray(resolvedQuery)) {
      const { data } = z.array(nodeSchema).safeParse(resolvedQuery);
      if (typeof data === "undefined") return "";

      return parseNode({
        and: data,
      });
    }

    const { data, error } = nodeSchema.safeParse(resolvedQuery);
    console.log(error);
    if (typeof data === "undefined") return "";

    return parseNode(data);
  };
};

export const createMediaQuery = initMediaQueries();

export type { MediaFeatures };
