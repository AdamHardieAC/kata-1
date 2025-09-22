function RomanToUrnfield(roman) {
  if (roman === 'nulla') return '';

  // const romanMap = {
  //   I: '/', V: '~', X: '~~', L: '~'.repeat(10), 
  //   C: '~'.repeat(20), D: '~'.repeat(100), M: '~'.repeat(200)
  // }
  const romanMap = {
    I: 1, V: 5, X: 10, L: 50, 
    C: 100, D: 500, M: 1000
  }
  //IV
  ///testertste
  // current = I | /, next = V | ~
  let returnNum = 0;
  for(let c = 0; c < roman.length; c++) {
    const currentNumber = romanMap[roman[c]];
    const nextNumber = romanMap[roman[c+1]] || 0;
    if (!nextNumber) break;
    if (nextNumber > currentNumber) {
      returnNum = nextNumber - currentNumber;
    } else {
      returnNum = returnNum + currentNumber;
    }
    console.log({roman, returnNum, currentNumber, nextNumber});
  }
  const fiveCount = returnNum/5;
  const oneCount = returnNum % 5;

  return '/'.repeat(oneCount) + '~'.repeat(fiveCount);
}
module.exports = {RomanToUrnfield};