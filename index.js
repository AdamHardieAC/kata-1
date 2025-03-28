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

// function RomanToArabic(roman) {
//   if (roman === '') return 0;
//   return [...roman].reduce((result, currentRomanNumeral, currentRomanNumeralIdx, array) => {
//     const currentRomanNumeralInArabic = romanNumerals[currentRomanNumeral];
//     const nextRomanNumeralInArabic = romanNumerals[array[currentRomanNumeralIdx + 1]] || 0;
//     const isCurrentGreaterThanNext = currentRomanNumeralInArabic >= (nextRomanNumeralInArabic);

//     return isCurrentGreaterThanNext
//       ? result += currentRomanNumeralInArabic 
//       : result -= currentRomanNumeralInArabic;
//   }, 0);
// }

function RomanToArabic(roman, index = 0, total = 0){
  if (index >= [...roman].length) return total;

  const currentRomanNumeralInArabic = romanNumerals[[...roman][index]];
  const nextRomanNumeralInArabic = romanNumerals[[...roman][index+1]] || 0;
  const isCurrentGreaterThanNext = currentRomanNumeralInArabic >= nextRomanNumeralInArabic;
  console.log(total);

  console.log({currentRomanNumeralInArabic,nextRomanNumeralInArabic,isCurrentGreaterThanNext});
  total += (isCurrentGreaterThanNext ? + currentRomanNumeralInArabic : - currentRomanNumeralInArabic);

  console.log(total);

  return RomanToArabic(roman, index + 1, total);
}


module.exports = { IntToUrnfield, UrnfieldToInt, RomanToArabic };