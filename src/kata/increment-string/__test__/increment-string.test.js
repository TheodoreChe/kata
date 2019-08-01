import { incrementString } from '../index';

test('incrementString > string with number with lead zeroes', () => {
  expect(incrementString('foobar000')).toBe('foobar001');
});

test('incrementString > string with number and increment digit', () => {
  expect(incrementString('foobar999')).toBe('foobar1000');
});

test('incrementString > string with number with lead zeroes and increment digit', () => {
  expect(incrementString('foobar00999')).toBe('foobar01000');
});

test('incrementString > only string', () => {
  expect(incrementString('foo')).toBe('foo1');
});

test('incrementString > string with number', () => {
  expect(incrementString('foobar1')).toBe('foobar2');
});

test('incrementString > only number', () => {
  expect(incrementString('1')).toBe('2');
});

test('incrementString > only number with lead zeros', () => {
  expect(incrementString('009')).toBe('010');
});
