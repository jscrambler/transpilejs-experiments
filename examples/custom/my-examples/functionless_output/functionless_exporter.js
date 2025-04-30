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
export function num1Getter() { return num1; }
export function num1Setter(value) { num1 = value; }
export function num1Unary(inc, pre) {
    if (inc) {
        num1Setter(num1Getter() + 1);
    }
    else {
        num1Setter(num1Getter() - 1);
    }
    if (pre) {
        return num1Getter();
    }
    else {
        return inc ? num1Getter() - 1 : num1Getter() + 1;
    }
}
export function num2Getter() { return num2; }
export function num2Setter(value) { num2 = value; }
export function num2Unary(inc, pre) {
    if (inc) {
        num2Setter(num2Getter() + 1);
    }
    else {
        num2Setter(num2Getter() - 1);
    }
    if (pre) {
        return num2Getter();
    }
    else {
        return inc ? num2Getter() - 1 : num2Getter() + 1;
    }
}
export function sumGetter() { return sum; }
export function sumSetter(value) { sum = value; }
export function sumUnary(inc, pre) {
    if (inc) {
        sumSetter(sumGetter() + 1);
    }
    else {
        sumSetter(sumGetter() - 1);
    }
    if (pre) {
        return sumGetter();
    }
    else {
        return inc ? sumGetter() - 1 : sumGetter() + 1;
    }
}
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
export function fiboGetter() { return fibo; }
export function fiboSetter(value) { fibo = value; }
export function fiboUnary(inc, pre) {
    if (inc) {
        fiboSetter(fiboGetter() + 1);
    }
    else {
        fiboSetter(fiboGetter() - 1);
    }
    if (pre) {
        return fiboGetter();
    }
    else {
        return inc ? fiboGetter() - 1 : fiboGetter() + 1;
    }
}
export function arrowGetter() { return arrow; }
export function arrowSetter(value) { arrow = value; }
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
export var num = 14, num1 = 0;
export var num2 = 1;
export var sum;
export var i = 0;
export var fibo;
export var arrow = "->";
export var arr;
