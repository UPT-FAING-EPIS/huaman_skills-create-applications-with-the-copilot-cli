// Jest-based tests for basic arithmetic operations
const calc = require('../src/calculator');

test('addition: 2 + 3 = 5', () => {
  expect(calc.add(2, 3)).toBe(5);
});

test('subtraction: 10 - 4 = 6', () => {
  expect(calc.subtract(10, 4)).toBe(6);
});

test('multiplication: 45 * 2 = 90', () => {
  expect(calc.multiply(45, 2)).toBe(90);
});

test('division: 20 / 5 = 4', () => {
  expect(calc.divide(20, 5)).toBe(4);
});
