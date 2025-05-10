
export type UnaryStringFunction = (input: string) => string;


export type RepeatFunction = (input: string, times: number) => string;


export type TruncateFunction = (input: string, length: number) => string;


export type WordCountFunction = (input: string) => number;


export type PredicateFunction = (input: string) => boolean;


export type TwoArgStringPredicate = (input: string, search: string) => boolean;


export type ReplaceAllFunction = (
  input: string,
  searchValue: string,
  replaceValue: string
) => string;


export interface StringUtils {
  capitalize: UnaryStringFunction;
  trim: UnaryStringFunction;
  repeat: RepeatFunction;
  toSnakeCase: UnaryStringFunction;
  toUpperCase: UnaryStringFunction;
  toLowerCase: UnaryStringFunction;
  isEmpty: PredicateFunction;
  reverseString: UnaryStringFunction;
  truncate: TruncateFunction;
  removeSpaces: UnaryStringFunction;
  countWords: WordCountFunction;
  startsWith: TwoArgStringPredicate;
  endsWith: TwoArgStringPredicate;
  replaceAll: ReplaceAllFunction;
}
