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
function varfGetter(): (x: number) => number { return varf; }
function varfSetter(value: (x: number) => number): void { varf = value; }
function doubleGetter(): (x: number) => number { return double; }
function doubleSetter(value: (x: number) => number): void { double = value; }
let arr: number[];
let varf: (x: number) => number;
let double: (x: number) => number;
function arrayStuff(): void {
    console.log("Entering function arrayStuff");
    const strArr: string[] = ['a', 'b', 'c'];
    console.log((strArr.map(function autoFunc287(x): string {
        return "hello" + x;
    })).toString()); // ["helloa", "hellob", "helloc"]
}
function main(): void {
    arrSetter([1, 2, 3]);
    varfSetter(function autoFunc33(x: number): number {
        return x ** 2;
    });
    doubleSetter(function autoFunc67(x: number): number {
        return x * 2;
    });
    console.log((doubleGetter()(5)).toString());
    console.log((varfGetter()(12)).toString());
    arrayStuff();
}
main();
