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
  
  return Object.entries(romanNumerals).reverse().reduce((accumulator, [roman, value], currentIndex) => {
    // const lastDigit = parseInt(num.toString().split('').reverse()[0]);
    const lastDigit = parseInt(accumulator.num.toString().split('').reverse()[0]);
    //[['i', 1], ['v', 5]]

    const count = Math.floor(accumulator.num/value);
    if (lastDigit === 4  && roman === 'V' || lastDigit === 9 && roman === 'X') {
      console.log('subtract');
      accumulator.result += `I${roman}`;
      accumulator.num -= value * count;
    } else {
      accumulator.result += roman.repeat(count);
      accumulator.num -= value * count;
    }
    return accumulator;
  }, {num, result: ''}).result;
}
module.exports = ArabicToRoman;