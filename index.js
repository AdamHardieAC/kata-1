function IntToUrnfield(int) {
  const oneCount = int % 5;
  const fiveCount = Math.floor(int / 5);
  return '/'.repeat(oneCount) + '~'.repeat(fiveCount);
}

function UrnfieldToInt(urnfield) {
  if (urnfield === '') return 0;
  return [...urnfield].reduce((count, char) =>
    count + (char === '/' ? 1 : 5), 0);
}

/*
I 	1
V 	5
X 	10
L 	50
C 	100
D 	500
M 	1000
*/

const romanNumerals = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

function RomanToArabic(roman) {
  if (roman === '') return 0;

  const spreadRoman = [...roman];
  const currentRomanNumeralInArabic = romanNumerals[spreadRoman[0]];
  const nextRomanNumeralInArabic = romanNumerals[spreadRoman[1]] || 0;
  const isCurrentGreaterThanNext = (currentRomanNumeralInArabic > nextRomanNumeralInArabic);

  const runTotal = isCurrentGreaterThanNext 
    ? currentRomanNumeralInArabic
    : (currentRomanNumeralInArabic < nextRomanNumeralInArabic) 
      ? nextRomanNumeralInArabic - currentRomanNumeralInArabic
      : currentRomanNumeralInArabic + nextRomanNumeralInArabic;

  return RomanToArabic(spreadRoman.splice(isCurrentGreaterThanNext ? 1 : 2).join('')) + runTotal;
}


module.exports = { IntToUrnfield, UrnfieldToInt, RomanToArabic };