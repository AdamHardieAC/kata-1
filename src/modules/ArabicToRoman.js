function ArabicToRoman(num) {
  if (num === 0) return 'nulla';
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  
  
  return Object.entries(romanNumerals).reverse().reduce((accumulator, [roman, value]) => {
    const count = Math.floor(accumulator.num/value);
    accumulator.result += roman.repeat(count);
    accumulator.num -= value * count;
    return accumulator;
  }, {num, result: ''}).result;
}
module.exports = ArabicToRoman;