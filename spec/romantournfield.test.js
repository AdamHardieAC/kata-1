// const { UrnfieldToInt } = require('../src/modules/UrnfieldToInt');
const {RomanToUrnfield} = require('../src/modules/RomanToUrnfield');

test('Roman nulla equals empty string', () => {
  expect(RomanToUrnfield('nulla')).toBe('');
});

test('Roman I equals /', () => {
  expect(RomanToUrnfield('I')).toBe('/');
});

test('Roman II equals //', () => {
  expect(RomanToUrnfield('II')).toBe('//');
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


test('Roman IV equals ////', () => {
  expect(RomanToUrnfield('IV')).toBe('////');
});

test('Roman XL equals ~~~~~~~~', () => {
  expect(RomanToUrnfield('XL')).toBe('~'.repeat(8));
});

test('Roman CM equals ~~~~~~~~', () => {
  expect(RomanToUrnfield('CM')).toBe('~'.repeat(180));
});

test('Roman XC equals ~~~~~~~~', () => {
  expect(RomanToUrnfield('XC')).toBe('~'.repeat(18));
});

test('Roman VII equals //~', () => {
  expect(RomanToUrnfield('VII')).toBe('/'.repeat(2) + '~'.repeat(1));
});

test('Roman XIV equals ////~~', () => {
  expect(RomanToUrnfield('XIV')).toBe('/'.repeat(4) + '~'.repeat(2));
});

test('Roman XIX equals /////~~~', () => {
  expect(RomanToUrnfield('XIX')).toBe('/'.repeat(4) + '~'.repeat(3));
});

test('Roman XIII equals ///~~', () => {
  expect(RomanToUrnfield('XIII')).toBe('/'.repeat(3) + '~'.repeat(2));
});

test('Roman XCIX equals ///~~', () => {
  expect(RomanToUrnfield('XCIX')).toBe('/'.repeat(4) + '~'.repeat(19));
});

test('Roman XXIV equals ////~~~~', () => {
  expect(RomanToUrnfield('XXIV')).toBe('/'.repeat(4) + '~'.repeat(4));
});

test('Roman CXCIX equals ///~~', () => {
  expect(RomanToUrnfield('CXCIX')).toBe('/'.repeat(4) + '~'.repeat(39));
});

test('Roman MMMCMXCIX equals ~~~~~~~~', () => {
  expect(RomanToUrnfield('MMMCMXCIX')).toBe('/'.repeat(4) + '~'.repeat(799));
});