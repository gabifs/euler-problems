import smallestMultiple, {
  greatestCommonDivisor, leastCommonMultiple,
} from '../smallestMultiple';

describe('problem 5', () => {
  describe('the smallest number that can be divided for all numbers below a given limit,is calculated when', () => {
    it('calculate the greatest common divisor between two numbers', () => {
      expect(greatestCommonDivisor(8, 20)).toBe(4);
    });
    it('calculate the least common multiple between two numbers', () => {
      expect(leastCommonMultiple(8, 20)).toBe(40);
    });
    it('calculate the least common multiple of a list of numbers', () => {
      expect(smallestMultiple(10)).toBe(2520);
      expect(smallestMultiple(5)).toBe(60);
    });
  });
});
