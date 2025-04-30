function aGetter(): number[] { return a; }
function aSetter(value: number[]): void { a = value; }
function aDoubleWay(value: number[]): number[] { a = value; return a; }
function aElementSetter(value: number, index: number): void { a[index] = value; }
function aElementPusher(value: number, unshift: boolean): number { const array = aGetter(); if (unshift) {
    array.unshift(value);
}
else {
    array.push(value);
} aSetter(array); return array.length; }
function aElementDeleter(shift: boolean): number { const array = aGetter(); const result = shift ? array.shift() : array.pop(); aSetter(array); return result ? result : 0; }
function aSplice(start: number, deleteCount: number, items: number[]): number[] { const array = aGetter(); const deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; const result = array.splice(start, deleteCountActual, ...items); aSetter(array); return result; }
function indGetter(): number { return ind; }
function indSetter(value: number): void { ind = value; }
function indUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        indSetter(indGetter() + 1);
    }
    else {
        indSetter(indGetter() - 1);
    }
    if (pre) {
        return indGetter();
    }
    else {
        return inc ? indGetter() - 1 : indGetter() + 1;
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
function popGetter(): number { return pop; }
function popSetter(value: number): void { pop = value; }
function popUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        popSetter(popGetter() + 1);
    }
    else {
        popSetter(popGetter() - 1);
    }
    if (pre) {
        return popGetter();
    }
    else {
        return inc ? popGetter() - 1 : popGetter() + 1;
    }
}
function shiftGetter(): number { return shift; }
function shiftSetter(value: number): void { shift = value; }
function shiftUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        shiftSetter(shiftGetter() + 1);
    }
    else {
        shiftSetter(shiftGetter() - 1);
    }
    if (pre) {
        return shiftGetter();
    }
    else {
        return inc ? shiftGetter() - 1 : shiftGetter() + 1;
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
let a: number[];
let ind: number = 3;
let res: number;
let pop: number;
let shift: number;
let rem: number[];
let remrem: number[];
function main(): void {
    aSetter([1, 2, 3, 4, 5]);
    console.log((aGetter()).toString());
    // Assign new value at index 2
    aElementSetter(33, 2);
    console.log((aGetter()).toString());
    indSetter(3);
    aElementSetter(333, indGetter());
    console.log((aGetter()).toString());
    // Assign new value at computed index
    aElementSetter(0, (indGetter() + 2.5) * 0);
    console.log((aGetter()).toString());
    resSetter(aGetter()[indGetter()]);
    console.log((aGetter()).toString());
    // Get value at computed index
    resSetter(aGetter()[(indGetter() + 2.5) * 0]);
    console.log((aGetter()).toString());
    // Test push and pop
    aElementPusher(6, false);
    console.log((aGetter()).toString());
    popSetter(aElementDeleter(false));
    console.log((popGetter()).toString());
    console.log((aGetter()).toString());
    // Test shift and unshift
    aElementPusher(0, true);
    console.log((aGetter()).toString());
    shiftSetter(aElementDeleter(true));
    console.log((shiftGetter()).toString());
    console.log((aGetter()).toString());
    // Test splice
    console.log((aSplice(2, 2, [])).toString());
    console.log((aGetter()).toString());
    remSetter(aSplice(0, 1, [444, 909]));
    console.log((remGetter()).toString());
    console.log((aGetter()).toString());
    remremSetter(aSplice(1, aGetter().length, []));
    console.log((remremGetter()).toString());
    console.log((aGetter()).toString());
}
main();
