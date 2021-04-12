const testString = require('../src/testString')

test('should be defined', () => {
  expect(testString).toBeDefined();
})

test('check all lowercase', () => {
  expect(testString('abcd')).toBeFalsy()
})
test('check all number', () => {
  expect(testString(123456)).toBeFalsy()
})
test('checking special characters', () => {
  expect(testString('~bcd')).toBeFalsy()
})
test('check a starting uppercase', () => {
  expect(testString('Abcd')).toBeTruthy()
})
test('check all uppercase', () => {
  expect(testString('ABCD')).toBeTruthy()
})
test('check for no argument cases', () => {
  expect(testString()).toBeFalsy()
})
test('check for no argument cases', () => {
  expect(testString('')).toBeFalsy()
})
test('check negative numbers', () => {
  expect(testString(-1)).toBeFalsy()
})
test('check string', () => {
  expect(testString('-1')).toBeFalsy()
})
test('check string', () => {
  expect(testString('12')).toBeFalsy()
})
test('checking undefined values', () => {
  expect(testString(undefined)).toBeFalsy()
})
test('checking null values', () => {
  expect(testString(null)).toBeFalsy()
})
test('checking NaN', () => {
  expect(testString(NaN)).toBeFalsy()
})
test('check true boolean value', () => {
  expect(testString(true)).toBeFalsy()
})
test('check false boolean value', () => {
  expect(testString(false)).toBeFalsy()
})