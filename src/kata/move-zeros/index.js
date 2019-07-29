// @flow

/**
 Write an algorithm that takes an array and moves all of the zeros to the end,
 preserving the order of the other elements.
 */

type MoveZerosType = (arr: Array<any>) => Array<any>;

export const moveZeros:MoveZerosType = arr => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));