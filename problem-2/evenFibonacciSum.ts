
/**
 * @function evenFibonacciSum
 * @param {number} limit A limit to fibonacci value calculation
 * @param {number=1} firstValue First value needed to calculate, the third value of a fibonacci sequence
 * @param {number=2} secondValue Second value needed to calculate, the third value of a fibonacci sequence
 * @returns {number}
 */

export default function evenFibonacciSum (limit:number, firstValue:number = 1, secondValue:number = 2) :number {
  if (limit < 2 || secondValue > limit) return 0

  const thirdValue = firstValue + secondValue

  if (secondValue % 2 === 0) {
    return secondValue + evenFibonacciSum(limit, secondValue, thirdValue)
  } else {
    return evenFibonacciSum(limit, secondValue, thirdValue)
  }
}

