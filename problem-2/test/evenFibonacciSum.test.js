const evenFibonacciSum = require('../evenFibonacciSum.js')

test('should find the sum of even terms, of a fibonacci whose value do not exceed 90', () => {
  expect(evenFibonacciSum(90)).toBe(44)
})
