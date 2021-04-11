const testString = require('../src/testString')

test('should be defined', () => {
  expect(testString).toBeDefined();
})

test('check all lowercases', () => {
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
test('check all uppercases', () => {
  expect(testString('ABCD')).toBeTruthy()
})