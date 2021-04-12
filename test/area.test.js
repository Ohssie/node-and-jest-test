const area = require('../src/area')

test('should be defined', () => {
  expect(area).toBeDefined();
})
/** Test cases with valid values */
test('given 5 as the radius', () => {
  expect(area(5)).toBe((Math.PI * 5 * 5).toFixed(4))
})
test('given 15 as the radius', () => {
  expect(area(15)).toBe((Math.PI * 15 * 15).toFixed(4))
})
test('given 25 as the radius', () => {
  expect(area(25)).toBe((Math.PI * 25 * 25).toFixed(4))
})
test('given 100 as the radius', () => {
  expect(area(100)).toBe((Math.PI * 100 * 100).toFixed(4))
})


/** test cases with invalid values */
test('given a value that is not a number', () => {
  expect(() => area('hello')).toThrow('Please supply a number as radius');
})
test('given a value that is not a number', () => {
  expect(() => area('123')).toThrow('Please supply a number as radius');
})
test('given a value less than or equal to 0', () => {
  expect(() => area(0)).toThrow('A circle cannot have a radius less than 0');
})
test('given a value less than or equal to 0', () => {
  expect(() => area(-1)).toThrow('A circle cannot have a radius less than 0');
})
test('given 0.4 as the radius', () => {
  expect(area(0.4)).toBe((Math.PI * 0.4 * 0.4).toFixed(4));
})
test('given an invalid value', () => {
  expect(() => area(NaN)).toThrow('Please supply a number as radius');
})
test('given a null value', () => {
  expect(() => area(null)).toThrow('Please supply a number as radius');
})
test('given a boolean value', () => {
  expect(() => area(true)).toThrow('Please supply a number as radius');
})
test('given a boolean value', () => {
  expect(() => area(false)).toThrow('Please supply a number as radius');
})
test('given an empty argument', () => {
  expect(() => area()).toThrow('Please supply an argument');
})
