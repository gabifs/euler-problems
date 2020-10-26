/**
 * @function sumMultiples3and5
 * @description Sum of all the multiples of 3 or 5 for all number below a given number
 * @param {number} limitNumber
 * @returns {number}
 */
export default function sumMultiples3and5(limitNumber:number) :number {
  if (limitNumber === 0) return 0;

  const num = limitNumber - 1;

  if (num % 3 === 0 || num % 5 === 0) {
    return num + sumMultiples3and5(num);
  }

  return sumMultiples3and5(num);
}
