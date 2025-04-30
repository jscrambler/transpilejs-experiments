function a(x) { return 2 * x; }
const num = 42;
const str = "Hello, World!";
const arr = [1, 2, 3];
const func = (n) => n * 2;

console.log(num);                       
console.log(str);                       
console.log(arr);                       
console.log(func(10));                  
console.log(a(5));                      
console.log(8 * num + 6);               
console.log(a(8) * a(num) + 6 / 10);    
console.log(arr[1]);                    
console.log(`The number is ${num}`);    

console.assert(num === 42, "Number is not 42");
console.assert(num < 0, "Number is not negative");
console.assert(arr.length === 3, "Array length is not 3");
console.assert(typeof func === "function", "Func is not a function");

console.warn(num);
console.error(str);
console.info("important information");
console.debug(arr);