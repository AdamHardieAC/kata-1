const ArabicToRoman = require('../src/modules/ArabicToRoman');

const testCases = [
  // {
  //   symbol: 'I',
  //   value: 1
  // },
  {
    symbol: 'V',
    value: 5
  },
  {
    symbol: 'X',
    value: 10
  },
  {
    symbol: 'L',
    value: 50
  },
  {
    symbol: 'C',
    value: 100
  },
  {
    symbol: 'D',
    value: 500
  },
  {
    symbol: 'M',
    value: 1000
  },
  {
    symbol: 'II',
    value: 2
  },
  {
    symbol: 'CCV',
    value: 205
  },
  {
    symbol: 'IV',
    value: 4
  },
];
test('base case 0 = nulla', () => {
  expect(ArabicToRoman(0)).toBe('nulla');
});


testCases.forEach((scenario) => {
  test(`${scenario.value} to equal ${scenario.symbol}`, () => {
    expect(ArabicToRoman(scenario.value)).toBe(scenario.symbol);
  });
})