function aGetter(): number { return a; }
function aSetter(value: number): void { a = value; }
function aUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        aSetter(aGetter() + 1);
    }
    else {
        aSetter(aGetter() - 1);
    }
    if (pre) {
        return aGetter();
    }
    else {
        return inc ? aGetter() - 1 : aGetter() + 1;
    }
}
let a: number;
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
function main(): void {
    aSetter(fibonacci(4, "pedro"));
    fibonacci(8, "ferreira");
}
main();
