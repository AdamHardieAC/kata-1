function RomanToUrnfield(roman) {
  if (roman === 'nulla') return '';

  const romanMap = {
    I: 1, V: 5, X: 10, L: 50, 
    C: 100, D: 500, M: 1000
  }

  let returnNum = 0;
  for(let c = 0; c < roman.length; c++) {
    const currentNumber = romanMap[roman[c]];
    const nextNumber = romanMap[roman[c+1]] || 0;
    if (nextNumber > currentNumber) {
      returnNum += nextNumber - currentNumber;
      c++;
      console.log({where: 'greater', roman, returnNum, currentNumber, nextNumber});
    } else {
      returnNum += currentNumber;
      console.log({where: 'else', roman, returnNum, currentNumber, nextNumber});
    }
    console.log({where: 'outer', roman, returnNum, currentNumber, nextNumber});
  }
  const fiveCount = returnNum/5;
  const oneCount = returnNum % 5;

  return '/'.repeat(oneCount) + '~'.repeat(fiveCount);
}
module.exports = {RomanToUrnfield};