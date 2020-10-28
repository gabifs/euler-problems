export function* range(end:number, start?:number):Generator<number> {
  for (let i = start || 0; i <= end; i += 1) {
    yield i;
  }
}

export function sumSquares(n:number):number {
  return [...range(n)].reduce((sum, item) => sum + item ** 2, 0);
}

export function squareSum(n:number):number {
  return [...range(n)].reduce((sum, item) => sum + item, 0) ** 2;
}

export default function squareDifferece(limit:number):number {
  return squareSum(limit) - sumSquares(limit);
}
