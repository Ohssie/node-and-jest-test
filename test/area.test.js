const area = require('../src/area')

test('should be defined', () => {
  expect(area).toBeDefined();
})

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