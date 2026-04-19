const calc = require('../../src/calculator');

describe('calculator extended operations', () => {
  test('modulo: 5 % 2 -> 1', () => {
    expect(calc.modulo(5, 2)).toBe(1);
  });

  test('power: 2 ^ 3 -> 8', () => {
    expect(calc.power(2, 3)).toBe(8);
  });

  test('squareRoot: sqrt(16) -> 4', () => {
    expect(calc.squareRoot(16)).toBe(4);
  });

  test('squareRoot: negative number throws', () => {
    expect(() => calc.squareRoot(-4)).toThrow('Square root of negative number');
  });
});
