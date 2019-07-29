import { moveZeros } from '../index';

test('moveZeros > numbers', () => {
  expect(
    JSON.stringify(moveZeros([1,5,0,4,3,7,0,5,0,7]))
  ).toBe(
    JSON.stringify([1,5,4,3,7,5,7,0,0,0])
  );
});

test('moveZeros > any', () => {
  expect(
    JSON.stringify(moveZeros(['a','b',0,{},0,null,9,[]]))
  ).toBe(
    JSON.stringify(['a','b',{},null,9,[],0,0])
  );
});