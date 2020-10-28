import largestPrime from '../largestPrime';

describe('Problem 3', () => {
  test('should calculate the largest prime factor of a given number', () => {
    expect(largestPrime(13195)).toBe(29);
  });
});
