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
  return roman.split('').reduce((result, symbol, symbolIdx) => {
    const isCurrentGreatOrEqualToNext = (romanNumerals[symbol] >= (romanNumerals[roman.split('')[symbolIdx + 1]] || 0));
    return {
      accumulatedString: [
        ...result.accumulatedString,
        symbol,
      ],
      accumulatedValue: (isCurrentGreatOrEqualToNext) ?
        result.accumulatedValue += romanNumerals[symbol] : result.accumulatedValue -= romanNumerals[symbol]
    };
  }, { accumulatedString: [], accumulatedValue: 0 }).accumulatedValue;
}


module.exports = { IntToUrnfield, UrnfieldToInt, RomanToArabic };