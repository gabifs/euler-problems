import palindromeProduct, { isPalindrome, parseToString } from '../palindromeProduct';

describe('problem 3', () => {
  describe('the largest palindrome made from the product of n-digit number, is calculated when', () => {
    it('verify if a number is a palindrome', () => {
      expect(isPalindrome(9009, 4)).toBe(true);
    });

    it('convert a number to a string with a given size', () => {
      expect(parseToString(9009, 4)).toBe('9009');
      expect(parseToString(10, 4)).toBe('0010');
    });

    test('find the largest palindrome', () => {
      expect(palindromeProduct(2)).toBe(9009);
    });
  });
});
