export function* range(end:number, start?:number):Generator<number> {
  for (let i = start || 0; i < end; i += 1) {
    yield i;
  }
}

export function isPrime(n:number) :boolean {
  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  for (let i = 3; i < Math.round(Math.sqrt(n) + 1); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

export default function findPrime(position:number):number {
  let index = 1;
  let testingNumber = 2;
  let prime = testingNumber;

  while (index <= position) {
    if (isPrime(testingNumber)) {
      index += 1;
      prime = testingNumber;
    }

    testingNumber += 1;
  }

  return prime;
}
