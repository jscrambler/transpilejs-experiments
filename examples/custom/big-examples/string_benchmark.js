// string_benchmark.js
function stringManipulations(n) {
  let str = '';
  for (let i = 0; i < n; i++) {
    str += String.fromCharCode(65 + (i % 26)); // Create a long string of A-Z repeated
  }
  return str;
}

// Test with different scales
//[100000, 500000, 1000000]
console.log(stringManipulations(1000000));
