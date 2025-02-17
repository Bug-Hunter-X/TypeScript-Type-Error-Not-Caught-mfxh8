function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, '10'); // Type Error, but the compiler will not catch this