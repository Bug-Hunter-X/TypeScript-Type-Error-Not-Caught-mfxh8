function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result1 = addSafe(5, 10); // Correct
let result2 = addSafe(5, '10'); // Throws an error at runtime

console.log(result1); // Output: 15
//console.log(result2); // Throws an error