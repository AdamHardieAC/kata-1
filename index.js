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

module.exports = { IntToUrnfield, UrnfieldToInt };