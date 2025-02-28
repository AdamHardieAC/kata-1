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
  },
  {
    symbol: "MDCLXVI",
    value: 1666
  },
  {
    symbol: "DCLXVI",
    value: 666
  },
  {
    symbol: "CLXVI",
    value: 166
  },
  {
    symbol: "LXVI",
    value: 66
  },
  {
    symbol: "XVI",
    value: 16
  },
  {
    symbol: "XL",
    value: 40
  },
  {
    symbol: "LX",
    value: 60
  },
  {
    symbol: "XC",
    value: 90
  },
  {
    symbol: "CC",
    value: 200
  },
  {
    symbol: "CD",
    value: 400
  },
  {
    symbol: "DCC",
    value: 700
  },
  {
    symbol: "CM",
    value: 900
  },
  {
    symbol: "MI",
    value: 1001
  },

];

testCases.forEach((numeral) => {
  test(`Roman Numeral ${numeral.symbol} equals ${numeral.value}`, () => {
    expect(RomanToArabic(numeral.symbol)).toBe(numeral.value);
  });
});