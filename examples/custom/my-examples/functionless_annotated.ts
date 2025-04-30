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
export let num: number = 14, num1: number = 0;
export let num2: number = 1;
export let sum: number;
export let i: number = 0;
export let fibo: number;
let arrow: string = "->";
let arr: number[];
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
function main(): void {
    numSetter(14), num1Setter(0);
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
}
main();
