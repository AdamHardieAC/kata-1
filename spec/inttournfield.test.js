const { IntToUrnfield } = require('../index');

test('Urnfield 0 equals empty', () => {
  expect(IntToUrnfield(0)).toBe('');
});

test('Urnfield 1 equals /', () => {
  expect(IntToUrnfield(1)).toBe('/');
});

test('Urnfield 2 equals //', () => {
  expect(IntToUrnfield(2)).toBe('//');
});

test('Urnfield 5 equals ~', () => {
  expect(IntToUrnfield(5)).toBe('~');
});

test('Urnfield 10 equals ~~', () => {
  expect(IntToUrnfield(10)).toBe('~~');
});

test('Urnfield 6 equals /~', () => {
  expect(IntToUrnfield(6)).toBe('/~');
});

test('Urnfield 7 equals //~', () => {
  expect(IntToUrnfield(7)).toBe('//~');
});

test('Urnfield 11 equals /~~', () => {
  expect(IntToUrnfield(11)).toBe('/~~');
});

test('Urnfield 12 equals //~~', () => {
  expect(IntToUrnfield(12)).toBe('//~~');
});