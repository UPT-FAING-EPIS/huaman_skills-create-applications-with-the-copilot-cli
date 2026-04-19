#!/usr/bin/env node
/*
CLI Calculator
Supports these operations (from the provided image):
- Addition (+) / add
- Subtraction (-) / sub
- Multiplication (*) / mul
- Division (/) / div

Usage:
  node src/index.js add 2 3
  node src/index.js + 2 3

The CLI accepts the operation then two numeric operands.
*/

const calc = require('./calculator');

const [, , op, aStr, bStr] = process.argv;

function usage() {
  console.error('Usage: node src/index.js <op> <a> <b>');
  console.error('Ops: add|+  sub|-  mul|*  div|/');
  process.exit(1);
}

if (!op || !aStr || !bStr) {
  usage();
}

const a = Number(aStr);
const b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Both operands must be numbers');
  process.exit(1);
}

let result;
try {
  switch (op) {
    case 'add':
    case '+':
      result = calc.add(a, b);
      break;
    case 'sub':
    case '-':
      result = calc.subtract(a, b);
      break;
    case 'mul':
    case '*':
      result = calc.multiply(a, b);
      break;
    case 'div':
    case '/':
      result = calc.divide(a, b);
      break;
    default:
      console.error('Unknown operation:', op);
      usage();
  }
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
