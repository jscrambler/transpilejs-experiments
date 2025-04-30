@external("./combined_exporter.js", "num2Getter")
declare function num2Getter(): number;
@external("./combined_exporter.js", "globaSetter")
declare function globaSetter(value: number): void;
@external("./combined_exporter.js", "globSetter")
declare function globSetter(value: number): void;
@external("./combined_exporter.js", "newaGetter")
declare function newaGetter(): number;
@external("./combined_exporter.js", "cSetter")
declare function cSetter(value: boolean): void;
@external("./combined_exporter.js", "newbGetter")
declare function newbGetter(): string;
@external("./combined_exporter.js", "mult")
declare function mult(a: number, b: number): number;
@external("./combined_exporter.js", "glGetter")
declare function glGetter(): number;
@external("./combined_exporter.js", "arrowGetter")
declare function arrowGetter(): string;

export function can(): void {
    console.log("Can do this");
}
export function comba(x: number): number { console.log("Entering function comba"); return 2 * x; }
export function fibonacci(num: number, ze: string): number {
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
export function test(n: number): number {
    console.log("Entering function test");
    const testArray: number[] = [3, 7, 8, 8, 10];
    let res: number = n;
    for (let __i__ = 0; __i__ < testArray.length; __i__++) {
        let c = testArray[i32(__i__)];
        let _i_: number = 1;
        res += c + _i_;
    }
    return res;
}
function oi_void(): void {
    console.log("Entering function oi_void");
    let oi = void (0);
}
export function f(): number {
    console.log("Entering function f");
    console.log("5");
    return 5;
}
export function getArrayL(arg: string): number {
    console.log("Entering function getArrayL");
    const l = arg.length + f();
    const arr = [0, 3, 2, 4.5, l];
    return arr.length;
}
export function mathThing(a: number, b: number): number {
    console.log("Entering function mathThing");
    const num3 = a + num2Getter();
    return num3 * b;
}
export function indirect(): void {
    console.log("Entering function indirect");
    globaSetter(20);
}
export function findirect(): void {
    console.log("Entering function findirect");
    globSetter(20);
}
export function aGetter(): number {
    console.log("Entering function aGetter");
    return newaGetter() + 5;
}
export function aSetter(val: boolean): void {
    console.log("Entering function aSetter");
    cSetter(val);
}
export function __bGetter__(): string {
    console.log("Entering function __bGetter__");
    return newbGetter() + " jk";
}
export function comp(): number {
    console.log("Entering function comp");
    const res: number = 5 + mult(2, 3);
    return res;
}
function useGL(): number {
    console.log("Entering function useGL");
    return 2 * glGetter();
}
export function uncomp(n: number): number {
    console.log("Entering function uncomp");
    return n * useGL();
}
export function futureWork(): void {
    console.log("Entering function futureWork");
    console.log("Objects aren't supported yet!");
}
export function otherScope(): string {
    console.log("Entering function otherScope");
    let sco: string = "aaaa";
    return sco;
}
export function printString(arg: string): string {
    console.log("Entering function printString");
    const arrow: string = "->";
    return arg + " " + arrow + " " + arg.length.toString();
}
export function getArray(arg: string): number {
    console.log("Entering function getArray");
    const a: string = printStringgood("hi");
    const l = arg.length;
    const arr = [0, 3, 2, 4.5, l];
    return arr.length;
}
export function fibo_ex(num: number): number {
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
export function printStringgood(arg: string): string {
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
export function fibo_ex2(num: number): number {
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
export function getArrayL2(arg: string): number {
    console.log("Entering function getArrayL2");
    const l = arg.length;
    const arr = [0, 3, 2, 4.5, l];
    return arr.length;
}
export function wecanbevoid(): void {
    console.log("Entering function wecanbevoid");
    console.log("The call of the void");
}
export function divideNumbers(a: number, b: number): number {
    console.log("Entering function divideNumbers");
    return a / b;
}
