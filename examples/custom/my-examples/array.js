// Initial a
let a = [1, 2, 3, 4, 5];
console.log(a);

// Assign new value at index 2
a[2] = 33;
console.log(a);

// Assign new value at index 'ind'
const ind = 3;
a[ind] = 333;
console.log(a);

// Assign new value at computed index
a[(ind + 2.5) * 0] = 0;
console.log(a);

// Get value at index 'ind'
let res = a[ind];
console.log(a);

// Get value at computed index
res = a[(ind + 2.5) * 0];
console.log(a);

// Test push and pop
a.push(6);
console.log(a);
const pop = a.pop();
console.log(pop);
console.log(a);

// Test shift and unshift
a.unshift(0);
console.log(a);
const shift = a.shift();
console.log(shift);
console.log(a);

// Test splice
console.log(a.splice(2, 2));
console.log(a);
const rem = a.splice(0, 1, 444, 909);
console.log(rem);
console.log(a);
const remrem = a.splice(1);
console.log(remrem);
console.log(a);
