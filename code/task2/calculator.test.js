import getSum, { getSquaredArray, getOddNumbers } from './calculator';

it('should get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('should get odd numbers only', () => {
  const result = getOddNumbers([2, 3, 4, 5]);
  expect(result).toEqual([3, 5]);
});

it('should get sum of numbers', () => {
    const result = getSum(8, 5);
    expect(result).toEqual(13);
  });