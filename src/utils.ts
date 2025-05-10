import { StringUtils } from "./types";

export const stringUtils: StringUtils = {
  capitalize: (input): string => {
    return input.length > 0
      ? input.charAt(0).toUpperCase() + input.slice(1)
      : "";
  },

  trim: (input): string => input.trim(),

  repeat: (input, times): string => input.repeat(times),

  toSnakeCase: (input): string =>
    input
      .trim()
      .split(/\s+/)
      .join("_")
      .toLowerCase(),

  toUpperCase: (input): string => input.toUpperCase(),

  toLowerCase: (input): string => input.toLowerCase(),

  isEmpty: (input): boolean => input.trim().length === 0,

  reverseString: (input): string =>
    input
      .split("")
      .reverse()
      .join(""),

  truncate: (input, length): string =>
    input.length > length ? input.slice(0, length) + "..." : input,

  removeSpaces: (input): string => input.replace(/\s+/g, ""),

  countWords: (input): number => {
    const trimmed = input.trim();
    return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  },

  startsWith: (input, search): boolean => input.startsWith(search),

  endsWith: (input, search): boolean => input.endsWith(search),

  replaceAll: (input, searchValue, replaceValue): string =>
    input.split(searchValue).join(replaceValue),
};
