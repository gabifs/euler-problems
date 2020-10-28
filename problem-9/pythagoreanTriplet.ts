export default function pythagoreanTriplet(n:number): number|false {
  for (let a = Math.round(n / 3) - 1; a >= 2; a -= 1) {
    const b = Math.round((n * (n - 2 * a)) / (2 * (n - a)));
    const c = n - a - b;
    if (a < b && (a ** 2 + b ** 2 === c ** 2)) {
      const p = a * b * c;
      return p;
    }
  }
  return false;
}
