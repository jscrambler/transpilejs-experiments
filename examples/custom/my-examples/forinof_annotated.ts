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
function mapGetter(): Map<string, number> { return map; }
function mapSetter(value: Map<string, number>): void { map = value; }
function mapElementPusher(key: string, value: number): void { map.set(key, value); }
function mapElementDeleter(key: string): void { map.delete(key); }
function mapClear(): void { map.clear(); }
function strGetter(): string { return str; }
function strSetter(value: string): void { str = value; }
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
function bGetter(): number { return b; }
function bSetter(value: number): void { b = value; }
function bUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        bSetter(bGetter() + 1);
    }
    else {
        bSetter(bGetter() - 1);
    }
    if (pre) {
        return bGetter();
    }
    else {
        return inc ? bGetter() - 1 : bGetter() + 1;
    }
}
let array: number[];
let map: Map<string, number>;
let str: string = 'hello';
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
function a(): void {
    console.log("Entering function a");
    let oi = void (0);
}
function main(): void {
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
        console.log((bGetter()).toString());
    }
    for (let _i_ = 0; _i_ < strGetter().length; _i_++) {
        bSetter(strGetter()[_i_]);
        console.log((bGetter()).toString());
    }
    console.log((test(9)).toString());
}
main();
