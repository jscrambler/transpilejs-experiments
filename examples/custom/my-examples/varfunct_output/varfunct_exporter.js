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
export function varfGetter() { return varf; }
export function varfSetter(value) { varf = value; }
export function doubleGetter() { return double; }
export function doubleSetter(value) { double = value; }
export var arr;
export var varf;
export var double;
export function arrayStuff() {
    console.log("Entering function arrayStuff");
    var strArr = ['a', 'b', 'c'];
    console.log((strArr.map(function autoFunc287(x) {
        return "hello" + x;
    })).toString()); // ["helloa", "hellob", "helloc"]
}
