import findPrime, { isPrime } from '../findPrime';

describe('problem 7', () => {
  describe('to find the prime at a given position', () => {
    it('should verify if a number is prime', () => {
      expect(isPrime(7)).toBeTruthy();
      expect(isPrime(4)).toBeFalsy();
      expect(isPrime(9)).toBeFalsy();
    });

    test('should find a the needed prime number', () => {
      expect(findPrime(1)).toBe(2);
      expect(findPrime(2)).toBe(3);
      expect(findPrime(6)).toBe(13);
    });
  });
});
