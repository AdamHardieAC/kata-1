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
    symbol: "IM",
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

];
// const testCases = [
//   // {
//   //   symbol: 'I',
//   //   value: 1
//   // },
//   {
//     symbol: 'V',
//     value: 5
//   },
//   {
//     symbol: 'X',
//     value: 10
//   },
//   {
//     symbol: 'L',
//     value: 50
//   },
//   {
//     symbol: 'C',
//     value: 100
//   },
//   {
//     symbol: 'D',
//     value: 500
//   },
//   {
//     symbol: 'M',
//     value: 1000
//   },
//   {
//     symbol: 'II',
//     value: 2
//   },
//   {
//     symbol: 'CCV',
//     value: 205
//   },
//   {
//     symbol: 'IV',
//     value: 4
//   },
// ];
test('base case 0 = nulla', () => {
  expect(ArabicToRoman(0)).toBe('nulla');
});
test('9 to equal IX', () => {
  expect(ArabicToRoman(9)).toBe('IX');
});

testCases.forEach((scenario) => {
  test(`${scenario.value} to equal ${scenario.symbol}`, () => {
    expect(ArabicToRoman(scenario.value)).toBe(scenario.symbol);
  });
})