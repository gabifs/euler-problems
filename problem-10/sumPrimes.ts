import { isPrime } from '../problem-7/findPrime';

export default function sumPrimes(n:number):number {
  let sum = 0;
  let testingNumber = 2;

  if (n > 2) {
    sum += testingNumber;
    testingNumber += 1;
  }

  for (testingNumber; testingNumber < n; testingNumber += 2) {
    if (isPrime(testingNumber)) {
      sum += testingNumber;
      console.log(sum, testingNumber);
    }
  }

  return sum;
}
