import { calc } from './calculator';

it('should get squared numbers', () => {
  const result = calc('1 + 2');
  expect(result).toEqual('1 + 2 = 3');
});

it('should get squared numbers', () => {
  const result = calc('3 - 2');
  expect(result).toEqual('3 - 2 = 1');
});

it('should get squared numbers', () => {
  const result = calc('1 * 2');
  expect(result).toEqual('1 * 2 = 2');
});

it('should get squared numbers', () => {
  const result = calc('4 / 2');
  expect(result).toEqual('4 / 2 = 2');
});

it('should get squared numbers', () => {
  const result = calc(2);
  expect(result).toEqual(null);
});

