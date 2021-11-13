it('17 завно 17', () => {
  expect(17).toEqual(17);
});

it('18  не равно 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = number => number.filter(num => num % 2 === 0);

it('should get only even numbers from array', () => {
  const result = getEvenNumbers([2, 3, 4, 5]);

  expect(result).toEqual([2, 4]);
});
