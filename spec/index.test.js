const { sum, subtraction } = require('../index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
  expect(subtraction(2, 1)).toBe(1);
});