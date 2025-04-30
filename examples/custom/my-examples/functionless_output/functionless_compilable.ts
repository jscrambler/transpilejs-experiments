@external("./functionless_exporter.js", "num2Getter")
declare function num2Getter(): number;
@external("./functionless_exporter.js", "numSetter")
declare function numSetter(value: number): void;
@external("./functionless_exporter.js", "num1Setter")
declare function num1Setter(value: number): void;
@external("./functionless_exporter.js", "num2Setter")
declare function num2Setter(value: number): void;
@external("./functionless_exporter.js", "sumSetter")
declare function sumSetter(value: number): void;
@external("./functionless_exporter.js", "iSetter")
declare function iSetter(value: number): void;
@external("./functionless_exporter.js", "iGetter")
declare function iGetter(): number;
@external("./functionless_exporter.js", "numGetter")
declare function numGetter(): number;
@external("./functionless_exporter.js", "iUnary")
declare function iUnary(inc: boolean, pre: boolean): number;
@external("./functionless_exporter.js", "fiboSetter")
declare function fiboSetter(value: number): void;
@external("./functionless_exporter.js", "arrowSetter")
declare function arrowSetter(value: string): void;
@external("./functionless_exporter.js", "arrSetter")
declare function arrSetter(value: number[]): void;
@external("./functionless_exporter.js", "fiboGetter")
declare function fiboGetter(): number;
@external("./functionless_exporter.js", "arrowGetter")
declare function arrowGetter(): string;
@external("./functionless_exporter.js", "arrGetter")
declare function arrGetter(): number[];
@external("./functionless_exporter.js", "num1Unary")
declare function num1Unary(inc: boolean, pre: boolean): number;
@external("./functionless_exporter.js", "num1Getter")
declare function num1Getter(): number;
@external("./functionless_exporter.js", "sumGetter")
declare function sumGetter(): number;

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
function n(arg: any): void {
    console.log("Entering function n");
    let c: number = numGetter() + num1Getter() + num2Getter() + sumGetter() + iGetter() + fiboGetter() + arrGetter()[0];
    console.log(arrowGetter());
    console.log((c).toString());
    console.log((arg).toString());
}
export function main(): void {
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
