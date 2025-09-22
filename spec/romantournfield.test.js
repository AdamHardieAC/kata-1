// const { UrnfieldToInt } = require('../src/modules/UrnfieldToInt');
const {RomanToUrnfield} = require('../src/modules/RomanToUrnfield');

test('Roman nulla equals empty string', () => {
  expect(RomanToUrnfield('nulla')).toBe('');
});

test('Roman I equals /', () => {
  expect(RomanToUrnfield('I')).toBe('/');
});

test('Roman V equals ~', () => {
  expect(RomanToUrnfield('V')).toBe('~');
});

test('Roman X equals ~~', () => {
  expect(RomanToUrnfield('X')).toBe('~~');
});

test('Roman L equals ~~', () => {
  expect(RomanToUrnfield('L')).toBe('~'.repeat(10));
});

test('Roman C equals ~~', () => {
  expect(RomanToUrnfield('C')).toBe('~'.repeat(20));
});

test('Roman D equals ~~', () => {
  expect(RomanToUrnfield('D')).toBe('~'.repeat(100));
});

test('Roman M equals ~~', () => {
  expect(RomanToUrnfield('M')).toBe('~'.repeat(200));
});


test('Roman XI equals /~~', () => {
  expect(RomanToUrnfield('XI')).toBe('/~~');
});


test.only('Roman IV equals ////', () => {
  expect(RomanToUrnfield('IV')).toBe('////');
});