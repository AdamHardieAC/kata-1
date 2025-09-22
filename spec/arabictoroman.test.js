const ArabicToRoman = require('../src/modules/ArabicToRoman');
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
    symbol: "III",
    value: 3
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
    symbol: "IX",
    value: 9
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
    symbol: "XIV",
    value: 14
  },
  {
    symbol: "XIX",
    value: 19
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
    symbol: "D",
    value: 500
  },
  {
    symbol: "DC",
    value: 600
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
    symbol: "CMXCIX",
    value: 999
  },
  {
    symbol: "MI",
    value: 1001
  },
  {
    symbol: "MCM",
    value: 1900
  },
  {
    symbol: "MCLXIV",
    value: 1164
  },
  {
    symbol: "CCI",
    value: 201
  },
  {
    symbol: "MDCCLXIV",
    value: 1764
  },
  {
    symbol: "MMMCMXCIX",
    value: 3999
  }
];
testCases.forEach((scenario) => {
  test(`${scenario.value} to equal ${scenario.symbol}`, () => {
    expect(ArabicToRoman(scenario.value)).toBe(scenario.symbol);
  });
});

[
  { expectedOutput: 'I', input: 1 },
  { expectedOutput: 'II', input: 2 },
  { expectedOutput: 'IV', input: 4 },
  { expectedOutput: 'V', input: 5 },
  { expectedOutput: 'VI', input: 6 },
  { expectedOutput: 'VII', input: 7 },
  { expectedOutput: 'IX', input: 9 },
  { expectedOutput: 'X', input: 10 },
  { expectedOutput: 'XI', input: 11 },
  { expectedOutput: 'XII', input: 12 },
  { expectedOutput: 'XIV', input: 14 },
  { expectedOutput: 'XV', input: 15 },
  { expectedOutput: 'XVI', input: 16 },
  { expectedOutput: 'XVII', input: 17 },
  { expectedOutput: 'XIX', input: 19 },
  { expectedOutput: 'XX', input: 20 },
  { expectedOutput: 'XXI', input: 21 },
  { expectedOutput: 'XXII', input: 22 },
  { expectedOutput: 'XXIV', input: 24 },
  { expectedOutput: 'XXV', input: 25 },
  { expectedOutput: 'XXVI', input: 26 },
  { expectedOutput: 'XXVII', input: 27 },
  { expectedOutput: 'XXIX', input: 29 },
  { expectedOutput: 'XXX', input: 30 },
  { expectedOutput: 'XXXI', input: 31 },
  { expectedOutput: 'XXXII', input: 32 },
  { expectedOutput: 'XXXIV', input: 34 },
  { expectedOutput: 'XXXV', input: 35 },
  { expectedOutput: 'XXXVI', input: 36 },
  { expectedOutput: 'XXXVII', input: 37 },
  { expectedOutput: 'XXXIX', input: 39 },
  { expectedOutput: 'XL', input: 40 },
  { expectedOutput: 'XLI', input: 41 },
  { expectedOutput: 'XLII', input: 42 },
  { expectedOutput: 'XLIII', input: 43 },
  { expectedOutput: 'XLIV', input: 44 },
  { expectedOutput: 'XLV', input: 45 },
  { expectedOutput: 'XLVI', input: 46 },
  { expectedOutput: 'XLVII', input: 47 },
  { expectedOutput: 'XLVIII', input: 48 },
  { expectedOutput: 'XLIX', input: 49 },
  { expectedOutput: 'L', input: 50 },
  { expectedOutput: 'LI', input: 51 },
  { expectedOutput: 'LII', input: 52 },
  { expectedOutput: 'LIII', input: 53 },
  { expectedOutput: 'LIV', input: 54 },
  { expectedOutput: 'LV', input: 55 },
  { expectedOutput: 'LVI', input: 56 },
  { expectedOutput: 'LVII', input: 57 },
  { expectedOutput: 'LVIII', input: 58 },
  { expectedOutput: 'LIX', input: 59 },
  { expectedOutput: 'LX', input: 60 },
  { expectedOutput: 'LXI', input: 61 },
  { expectedOutput: 'LXII', input: 62 },
  { expectedOutput: 'LXIV', input: 64 },
  { expectedOutput: 'LXV', input: 65 },
  { expectedOutput: 'LXVI', input: 66 },
  { expectedOutput: 'LXVII', input: 67 },
  { expectedOutput: 'LXIX', input: 69 },
].forEach(({ input, expectedOutput }) => {
    test(`${input} returns ${expectedOutput}`, () => {
      expect(ArabicToRoman(input)).toEqual(expectedOutput);
    });
  });