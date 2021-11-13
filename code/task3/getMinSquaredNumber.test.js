import getMinSquaredNumber from './getMinSquaredNumber';

it('should return null if an empty array is passed', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('should min squared number', () => {
  const result = getMinSquaredNumber([2, 4, -7, -1]);
  expect(result).toEqual(1);
});

it('should return null if a string is passed', () => {
  const result = getMinSquaredNumber('ss');
  expect(result).toEqual(null);
});


