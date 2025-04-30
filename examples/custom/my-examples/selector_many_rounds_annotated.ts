function arrowGetter(): string { return arrow; }
function arrowSetter(value: string): void { arrow = value; }
let arrow: string = "->";
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
function main(): void {
    arrowSetter("->");
    console.log((fibo_ex(5)).toString());
    console.log((getArray("hello")).toString());
    console.log(printStringgood("hi"));
    console.log(printString("aaa"));
}
main();
