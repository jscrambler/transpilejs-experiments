( () => {
    console.log('Hi, crocodile!');
} )();

( function () {
    console.log('See you later, aligator!');
}());

// Initial array
let array = [1, 2, 3, 4, 5];
console.log(array);

// Assign new value at index 2
array[2] = 33;
console.log(array);

// Assign new value at index 'a'
let a = 3;
array[a] = 333;
console.log(array);

// Assign new value at computed index
array[(a + 2.5) * 0] = 0;
console.log(array);

// Get value at index 'a'
let res = array[a];
console.log(array);

// Get value at computed index
res = array[(a + 2.5) * 0];
console.log(array);

// Test push and pop
array.push(6);
console.log(array);
console.log(array.pop());
console.log(array);

// Test shift and unshift
array.unshift(0);
console.log(array);
console.log(array.shift());
console.log(array);

// Test splice
console.log(array.splice(2, 2));
console.log(array);
const rem = array.splice(0, 1, 444, 909);
console.log(rem);
console.log(array);
const remrem = array.splice(1);
console.log(remrem);
console.log(array);

function comba(x) { return 2 * x; }

let num = 42;
let str = "Hello, World!";
let arr = [1, 2, 3];
let func = (n) => n * 2;

// Test console.log with different types of arguments
console.log(num);                       // Number
console.log(str);                       // String
console.log(arr);                       // Array
console.log(func(10));                  // Function call
console.log(comba(5));                      // Function call (defined above)
console.log(8 * num + 6);               // Expression
console.log(comba(8) * comba(num) + 6 / 10);    // Complex Expression
console.log(arr[1]);                    // Array element
console.log(`The number is ${num}`);    // Template string

// Test console.assert with different types of arguments
console.assert(num === 42, "Number is not 42");
console.assert(num < 0, "Number is not negative");
console.assert(arr.length === 3, "Array length is not 3");
console.assert(typeof func === "function", "Func is not a function");

// Test other console methods with different types of arguments
console.warn(num);
console.error(str);
console.info("important information");
console.debug(arr);

let fiba = fibonacci(4, "pedro");
function fibonacci(num, ze) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    console.log(ze);
    for (let i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
fibonacci(8, "ferreira");

array = [2, 4, 6, 8, 10];
let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
str = 'hello';
let i = 0;
for (i in array) {
    console.log(i);
}
for (i in map) {
    console.log(i);
}
for (i in str) {
    console.log(i);
}

for (const ii in array) {
    console.log(ii);
}
for (const ii in map) {
    console.log(ii);
}
for (const ii in str) {
    console.log(ii);
}

for (let a of array) {
    console.log(a);
}
for (let a of str) {
    console.log(a);
}

let b = 0;
for (b of array) {
    console.log(b);
}
for (b of str) {
    console.log(b);
}

function test(n) {
    const testArray = [3, 7, 8, 8, 10];
    let res = n;
    for (let c of testArray) {
        let _i_ = 1;
        res += c + _i_;
    }
    return res;
}

function oi_void(){
    let oi = void 0;
}

console.log(test(9));

function cant(){
    console.log("Can't do this");
    function can(){
        console.log("Can do this");
    }
    const arr = [1, 'a'];
    can();
}

cant();

num = 14;
let num1 = 0;

export let num2 = 1;
export let sum = num1++;
i = 0;
for (i = 0; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
}

export let fibo = num2;

let arrow = "->";
arr = [0, 3, arrow.length, 4.5];

console.log("Fibo: " + fibo.toString() + ", Array" + arrow + arr[3].toString());

export function f(){
    console.log(5);
    return 5;
}

export function getArrayL(arg) {
    const l = arg.length + f();
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}

export function mathThing(a, b){
    const num3 = a + num2;
    return num3 * b;
}

console.log(getArrayL("hello"));
console.log(mathThing(2, 5));

function n(arg){
    let c = num + num1 + num2 + sum + i + fibo + arr[0];
    console.log(arrow);
    console.log(c);
    console.log(arg);
}

let globa = 1;

function indirect(){
    globa = 20;
}

globa = 3;
console.log(globa);
indirect();
console.log(globa);
globa *= 2;
console.log(globa);

let glob = 1;

function findirect(){
    glob = 20;
}

console.log(glob);
findirect();
console.log(glob);
glob *= 2;
console.log(glob);

let newa = 0;
let newb = "hello";
let c = newa == 0;
function aGetter(){
    return newa + 5;
}
function aSetter(val){
    c = val;
}
function __bGetter__(){
    return newb + " jk";
}
function main(){
    aSetter(false);
    if(c){
        return b;
    }
    return "no " + b;
}
console.log(aGetter());
console.log(__bGetter__());
console.log(main());

var gl = 10;

function mult(a, b) {
    const arr = [1, 2, "aaa"];
    console.log(arr);
    return a * b;
}

function comp(){
    const res = 5 + mult(2, 3);
    return res;
}

function useGL(){
    return 2 * gl;
}

function uncomp(n){
    return n * useGL();
}

console.log(comp());
console.log(uncomp(3));

class Car {
    type;
    model;
    year;

    constructor(type, model, year) {
        this.type = type;
        this.model = model;
        this.year = year;
    }

    getModel() {
        return this.model;
    }

};


const car = new Car("Fiat", "500", 2001);

function futureWork() {
    console.log("Objects aren't supported yet!");
}

futureWork();
console.log(car.getModel());

var sco;

function otherScope(){
    let sco = "aaaa";
    return sco;
}

sco = 10;

console.log(otherScope());

arrow = "->";
function printString(arg) {
    const arrow = "->";
    return arg + " " + arrow + " " + arg.length.toString();
}
function getArray(arg) {
    const a = printStringgood("hi");
    const l = arg.length;
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}
function fibo_ex(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    for (let i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
function printStringgood(arg) {
    const a = 99;
    console.log(a);
    return arg + " " + arrow + " " + arg.length.toString();
}
console.log(fibo_ex(5));
console.log(getArray("hello"));
console.log(printStringgood("hi"));
console.log(printString("aaa"));

export function printString2(arg) {
    const arrow = "->";
    return arg + " " + arrow + " " + arg.length.toString();
}

printString2("hello");

function fibo_ex2(num){
    let num1 = 0;
    let num2 = 1;
    let sum;
    for (let i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}  

function getArrayL2(arg) {
    const l = arg.length;
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}

fibo_ex2(5);
getArrayL2("hello");

arr = [1, 2, 3];
let varf = x => x ** 2;
let double;
double = function(x) {
    return x * 2;
}

console.log(double(5));
console.log(varf(12));

function arrayStuff() {
    const strArr = ['a', 'b', 'c'];
    console.log(strArr.map(x => "hello" + x)); // ["helloa", "hellob", "helloc"]
}
arrayStuff();

let aaa = void 0;
let bbb = void(0);
let ccc = void 3;
let ddd = void(4);

function wecanbevoid() {
    console.log("The call of the void");
}

wecanbevoid();

console.log('Hello from webinar.js');

function divideNumbers(a, b) {
  return a / b;
}

console.log(divideNumbers(22, 77));


