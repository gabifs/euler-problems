import largestProductSeries from '../largestProductSeries';

describe('problem 8', () => {
  test('find the greates product of n digits inside a 1000-digit number', () => {
    expect(largestProductSeries(4)).toBe(5832);
  });
});
