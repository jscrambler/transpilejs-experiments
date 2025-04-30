function arrayGetter(): number[] { return array; }
function arraySetter(value: number[]): void { array = value; }
function arrayDoubleWay(value: number[]): number[] { array = value; return array; }
function arrayElementSetter(value: number, index: number): void { array[index] = value; }
function arrayElementPusher(value: number, unshift: boolean): number { const array = arrayGetter(); if (unshift) {
    array.unshift(value);
}
else {
    array.push(value);
} arraySetter(array); return array.length; }
function arrayElementDeleter(shift: boolean): number { const array = arrayGetter(); const result = shift ? array.shift() : array.pop(); arraySetter(array); return result ? result : 0; }
function arraySplice(start: number, deleteCount: number, items: number[]): number[] { const array = arrayGetter(); const deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; const result = array.splice(start, deleteCountActual, ...items); arraySetter(array); return result; }
function _aGetter_(): number { return a; }
function _aSetter_(value: number): void { a = value; }
function aUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        _aSetter_(_aGetter_() + 1);
    }
    else {
        _aSetter_(_aGetter_() - 1);
    }
    if (pre) {
        return _aGetter_();
    }
    else {
        return inc ? _aGetter_() - 1 : _aGetter_() + 1;
    }
}
function resGetter(): number { return res; }
function resSetter(value: number): void { res = value; }
function resUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        resSetter(resGetter() + 1);
    }
    else {
        resSetter(resGetter() - 1);
    }
    if (pre) {
        return resGetter();
    }
    else {
        return inc ? resGetter() - 1 : resGetter() + 1;
    }
}
function remGetter(): number[] { return rem; }
function remSetter(value: number[]): void { rem = value; }
function remDoubleWay(value: number[]): number[] { rem = value; return rem; }
function remElementSetter(value: number, index: number): void { rem[index] = value; }
function remElementPusher(value: number, unshift: boolean): number { const array = remGetter(); if (unshift) {
    array.unshift(value);
}
else {
    array.push(value);
} remSetter(array); return array.length; }
function remElementDeleter(shift: boolean): number { const array = remGetter(); const result = shift ? array.shift() : array.pop(); remSetter(array); return result ? result : 0; }
function remSplice(start: number, deleteCount: number, items: number[]): number[] { const array = remGetter(); const deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; const result = array.splice(start, deleteCountActual, ...items); remSetter(array); return result; }
function remremGetter(): number[] { return remrem; }
function remremSetter(value: number[]): void { remrem = value; }
function remremDoubleWay(value: number[]): number[] { remrem = value; return remrem; }
function remremElementSetter(value: number, index: number): void { remrem[index] = value; }
function remremElementPusher(value: number, unshift: boolean): number { const array = remremGetter(); if (unshift) {
    array.unshift(value);
}
else {
    array.push(value);
} remremSetter(array); return array.length; }
function remremElementDeleter(shift: boolean): number { const array = remremGetter(); const result = shift ? array.shift() : array.pop(); remremSetter(array); return result ? result : 0; }
function remremSplice(start: number, deleteCount: number, items: number[]): number[] { const array = remremGetter(); const deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; const result = array.splice(start, deleteCountActual, ...items); remremSetter(array); return result; }
function numGetter(): number { return num; }
function numSetter(value: number): void { num = value; }
function numUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        numSetter(numGetter() + 1);
    }
    else {
        numSetter(numGetter() - 1);
    }
    if (pre) {
        return numGetter();
    }
    else {
        return inc ? numGetter() - 1 : numGetter() + 1;
    }
}
function strGetter(): string { return str; }
function strSetter(value: string): void { str = value; }
function arrGetter(): number[] { return arr; }
function arrSetter(value: number[]): void { arr = value; }
function arrDoubleWay(value: number[]): number[] { arr = value; return arr; }
function arrElementSetter(value: number, index: number): void { arr[index] = value; }
function arrElementPusher(value: number, unshift: boolean): number { const array = arrGetter(); if (unshift) {
    array.unshift(value);
}
else {
    array.push(value);
} arrSetter(array); return array.length; }
function arrElementDeleter(shift: boolean): number { const array = arrGetter(); const result = shift ? array.shift() : array.pop(); arrSetter(array); return result ? result : 0; }
function arrSplice(start: number, deleteCount: number, items: number[]): number[] { const array = arrGetter(); const deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; const result = array.splice(start, deleteCountActual, ...items); arrSetter(array); return result; }
function funcGetter(): (n: number) => number { return func; }
function funcSetter(value: (n: number) => number): void { func = value; }
function fibaGetter(): number { return fiba; }
function fibaSetter(value: number): void { fiba = value; }
function fibaUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        fibaSetter(fibaGetter() + 1);
    }
    else {
        fibaSetter(fibaGetter() - 1);
    }
    if (pre) {
        return fibaGetter();
    }
    else {
        return inc ? fibaGetter() - 1 : fibaGetter() + 1;
    }
}
function mapGetter(): Map<string, number> { return map; }
function mapSetter(value: Map<string, number>): void { map = value; }
function mapElementPusher(key: string, value: number): void { map.set(key, value); }
function mapElementDeleter(key: string): void { map.delete(key); }
function mapClear(): void { map.clear(); }
function iGetter(): number { return i; }
function iSetter(value: number): void { i = value; }
function iUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        iSetter(iGetter() + 1);
    }
    else {
        iSetter(iGetter() - 1);
    }
    if (pre) {
        return iGetter();
    }
    else {
        return inc ? iGetter() - 1 : iGetter() + 1;
    }
}
function ___bGetter___(): number { return b; }
function bSetter(value: number): void { b = value; }
function bUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        bSetter(___bGetter___() + 1);
    }
    else {
        bSetter(___bGetter___() - 1);
    }
    if (pre) {
        return ___bGetter___();
    }
    else {
        return inc ? ___bGetter___() - 1 : ___bGetter___() + 1;
    }
}
function num1Getter(): number { return num1; }
function num1Setter(value: number): void { num1 = value; }
function num1Unary(inc: boolean, pre: boolean): number {
    if (inc) {
        num1Setter(num1Getter() + 1);
    }
    else {
        num1Setter(num1Getter() - 1);
    }
    if (pre) {
        return num1Getter();
    }
    else {
        return inc ? num1Getter() - 1 : num1Getter() + 1;
    }
}
function num2Getter(): number { return num2; }
function num2Setter(value: number): void { num2 = value; }
function num2Unary(inc: boolean, pre: boolean): number {
    if (inc) {
        num2Setter(num2Getter() + 1);
    }
    else {
        num2Setter(num2Getter() - 1);
    }
    if (pre) {
        return num2Getter();
    }
    else {
        return inc ? num2Getter() - 1 : num2Getter() + 1;
    }
}
function sumGetter(): number { return sum; }
function sumSetter(value: number): void { sum = value; }
function sumUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        sumSetter(sumGetter() + 1);
    }
    else {
        sumSetter(sumGetter() - 1);
    }
    if (pre) {
        return sumGetter();
    }
    else {
        return inc ? sumGetter() - 1 : sumGetter() + 1;
    }
}
function fiboGetter(): number { return fibo; }
function fiboSetter(value: number): void { fibo = value; }
function fiboUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        fiboSetter(fiboGetter() + 1);
    }
    else {
        fiboSetter(fiboGetter() - 1);
    }
    if (pre) {
        return fiboGetter();
    }
    else {
        return inc ? fiboGetter() - 1 : fiboGetter() + 1;
    }
}
function arrowGetter(): string { return arrow; }
function arrowSetter(value: string): void { arrow = value; }
function globaGetter(): number { return globa; }
function globaSetter(value: number): void { globa = value; }
function globaUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        globaSetter(globaGetter() + 1);
    }
    else {
        globaSetter(globaGetter() - 1);
    }
    if (pre) {
        return globaGetter();
    }
    else {
        return inc ? globaGetter() - 1 : globaGetter() + 1;
    }
}
function globGetter(): number { return glob; }
function globSetter(value: number): void { glob = value; }
function globUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        globSetter(globGetter() + 1);
    }
    else {
        globSetter(globGetter() - 1);
    }
    if (pre) {
        return globGetter();
    }
    else {
        return inc ? globGetter() - 1 : globGetter() + 1;
    }
}
function newaGetter(): number { return newa; }
function newaSetter(value: number): void { newa = value; }
function newaUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        newaSetter(newaGetter() + 1);
    }
    else {
        newaSetter(newaGetter() - 1);
    }
    if (pre) {
        return newaGetter();
    }
    else {
        return inc ? newaGetter() - 1 : newaGetter() + 1;
    }
}
function newbGetter(): string { return newb; }
function newbSetter(value: string): void { newb = value; }
function cGetter(): boolean { return c; }
function cSetter(value: boolean): void { c = value; }
function glGetter(): number { return gl; }
function glSetter(value: number): void { gl = value; }
function glUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        glSetter(glGetter() + 1);
    }
    else {
        glSetter(glGetter() - 1);
    }
    if (pre) {
        return glGetter();
    }
    else {
        return inc ? glGetter() - 1 : glGetter() + 1;
    }
}
function carGetter(): Car { return car; }
function carSetter(value: Car): void { car = value; }
function scoGetter(): number { return sco; }
function scoSetter(value: number): void { sco = value; }
function scoUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        scoSetter(scoGetter() + 1);
    }
    else {
        scoSetter(scoGetter() - 1);
    }
    if (pre) {
        return scoGetter();
    }
    else {
        return inc ? scoGetter() - 1 : scoGetter() + 1;
    }
}
function varfGetter(): (x: number) => number { return varf; }
function varfSetter(value: (x: number) => number): void { varf = value; }
function doubleGetter(): (x: number) => number { return double; }
function doubleSetter(value: (x: number) => number): void { double = value; }
function aaaGetter() { return aaa; }
function aaaSetter(value): void { aaa = value; }
function bbbGetter() { return bbb; }
function bbbSetter(value): void { bbb = value; }
function cccGetter() { return ccc; }
function cccSetter(value): void { ccc = value; }
function dddGetter() { return ddd; }
function dddSetter(value): void { ddd = value; }
let array: number[];
let a: number = 3;
let res: number;
let rem: number[];
let remrem: number[];
function comba(x: number): number { console.log("Entering function comba"); return 2 * x; }
let num: number = 42;
let str: string = "Hello, World!";
let arr: number[];
let func: (n: number) => number;
let fiba: number;
function fibonacci(num: number, ze: string): number {
    console.log("Entering function fibonacci");
    let num1: number = 0;
    let num2: number = 1;
    let sum: number;
    console.log(ze);
    for (let i: number = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
let map: Map<string, number>;
let i: number = 0;
let b: number = 0;
function test(n: number): number {
    console.log("Entering function test");
    const testArray: number[] = [3, 7, 8, 8, 10];
    let res: number = n;
    for (let __i__ = 0; __i__ < testArray.length; __i__++) {
        let c = testArray[__i__];
        let _i_: number = 1;
        res += c + _i_;
    }
    return res;
}
function oi_void(): void {
    console.log("Entering function oi_void");
    let oi = void (0);
}
function cant(): void {
    console.log("Entering function cant");
    console.log("Can't do this");
    function can(): void {
        console.log("Can do this");
    }
    const arr = [1, 'a'];
    can();
}
let num1: number = 0;
export let num2: number = 1;
export let sum: number;
export let fibo: number;
let arrow: string = "->";
export function f(): number {
    console.log("Entering function f");
    console.log("5");
    return 5;
}
export function getArrayL(arg: string): number {
    console.log("Entering function getArrayL");
    const l = arg.length + f();
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}
export function mathThing(a: number, b: number): number {
    console.log("Entering function mathThing");
    const num3 = a + num2Getter();
    return num3 * b;
}
function n(arg: any): void {
    console.log("Entering function n");
    let c: number = numGetter() + num1Getter() + num2Getter() + sumGetter() + iGetter() + fiboGetter() + arrGetter()[0];
    console.log(arrowGetter());
    console.log((c).toString());
    console.log((arg).toString());
}
let globa: number = 1;
function indirect(): void {
    console.log("Entering function indirect");
    globaSetter(20);
}
let glob: number = 1;
function findirect(): void {
    console.log("Entering function findirect");
    globSetter(20);
}
let newa: number = 0;
let newb: string = "hello";
let c: boolean;
function aGetter(): number {
    console.log("Entering function aGetter");
    return newaGetter() + 5;
}
function aSetter(val: boolean): void {
    console.log("Entering function aSetter");
    cSetter(val);
}
function __bGetter__(): string {
    console.log("Entering function __bGetter__");
    return newbGetter() + " jk";
}
function main(): number {
    console.log("Entering function main");
    aSetter(false);
    if (cGetter()) {
        return ___bGetter___();
    }
    return "no " + ___bGetter___();
}
var gl: number = 10;
function mult(a: number, b: number): number {
    console.log("Entering function mult");
    const arr = [1, 2, "aaa"];
    console.log((arr).toString());
    return a * b;
}
function comp(): number {
    console.log("Entering function comp");
    const res: number = 5 + mult(2, 3);
    return res;
}
function useGL(): number {
    console.log("Entering function useGL");
    return 2 * glGetter();
}
function uncomp(n: number): number {
    console.log("Entering function uncomp");
    return n * useGL();
}
let car: Car;
function futureWork(): void {
    console.log("Entering function futureWork");
    console.log("Objects aren't supported yet!");
}
var sco: number;
function otherScope(): string {
    console.log("Entering function otherScope");
    let sco: string = "aaaa";
    return sco;
}
function printString(arg: string): string {
    console.log("Entering function printString");
    const arrow: string = "->";
    return arg + " " + arrow + " " + arg.length.toString();
}
function getArray(arg: string): number {
    console.log("Entering function getArray");
    const a: string = printStringgood("hi");
    const l = arg.length;
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}
function fibo_ex(num: number): number {
    console.log("Entering function fibo_ex");
    let num1: number = 0;
    let num2: number = 1;
    let sum: number;
    for (let i: number = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
function printStringgood(arg: string): string {
    console.log("Entering function printStringgood");
    const a: number = 99;
    console.log((a).toString());
    return arg + " " + arrowGetter() + " " + arg.length.toString();
}
export function printString2(arg: string): string {
    console.log("Entering function printString2");
    const arrow: string = "->";
    return arg + " " + arrow + " " + arg.length.toString();
}
function fibo_ex2(num: number): number {
    console.log("Entering function fibo_ex2");
    let num1: number = 0;
    let num2: number = 1;
    let sum: number;
    for (let i: number = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
function getArrayL2(arg: string): number {
    console.log("Entering function getArrayL2");
    const l = arg.length;
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}
let varf: (x: number) => number;
let double: (x: number) => number;
function arrayStuff(): void {
    console.log("Entering function arrayStuff");
    const strArr: string[] = ['a', 'b', 'c'];
    console.log((strArr.map(function autoFunc8280(x): string {
        return "hello" + x;
    })).toString()); // ["helloa", "hellob", "helloc"]
}
let aaa;
let bbb;
let ccc;
let ddd;
function wecanbevoid(): void {
    console.log("Entering function wecanbevoid");
    console.log("The call of the void");
}
function divideNumbers(a: number, b: number): number {
    console.log("Entering function divideNumbers");
    return a / b;
}
function _main_(): void {
    (function autoFunc1(): void {
        console.log('Hi, crocodile!');
    })();
    (function autoFunc51(): void {
        console.log('See you later, aligator!');
    }());
    arraySetter([1, 2, 3, 4, 5]);
    console.log((arrayGetter()).toString());
    // Assign new value at index 2
    arrayElementSetter(33, 2);
    console.log((arrayGetter()).toString());
    _aSetter_(3);
    arrayElementSetter(333, _aGetter_());
    console.log((arrayGetter()).toString());
    // Assign new value at computed index
    arrayElementSetter(0, (_aGetter_() + 2.5) * 0);
    console.log((arrayGetter()).toString());
    resSetter(arrayGetter()[_aGetter_()]);
    console.log((arrayGetter()).toString());
    // Get value at computed index
    resSetter(arrayGetter()[(_aGetter_() + 2.5) * 0]);
    console.log((arrayGetter()).toString());
    // Test push and pop
    arrayElementPusher(6, false);
    console.log((arrayGetter()).toString());
    console.log((arrayElementDeleter(false)).toString());
    console.log((arrayGetter()).toString());
    // Test shift and unshift
    arrayElementPusher(0, true);
    console.log((arrayGetter()).toString());
    console.log((arrayElementDeleter(true)).toString());
    console.log((arrayGetter()).toString());
    // Test splice
    console.log((arraySplice(2, 2, [])).toString());
    console.log((arrayGetter()).toString());
    remSetter(arraySplice(0, 1, [444, 909]));
    console.log((remGetter()).toString());
    console.log((arrayGetter()).toString());
    remremSetter(arraySplice(1, arrayGetter().length, []));
    console.log((remremGetter()).toString());
    console.log((arrayGetter()).toString());
    numSetter(42);
    strSetter("Hello, World!");
    arrSetter([1, 2, 3]);
    funcSetter(function autoFunc1140(n: number): number {
        return n * 2;
    });
    // Test console.log with different types of arguments
    console.log((numGetter()).toString()); // Number
    console.log(strGetter()); // String
    console.log((arrGetter()).toString()); // Array
    console.log((funcGetter()(10)).toString()); // Function call
    console.log((comba(5)).toString()); // Function call (defined above)
    console.log((8 * numGetter() + 6).toString()); // Expression
    console.log((comba(8) * comba(numGetter()) + 6 / 10).toString()); // Complex Expression
    console.log((arrGetter()[1]).toString()); // Array element
    console.log(`The number is ${numGetter()}`); // Template string
    // Test console.assert with different types of arguments
    console.assert(numGetter() === 42, "Number is not 42");
    console.assert(numGetter() < 0, "Number is not negative");
    console.assert(arrGetter().length === 3, "Array length is not 3");
    console.assert(typeof funcGetter() === "function", "Func is not a function");
    // Test other console methods with different types of arguments
    console.warn((numGetter()).toString());
    console.error(strGetter());
    console.info("important information");
    console.debug((arrGetter()).toString());
    fibaSetter(fibonacci(4, "pedro"));
    fibonacci(8, "ferreira");
    arraySetter([2, 4, 6, 8, 10]);
    mapSetter(new Map([['a', 1], ['b', 2], ['c', 3]]));
    strSetter('hello');
    iSetter(0);
    for (iSetter(0); iGetter() < arrayGetter().length; iUnary(true, false)) {
        console.log((iGetter()).toString());
    }
    for (let _i_ in mapGetter()) {
        iSetter(_i_);
        console.log((iGetter()).toString());
    }
    for (iSetter(0); iGetter() < strGetter().length; iUnary(true, false)) {
        console.log((iGetter()).toString());
    }
    for (let ii = 0; ii < arrayGetter().length; ii++) {
        console.log(ii);
    }
    for (const ii in mapGetter()) {
        console.log(ii);
    }
    for (let ii = 0; ii < strGetter().length; ii++) {
        console.log(ii);
    }
    for (let _i_ = 0; _i_ < arrayGetter().length; _i_++) {
        let a = arrayGetter()[_i_];
        console.log((a).toString());
    }
    for (let _i_ = 0; _i_ < strGetter().length; _i_++) {
        let a = strGetter()[_i_];
        console.log(a);
    }
    bSetter(0);
    for (let _i_ = 0; _i_ < arrayGetter().length; _i_++) {
        bSetter(arrayGetter()[_i_]);
        console.log((___bGetter___()).toString());
    }
    for (let _i_ = 0; _i_ < strGetter().length; _i_++) {
        bSetter(strGetter()[_i_]);
        console.log((___bGetter___()).toString());
    }
    console.log((test(9)).toString());
    cant();
    numSetter(14);
    num1Setter(0);
    num2Setter(1);
    sumSetter(num1Unary(true, false));
    iSetter(0);
    for (iSetter(0); iGetter() < numGetter(); iUnary(true, false)) {
        sumSetter(num1Getter() + num2Getter());
        num1Setter(num2Getter());
        num2Setter(sumGetter());
    }
    fiboSetter(num2Getter());
    arrowSetter("->");
    arrSetter([0, 3, arrowGetter().length, 4.5]);
    console.log("Fibo: " + fiboGetter().toString() + ", Array" + arrowGetter() + arrGetter()[3].toString());
    console.log((getArrayL("hello")).toString());
    console.log((mathThing(2, 5)).toString());
    globaSetter(1);
    globaSetter(3);
    console.log((globaGetter()).toString());
    indirect();
    console.log((globaGetter()).toString());
    globaSetter(globaGetter() * 2);
    console.log((globaGetter()).toString());
    globSetter(1);
    console.log((globGetter()).toString());
    findirect();
    console.log((globGetter()).toString());
    globSetter(globGetter() * 2);
    console.log((globGetter()).toString());
    newaSetter(0);
    newbSetter("hello");
    cSetter(newaGetter() == 0);
    console.log((aGetter()).toString());
    console.log(__bGetter__());
    console.log((main()).toString());
    glSetter(10);
    console.log((comp()).toString());
    console.log((uncomp(3)).toString());
    class Car {
        type;
        model;
        year;
        constructor(type, model, year) {
            this.type = type;
            this.model = model;
            this.year = year;
        }
        getModel(): any {
            return this.model;
        }
    }
    ;
    carSetter(new Car("Fiat", "500", 2001));
    futureWork();
    console.log((carGetter().getModel()).toString());
    scoSetter(10);
    console.log(otherScope());
    arrowSetter("->");
    console.log((fibo_ex(5)).toString());
    console.log((getArray("hello")).toString());
    console.log(printStringgood("hi"));
    console.log(printString("aaa"));
    printString2("hello");
    fibo_ex2(5);
    getArrayL2("hello");
    arrSetter([1, 2, 3]);
    varfSetter(function autoFunc8026(x: number): number {
        return x ** 2;
    });
    doubleSetter(function autoFunc8060(x: number): number {
        return x * 2;
    });
    console.log((doubleGetter()(5)).toString());
    console.log((varfGetter()(12)).toString());
    arrayStuff();
    aaaSetter(void (0));
    bbbSetter(void (0));
    cccSetter(void (3));
    dddSetter(void (4));
    wecanbevoid();
    console.log('Hello from webinar.js');
    console.log((divideNumbers(22, 77)).toString());
}
_main_();
