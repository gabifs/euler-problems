export function parseToString(num:number, numSize:number) :string {
  let strNum = num.toString();
  while (strNum.length < numSize) strNum = `0${strNum}`;
  return strNum;
}

export function isPalindrome(num:number, numSize:number) :boolean {
  const strNum = parseToString(num, numSize);

  let offset = numSize - 1;

  for (let index = 0; index < numSize / 2; index += 1) {
    if (strNum[index] !== strNum[offset]) {
      return false;
    }
    offset -= 1;
  }
  return true;
}

export default function palindromeProduct(digitQtd:number) :number {
  const numSize = digitQtd * 2;

  let largest = 0;

  for (let num1 = 1; num1 < 10 ** digitQtd; num1 += 1) {
    for (let num2 = 1; num2 < 10 ** digitQtd; num2 += 1) {
      const prod = num1 * num2;

      if (isPalindrome(prod, numSize) && largest < prod) {
        largest = prod;
      }
    }
  }
  return largest;
}
