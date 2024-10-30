export type WideKeyword = "initial" | "inherit" | "revert" | "unset";
export type NoneKeyword = "none";

export type CustomIndent = string;
export type DashedIndent = `--${CustomIndent}`;

export type String = `"${string}"` | `'${string}'`;

export type Url = `url(${string})`;
