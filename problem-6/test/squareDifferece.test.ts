import squareDifferece, { sumSquares, squareSum } from '../squareDifferece';

describe('problem 5', () => {
  describe('To calculate the square difference', () => {
    it('should calculate the sum of the square of the first n numbers, for a given n', () => {
      expect(sumSquares(10)).toBe(385);
    });

    it('should calculate the square of the sum of the first n numbers, for a given n', () => {
      expect(squareSum(10)).toBe(3025);
    });

    it('should calculate the square differce', () => {
      expect(squareDifferece(10)).toBe(2640);
    });
  });
});
