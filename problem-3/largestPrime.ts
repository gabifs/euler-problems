export function* range(end:number, start?:number, offset?:number) {
  for (let i = start || 0; i <= end; i += offset || 1) {
    yield i;
  }
}

export default function largestPrime(num:number):number {
  let n = num;
  let primeFactor = 1;

  while (n % 2 === 0) {
    primeFactor = 2;
    n /= 2;
  }

  [...range(Math.round(Math.sqrt(n)), 3, 2)].forEach((item) => {
    while (n % item === 0) {
      primeFactor = item;
      n /= item;
    }
  });

  if (n > 2) {
    primeFactor = n;
  }

  return Math.round(primeFactor);
}
