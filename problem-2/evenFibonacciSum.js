
/**
 * @function evenFibonacciSum
 * @param {number} limit A limit to fibonacci value calculation
 * @param {number=1} firstValue First value needed to calculate, the third value of a fibonacci sequence
 * @param {number=2} secondValue Second value needed to calculate, the third value of a fibonacci sequence
 * @returns {number}
 */

function evenFibonacciSum (limit, firstValue = 1, secondValue = 2) {
  if (limit < 2 || secondValue > limit) return 0

  const thirdValue = firstValue + secondValue

  if (secondValue % 2 === 0) {
    return secondValue + evenFibonacciSum(limit, secondValue, thirdValue)
  } else {
    return evenFibonacciSum(limit, secondValue, thirdValue)
  }
}

module.exports = evenFibonacciSum
