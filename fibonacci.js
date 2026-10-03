function fibonacci(n) {
  let a = 0;
  let b = 1;
  const sequence = [];

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }

  return sequence;
}

// Example usage
const numbers = fibonacci(10);
console.log(numbers);
