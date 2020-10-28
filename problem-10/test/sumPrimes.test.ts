import sumPrimes from '../sumPrimes';

describe('problem 10', () => {
  test('Calculate the sum of all primes below a givem number', () => {
    expect(sumPrimes(10)).toBe(17);
  });
});
