export function* range(end:number, start?:number):Generator<number> {
  for (let i = start || 0; i <= end; i += 1) {
    yield i;
  }
}

export function greatestCommonDivisor(num1:number, num2:number):number {
  return num2 === 0 ? num1 : greatestCommonDivisor(num2, num1 % num2);
}

export function leastCommonMultiple(num1:number, num2:number):number {
  return (num1 * num2) / greatestCommonDivisor(num1, num2);
}

export default function smallestMultiple(limit:number) :number {
  const numbersList = [...range(limit, 1)];

  return numbersList.reduce((multiple:number, item) => leastCommonMultiple(multiple, item), 1);
}
