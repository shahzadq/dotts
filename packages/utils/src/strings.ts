export const addBrackets = (str: string) => `(${str})`;

export const camelCaseToKebabCase = (str: string) =>
  str
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
