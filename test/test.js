#!/usr/bin/env node
// Simple tests for calculator operations
const assert = require('assert');
const calc = require('../src/calculator');

function runTest(label, fn, a, b, expected) {
  const actual = fn(a, b);
  console.log(`${label}: ${a} ${label} ${b} =`, actual);
  assert.strictEqual(actual, expected);
}

try {
  runTest('+', calc.add, 2, 3, 5);
  runTest('-', calc.subtract, 10, 4, 6);
  runTest('*', calc.multiply, 45, 2, 90);
  runTest('/', calc.divide, 20, 5, 4);
  console.log('All tests passed');
} catch (err) {
  console.error('Test failed:', err.message);
  process.exit(1);
}
