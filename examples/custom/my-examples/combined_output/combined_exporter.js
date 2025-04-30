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
export function _aGetter_() { return a; }
export function _aSetter_(value) { a = value; }
export function aUnary(inc, pre) {
    if (inc) {
        _aSetter_(_aGetter_() + 1);
    }
    else {
        _aSetter_(_aGetter_() - 1);
    }
    if (pre) {
        return _aGetter_();
    }
    else {
        return inc ? _aGetter_() - 1 : _aGetter_() + 1;
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
export function fibaGetter() { return fiba; }
export function fibaSetter(value) { fiba = value; }
export function fibaUnary(inc, pre) {
    if (inc) {
        fibaSetter(fibaGetter() + 1);
    }
    else {
        fibaSetter(fibaGetter() - 1);
    }
    if (pre) {
        return fibaGetter();
    }
    else {
        return inc ? fibaGetter() - 1 : fibaGetter() + 1;
    }
}
export function mapGetter() { return map; }
export function mapSetter(value) { map = value; }
export function mapElementPusher(key, value) { map.set(key, value); }
export function mapElementDeleter(key) { map.delete(key); }
export function mapClear() { map.clear(); }
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
export function ___bGetter___() { return b; }
export function bSetter(value) { b = value; }
export function bUnary(inc, pre) {
    if (inc) {
        bSetter(___bGetter___() + 1);
    }
    else {
        bSetter(___bGetter___() - 1);
    }
    if (pre) {
        return ___bGetter___();
    }
    else {
        return inc ? ___bGetter___() - 1 : ___bGetter___() + 1;
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
export function globaGetter() { return globa; }
export function globaSetter(value) { globa = value; }
export function globaUnary(inc, pre) {
    if (inc) {
        globaSetter(globaGetter() + 1);
    }
    else {
        globaSetter(globaGetter() - 1);
    }
    if (pre) {
        return globaGetter();
    }
    else {
        return inc ? globaGetter() - 1 : globaGetter() + 1;
    }
}
export function globGetter() { return glob; }
export function globSetter(value) { glob = value; }
export function globUnary(inc, pre) {
    if (inc) {
        globSetter(globGetter() + 1);
    }
    else {
        globSetter(globGetter() - 1);
    }
    if (pre) {
        return globGetter();
    }
    else {
        return inc ? globGetter() - 1 : globGetter() + 1;
    }
}
export function newaGetter() { return newa; }
export function newaSetter(value) { newa = value; }
export function newaUnary(inc, pre) {
    if (inc) {
        newaSetter(newaGetter() + 1);
    }
    else {
        newaSetter(newaGetter() - 1);
    }
    if (pre) {
        return newaGetter();
    }
    else {
        return inc ? newaGetter() - 1 : newaGetter() + 1;
    }
}
export function newbGetter() { return newb; }
export function newbSetter(value) { newb = value; }
export function cGetter() { return c; }
export function cSetter(value) { c = value; }
export function glGetter() { return gl; }
export function glSetter(value) { gl = value; }
export function glUnary(inc, pre) {
    if (inc) {
        glSetter(glGetter() + 1);
    }
    else {
        glSetter(glGetter() - 1);
    }
    if (pre) {
        return glGetter();
    }
    else {
        return inc ? glGetter() - 1 : glGetter() + 1;
    }
}
export function carGetter() { return car; }
export function carSetter(value) { car = value; }
export function scoGetter() { return sco; }
export function scoSetter(value) { sco = value; }
export function scoUnary(inc, pre) {
    if (inc) {
        scoSetter(scoGetter() + 1);
    }
    else {
        scoSetter(scoGetter() - 1);
    }
    if (pre) {
        return scoGetter();
    }
    else {
        return inc ? scoGetter() - 1 : scoGetter() + 1;
    }
}
export function varfGetter() { return varf; }
export function varfSetter(value) { varf = value; }
export function doubleGetter() { return double; }
export function doubleSetter(value) { double = value; }
export function aaaGetter() { return aaa; }
export function aaaSetter(value) { aaa = value; }
export function bbbGetter() { return bbb; }
export function bbbSetter(value) { bbb = value; }
export function cccGetter() { return ccc; }
export function cccSetter(value) { ccc = value; }
export function dddGetter() { return ddd; }
export function dddSetter(value) { ddd = value; }
export var array;
export var a = 3;
export var res;
export var rem;
export var remrem;
export var num = 42;
export var str = "Hello, World!";
export var arr;
export var func;
export var fiba;
export var map;
export var i = 0;
export var b = 0;
export var num1 = 0;
export var num2 = 1;
export var sum;
export var fibo;
export var arrow = "->";
export var globa = 1;
export var glob = 1;
export var newa = 0;
export var newb = "hello";
export var c;
export var gl = 10;
export function mult(a, b) {
    console.log("Entering function mult");
    var arr = [1, 2, "aaa"];
    console.log((arr).toString());
    return a * b;
}
export var car;
export var sco;
export var varf;
export var double;
export var aaa;
export var bbb;
export var ccc;
export var ddd;
