// @flow

/**
 Your job is to write a function which increments a string, to create a new string.

 If the string already ends with a number, the number should be incremented by 1.
 If the string does not end with a number. the number 1 should be appended to the new string.
 */

type IncrementStringType = (arr: string) => string;

export const incrementString:IncrementStringType = string => string.replace(/[0-8]?9*$/, m => String(+m + 1));
