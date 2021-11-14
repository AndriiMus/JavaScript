import {getAdults, withdraw, reverseArray}from './app.js';

it('should bring back people over 18 or an empty object', () => {
    const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
    expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});


it('should bring back people over 18 or an empty object', () => {
    const result = getAdults(32);
    expect(result).toEqual({});
});

it('should bring back people over 18 or an empty object', () => {
    const result = getAdults({ 'John Doe': 15, Tom: 17, Bob: 14 });
    expect(result).toEqual({});
});

it('should withdraw money and refund the balance or return -1', () => {
   const result = withdraw(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
    expect(result).toEqual(37);
});

it('should withdraw money and refund the balance or return -1', () => {
    const result = withdraw(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50));
     expect(result).toEqual(-1);
 });

 it('should withdraw money and refund the balance or return -1', () => {
    const result = withdraw(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 700));
     expect(result).toEqual(700);
 });

 it('shuld revers array and return null this not array', () => {
     const result = reverseArray([1, 2, 3]);
     expect(result).toEqual([3, 2, 1,]);
 });

 it('shuld revers array and return null this not array', () => {
    const result = reverseArray(['a', 'b']);
    expect(result).toEqual(['b', 'a']);
});

it('shuld revers array and return null this not array', () => {
    const result = reverseArray(2);
    expect(result).toEqual(null);
});