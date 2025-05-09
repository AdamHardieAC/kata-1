const { UrnfieldToInt } = require('../src/modules/UrnfieldToInt');

test('Urnfield empty string equals 0', () => {
  expect(UrnfieldToInt('')).toBe(0);
});

test('Urnfield / string equals 1', () => {
  expect(UrnfieldToInt('/')).toBe(1);
});

test('Urnfield ~ string equals 5', () => {
  expect(UrnfieldToInt('~')).toBe(5);
});

test('Urnfield // string equals 2', () => {
  expect(UrnfieldToInt('//')).toBe(2);
});

test('Urnfield ~~ string equals 10', () => {
  expect(UrnfieldToInt('~~')).toBe(10);
});

test('Urnfield /~ string equals 6', () => {
  expect(UrnfieldToInt('/~')).toBe(6);
});

test('Urnfield //~ string equals 7', () => {
  expect(UrnfieldToInt('//~')).toBe(7);
});

test('Urnfield /~~ string equals 11', () => {
  expect(UrnfieldToInt('/~~')).toBe(11);
});

test('Urnfield //~~ string equals 12', () => {
  expect(UrnfieldToInt('//~~')).toBe(12);
});