const sumMultiples3and5 = require('../sumMultiples3and5')

test('sum all numbers multiples of 3 or 5, below 10', () => {
  expect(sumMultiples3and5(10)).toBe(23)
})
