import type { z } from "zod";
import type { OverrideFeatures } from "./types";
import * as schemas from "./schemas";
import { isDefined, isEmptyObject } from "@dotts/utils/typeguards";
import { addBrackets, camelCaseToKebabCase } from "@dotts/utils/strings";

type DefaultUnits = OverrideFeatures;
type Config = {
  defaultUnits: DefaultUnits;
};

const defaults: Readonly<Config> = {
  defaultUnits: {
    width: "px",
    minWidth: "px",
    maxWidth: "px",
    height: "px",
    minHeight: "px",
    maxHeight: "px",
    resolution: "dpi",
    minResolution: "dpi",
    maxResolution: "dpi",
  },
};

type Query = z.infer<typeof schemas.query>;
type Features = z.infer<typeof schemas.features>;
type Feature = keyof Features;
type FeaturesAndOperators = z.infer<typeof schemas.featuresAndOperators>;
type Operators = z.infer<typeof schemas.operators>;
type Operator = keyof Operators;

type ParseQueryContext = {
  parentOperator: Operator;
};

export const initMediaQueries = (config: Config = defaults) => {
  const _defaultUnits = { ...defaults.defaultUnits, ...config.defaultUnits };

  const _isFeature = (tbd: string): tbd is Feature =>
    tbd in schemas.features.shape;

  const _hasDefaultUnit = (tbd: string): tbd is keyof typeof _defaultUnits =>
    tbd in _defaultUnits;

  const _reduceQueries = (
    queries: FeaturesAndOperators[],
    ctx?: ParseQueryContext,
  ) =>
    queries.reduce<string[]>((acc, v) => {
      if (typeof v === "string") acc.push(v);
      else if (!isEmptyObject(v)) acc.push(_parseQuery(v, ctx));
      return acc;
    }, []);

  const _joinQueries = (queries: string[], join: Exclude<Operator, "not">) =>
    queries.join(` ${join} `);

  const _parseQuery = (
    queries: FeaturesAndOperators,
    ctx?: ParseQueryContext,
  ): string => {
    if (typeof queries === "string") return queries;

    const filteredQueries = Object.entries(queries).filter(([, value]) =>
      typeof value === "object"
        ? isDefined(value) && !isEmptyObject(value)
        : isDefined(value),
    );

    if (
      filteredQueries.length > 1 &&
      typeof ctx?.parentOperator === "undefined"
    )
      return _parseQuery({
        and: filteredQueries.map(([key, value]) => ({
          [key]: value,
        })),
      });

    const parsedQueries = filteredQueries.reduce<string[]>((acc, [key]) => {
      if (key === "type") {
        if (typeof queries.type !== "undefined") {
          acc.push(queries.type);
        }
      } else if (key === "and" || key === "or") {
        const value = queries[key];

        if (typeof value !== "undefined") {
          const resolvedQueries = _reduceQueries(value, {
            parentOperator: key,
          });

          const query = _joinQueries(resolvedQueries, key);

          acc.push(
            value.length > 1 && ctx?.parentOperator
              ? addBrackets(query)
              : query,
          );
        }
      } else if (key === "not") {
        const value = queries.not;

        if (typeof value !== "undefined") {
          const isArray = Array.isArray(value);

          const resolvedValue = isArray ? value : [value];

          const resolvedQueries = _reduceQueries(resolvedValue, {
            parentOperator: "not",
          });

          const query = _joinQueries(resolvedQueries, "and");

          const queryWithNot = `not ${resolvedValue.length > 1 ? addBrackets(query) : query}`;

          acc.push(
            ctx?.parentOperator === "not"
              ? addBrackets(queryWithNot)
              : queryWithNot,
          );
        }
      } else if (_isFeature(key)) {
        const value = queries[key];

        if (typeof value !== "undefined") {
          const _parse = (value: string | number) =>
            addBrackets(`${camelCaseToKebabCase(key)}: ${value}`);

          if (typeof value === "number" && _hasDefaultUnit(key))
            acc.push(_parse(value + _defaultUnits[key]));
          else acc.push(_parse(value));
        }
      }

      return acc;
    }, []);

    const query = _joinQueries(parsedQueries, "and");

    return parsedQueries.length > 1 &&
      typeof ctx?.parentOperator !== "undefined"
      ? addBrackets(query)
      : query;
  };

  return (query: Query) => {
    const parsedQuery = schemas
      .retainObjectOrder(schemas.query)
      .safeParse(query).data;

    if (typeof parsedQuery === "undefined")
      throw new Error(
        "That doesn't look like a valid query. Check out our docs to ensure you're passing a correct query.",
      );

    const resolvedQuery =
      typeof parsedQuery === "function"
        ? parsedQuery({
            and: (queries) => ({ and: queries }),
            or: (queries) => ({ or: queries }),
            not: (queries) => ({ not: queries }),
          })
        : parsedQuery;

    if (Array.isArray(resolvedQuery))
      return _parseQuery({ and: resolvedQuery });

    return _parseQuery(resolvedQuery);
  };
};

export const createMediaQuery = initMediaQueries();
