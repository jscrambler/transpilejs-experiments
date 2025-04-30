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
export function arrayGetter() { return array; }
export function arraySetter(value) { array = value; }
export function arrayDoubleWay(value) { array = value; return array; }
export function arrayElementSetter(value, index) { array[index] = value; }
export function arrayElementPusher(value, unshift) {
    var array = arrayGetter();
    if (unshift) {
        array.unshift(value);
    }
    else {
        array.push(value);
    }
    arraySetter(array);
    return array.length;
}
export function arrayElementDeleter(shift) { var array = arrayGetter(); var result = shift ? array.shift() : array.pop(); arraySetter(array); return result ? result : 0; }
export function arraySplice(start, deleteCount, items) { var array = arrayGetter(); var deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; var result = array.splice.apply(array, __spreadArray([start, deleteCountActual], items, false)); arraySetter(array); return result; }
export function mapGetter() { return map; }
export function mapSetter(value) { map = value; }
export function mapElementPusher(key, value) { map.set(key, value); }
export function mapElementDeleter(key) { map.delete(key); }
export function mapClear() { map.clear(); }
export function strGetter() { return str; }
export function strSetter(value) { str = value; }
export function iGetter() { return i; }
export function iSetter(value) { i = value; }
export function iUnary(inc, pre) {
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
export function bGetter() { return b; }
export function bSetter(value) { b = value; }
export function bUnary(inc, pre) {
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
export var array;
export var map;
export var str = 'hello';
export var i = 0;
export var b = 0;
