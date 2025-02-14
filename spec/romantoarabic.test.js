const { RomanToArabic } = require('../index');

test('Roman Numeral empty string equals 0', () => {
  expect(RomanToArabic('')).toBe(0);
});

const testCases = [
  {
    symbol: "I",
    value: 1
  },
  {
    symbol: "V",
    value: 5
  },
  {
    symbol: "X",
    value: 10
  },
  {
    symbol: "L",
    value: 50
  },
  {
    symbol: "C",
    value: 100
  },
  {
    symbol: "D",
    value: 500
  },
  {
    symbol: "M",
    value: 1000
  },
  {
    symbol: "II",
    value: 2
  },
  {
    symbol: "IV",
    value: 4
  },
  {
    symbol: "VI",
    value: 6
  },
  {
    symbol: "VII",
    value: 7
  }
];

testCases.forEach((numeral) => {
  test(`Roman Numeral ${numeral.symbol} equals ${numeral.value}`, () => {
    expect(RomanToArabic(numeral.symbol)).toBe(numeral.value);
  });
});
