import pythagoreanTriplet from '../pythagoreanTriplet';

describe('problem 9', () => {
  test('given a sum of pythagorean triplets, should find the product of those triplets', () => {
    expect(pythagoreanTriplet(12)).toBe(60);
  });
});
