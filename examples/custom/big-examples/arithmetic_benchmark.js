// arithmetic_benchmark.js
function arithmeticOperations(n) {
  let result = 0;
  for (let i = 0; i < n; i++) {
    const a = i * 3;
    const b = i / 4;
    const c = i % 7;
    const d = i**2;
    const e = a + b + c + d;
    result += e;
  }
  return result;
}

// Test with different scales
//[1000000, 5000000, 10000000]
console.log(arithmeticOperations(10000000));