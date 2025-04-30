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
export function numGetter() { return num; }
export function numSetter(value) { num = value; }
export function numUnary(inc, pre) {
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
export function strGetter() { return str; }
export function strSetter(value) { str = value; }
export function arrGetter() { return arr; }
export function arrSetter(value) { arr = value; }
export function arrDoubleWay(value) { arr = value; return arr; }
export function arrElementSetter(value, index) { arr[index] = value; }
export function arrElementPusher(value, unshift) {
    var array = arrGetter();
    if (unshift) {
        array.unshift(value);
    }
    else {
        array.push(value);
    }
    arrSetter(array);
    return array.length;
}
export function arrElementDeleter(shift) { var array = arrGetter(); var result = shift ? array.shift() : array.pop(); arrSetter(array); return result ? result : 0; }
export function arrSplice(start, deleteCount, items) { var array = arrGetter(); var deleteCountActual = deleteCount < array.length ? deleteCount : array.length - start; var result = array.splice.apply(array, __spreadArray([start, deleteCountActual], items, false)); arrSetter(array); return result; }
export function funcGetter() { return func; }
export function funcSetter(value) { func = value; }
export var num = 42;
export var str = "Hello, World!";
export var arr;
export var func;
