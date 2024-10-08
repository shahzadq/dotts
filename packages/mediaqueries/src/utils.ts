export const getKeys = <O extends object>(object: O) =>
  Object.keys(object) as (keyof O)[];

export const addBrackets = (str: string) => `(${str})`;

export const camelCaseToKebabCase = (str: string) =>
  str
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();

export const isDefined = <T>(arg?: T): arg is T => typeof arg !== "undefined";
