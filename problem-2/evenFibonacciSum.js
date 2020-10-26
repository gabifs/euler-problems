"use strict";
/**
 * @function evenFibonacciSum
 * @param {number} limit A limit to fibonacci value calculation
 * @param {number=1} firstValue First value needed to calculate, the third value of a fibonacci sequence
 * @param {number=2} secondValue Second value needed to calculate, the third value of a fibonacci sequence
 * @returns {number}
 */
exports.__esModule = true;
function evenFibonacciSum(limit, firstValue, secondValue) {
    if (firstValue === void 0) { firstValue = 1; }
    if (secondValue === void 0) { secondValue = 2; }
    if (limit < 2 || secondValue > limit)
        return 0;
    var thirdValue = firstValue + secondValue;
    if (secondValue % 2 === 0) {
        return secondValue + evenFibonacciSum(limit, secondValue, thirdValue);
    }
    else {
        return evenFibonacciSum(limit, secondValue, thirdValue);
    }
}
exports["default"] = evenFibonacciSum;
