export function __spreadArray(to, source, pack) {
    // Convert the source to an array if it is a string or other iterable object
    const sourceArray = Array.isArray(source) ? source : Array.from(source);

    if (pack || arguments.length === 2) {
        // Create a new array to hold the elements
        const result = to.slice();
        // Iterate over the elements in the "sourceArray"
        for (let i = 0, l = sourceArray.length; i < l; i++) {
            // Only copy the element if it exists in the "sourceArray"
            if (i in sourceArray) {
                result.push(sourceArray[i]);
            }
        }
        return result;
    }
    // If not packing, simply concatenate the arrays
    return to.concat(sourceArray);
}
export function aGetter() { return a; }
export function aSetter(value) { a = value; }
export function aDoubleWay(value) { a = value; return a; }
export function aElementSetter(value, index) { a[index] = value; }
export function aElementPusher(value, unshift) {
    var array = aGetter();
    if (unshift) {
        array.unshift(value);
    }
    else {
        array.push(value);
    }
    aSetter(array);
    return array.length;
}
export function aElementDeleter(shift) { var array = aGetter(); var result = shift ? array.shift() : array.pop(); aSetter(array); return result ? result : 0; }
export function aSplice(start, deleteCount, items) { var array = aGetter(); var deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; var result = array.splice.apply(array, __spreadArray([start, deleteCountActual], items, false)); aSetter(array); return result; }
export function indGetter() { return ind; }
export function indSetter(value) { ind = value; }
export function indUnary(inc, pre) {
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
export function resGetter() { return res; }
export function resSetter(value) { res = value; }
export function resUnary(inc, pre) {
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
export function popGetter() { return pop; }
export function popSetter(value) { pop = value; }
export function popUnary(inc, pre) {
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
export function shiftGetter() { return shift; }
export function shiftSetter(value) { shift = value; }
export function shiftUnary(inc, pre) {
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
export function remGetter() { return rem; }
export function remSetter(value) { rem = value; }
export function remDoubleWay(value) { rem = value; return rem; }
export function remElementSetter(value, index) { rem[index] = value; }
export function remElementPusher(value, unshift) {
    var array = remGetter();
    if (unshift) {
        array.unshift(value);
    }
    else {
        array.push(value);
    }
    remSetter(array);
    return array.length;
}
export function remElementDeleter(shift) { var array = remGetter(); var result = shift ? array.shift() : array.pop(); remSetter(array); return result ? result : 0; }
export function remSplice(start, deleteCount, items) { var array = remGetter(); var deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; var result = array.splice.apply(array, __spreadArray([start, deleteCountActual], items, false)); remSetter(array); return result; }
export function remremGetter() { return remrem; }
export function remremSetter(value) { remrem = value; }
export function remremDoubleWay(value) { remrem = value; return remrem; }
export function remremElementSetter(value, index) { remrem[index] = value; }
export function remremElementPusher(value, unshift) {
    var array = remremGetter();
    if (unshift) {
        array.unshift(value);
    }
    else {
        array.push(value);
    }
    remremSetter(array);
    return array.length;
}
export function remremElementDeleter(shift) { var array = remremGetter(); var result = shift ? array.shift() : array.pop(); remremSetter(array); return result ? result : 0; }
export function remremSplice(start, deleteCount, items) { var array = remremGetter(); var deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; var result = array.splice.apply(array, __spreadArray([start, deleteCountActual], items, false)); remremSetter(array); return result; }
export var a;
export var ind = 3;
export var res;
export var pop;
export var shift;
export var rem;
export var remrem;
