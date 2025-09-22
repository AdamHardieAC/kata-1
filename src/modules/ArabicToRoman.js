function ArabicToRoman(num) {
  if (num === 0) return 'nulla';
  const romanNumerals = {
    'I': 1,
    'IV': 4, // next larger number - previous lower number
    'V': 5,
    'IX': 9, // next larger number - 2 previous lower number
    'X': 10,
    'XL': 40, // next larger number - previous lower number
    'L': 50,
    'XC': 90, // next larger number - 2 previous lower number
    'C': 100,
    'CD': 400, // next larger number - previous lower number
    'D': 500,
    'CM': 900, // next larger number - 2 previous lower number
    'M': 1000
  };
  return Object.entries(romanNumerals).reverse().reduce((accumulator, [roman, value], currentIdx) => {
    const count = Math.floor(accumulator.num/value);
    if ((accumulator.num === 9 || accumulator.num === 4) && count > 0) {
      console.log('in if');
      console.log({accumulator: accumulator, roman, count, value})
      const isNine = accumulator.num === 9;
      accumulator.result = accumulator.result + (isNine ? "IX" : "IV");
      accumulator.num = accumulator.num - (isNine ? 9 : 4);
    } else {
      console.log('in else case')
      console.log({accumulator: accumulator, roman, count, value})
      accumulator.result += roman.repeat(count);
      accumulator.num -= value * count;
      // console.log(accumulator)
    }
    return accumulator;
  }, {num, result: ''}).result;
}
module.exports = ArabicToRoman;