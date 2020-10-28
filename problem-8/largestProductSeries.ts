import bigNumber from './1000DigitNuber.json';

export default function largestProductSeries(digits:number):number {
  let largestProduct = 0;
  for (let index = 0; index < 1000 - digits; index += 1) {
    const segment = bigNumber[0].substring(index, digits + index);

    const product = segment
      .split('')
      .map((digit) => parseInt(digit, 10))
      .reduce((prod, digit) => prod * digit, 1);

    if (largestProduct < product) {
      largestProduct = product;
    }
  }

  return largestProduct;
}
