import { get } from '../index';

test('Get > single level nesting (array path)', () => {
  expect(get({ foo: 'bar' }, ['foo'])).toBe('bar');
});

test('Get > single level nesting (string path)', () => {
  expect(get({ foo: 'bar' }, 'foo')).toBe('bar');
});

test('Get > single level nesting (not found)', () => {
  expect(get({ foo: 'bar' }, 'bar')).toBe(undefined);
});

test('Get > layered nesting (array path)', () => {
  expect(get({ foo: { bar: { baz: 'qux' } } }, ['foo', 'bar', 'baz'])).toBe('qux');
});

test('Get > layered nesting (string dot path)', () => {
  expect(get({ foo: { bar: { baz: 'qux' } } }, 'foo.bar.baz')).toBe('qux');
});

test('Get > layered nesting (string complex path)', () => {
  expect(get({ foo: { 'bar-baz': { 'qux_qux': 'waldo' } } }, 'foo.bar-baz[qux_qux]')).toBe('waldo');
});

test('Get > layered nesting (not found)', () => {
  expect(get({ foo: { bar: { baz: 'qux' } } }, 'foo.baz.bar')).toBe(undefined);
});

