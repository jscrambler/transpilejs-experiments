import { can, comba, fibonacci, test, f, getArrayL, mathThing, indirect, findirect, aGetter, aSetter, __bGetter__, comp, uncomp, futureWork, otherScope, printString, getArray, fibo_ex, printStringgood, printString2, fibo_ex2, getArrayL2, wecanbevoid, divideNumbers } from './combined_out.js';
import { numGetter, num1Getter, num2Getter, sumGetter, iGetter, fiboGetter, arrGetter, arrowGetter, cGetter, ___bGetter___, arraySetter, arrayGetter, arrayElementSetter, _aSetter_, _aGetter_, resSetter, arrayElementPusher, arrayElementDeleter, arraySplice, remSetter, remGetter, remremSetter, remremGetter, numSetter, strSetter, arrSetter, funcSetter, strGetter, funcGetter, fibaSetter, mapSetter, iSetter, iUnary, mapGetter, bSetter, num1Setter, num2Setter, sumSetter, num1Unary, fiboSetter, arrowSetter, globaSetter, globaGetter, globSetter, globGetter, newaSetter, newbSetter, cSetter, newaGetter, glSetter, carSetter, carGetter, scoSetter, varfSetter, doubleSetter, doubleGetter, varfGetter, aaaSetter, bbbSetter, cccSetter, dddSetter } from './combined_exporter.js';
export { num2, sum, fibo } from './combined_exporter.js';
export { f, getArrayL, mathThing, printString2 };
function cant() {
    console.log("Entering function cant");
    console.log("Can't do this");
    var arr = [1, "a"];
    can();
}
function n(arg) {
    console.log("Entering function n");
    var c = numGetter() + num1Getter() + num2Getter() + sumGetter() + iGetter() + fiboGetter() + arrGetter()[0];
    console.log(arrowGetter());
    console.log((c).toString());
    console.log((arg).toString());
}
function main() {
    console.log("Entering function main");
    aSetter(false);
    if (cGetter()) {
        return ___bGetter___();
    }
    return "no " + ___bGetter___();
}
function arrayStuff() {
    console.log("Entering function arrayStuff");
    var strArr = ["a", "b", "c"];
    console.log((strArr.map(function autoFunc8280(x) {
        return "hello" + x;
    })).toString()); // ["helloa", "hellob", "helloc"]
}
function _main_() {
    (function autoFunc1() {
        console.log("Hi, crocodile!");
    })();
    (function autoFunc51() {
        console.log("See you later, aligator!");
    }());
    arraySetter([1, 2, 3, 4, 5]);
    console.log((arrayGetter()).toString());
    // Assign new value at index 2
    arrayElementSetter(33, 2);
    console.log((arrayGetter()).toString());
    _aSetter_(3);
    arrayElementSetter(333, _aGetter_());
    console.log((arrayGetter()).toString());
    // Assign new value at computed index
    arrayElementSetter(0, (_aGetter_() + 2.5) * 0);
    console.log((arrayGetter()).toString());
    resSetter(arrayGetter()[_aGetter_()]);
    console.log((arrayGetter()).toString());
    // Get value at computed index
    resSetter(arrayGetter()[(_aGetter_() + 2.5) * 0]);
    console.log((arrayGetter()).toString());
    // Test push and pop
    arrayElementPusher(6, false);
    console.log((arrayGetter()).toString());
    console.log((arrayElementDeleter(false)).toString());
    console.log((arrayGetter()).toString());
    // Test shift and unshift
    arrayElementPusher(0, true);
    console.log((arrayGetter()).toString());
    console.log((arrayElementDeleter(true)).toString());
    console.log((arrayGetter()).toString());
    // Test splice
    console.log((arraySplice(2, 2, [])).toString());
    console.log((arrayGetter()).toString());
    remSetter(arraySplice(0, 1, [444, 909]));
    console.log((remGetter()).toString());
    console.log((arrayGetter()).toString());
    remremSetter(arraySplice(1, arrayGetter().length, []));
    console.log((remremGetter()).toString());
    console.log((arrayGetter()).toString());
    numSetter(42);
    strSetter("Hello, World!");
    arrSetter([1, 2, 3]);
    funcSetter(function autoFunc1140(n) {
        return n * 2;
    });
    // Test console.log with different types of arguments
    console.log((numGetter()).toString()); // Number
    console.log(strGetter()); // String
    console.log((arrGetter()).toString()); // Array
    console.log((funcGetter()(10)).toString()); // Function call
    console.log((comba(5)).toString()); // Function call (defined above)
    console.log((8 * numGetter() + 6).toString()); // Expression
    console.log((comba(8) * comba(numGetter()) + 6 / 10).toString()); // Complex Expression
    console.log((arrGetter()[1]).toString()); // Array element
    console.log("The number is ".concat(numGetter())); // Template string
    // Test console.assert with different types of arguments
    console.assert(numGetter() === 42, "Number is not 42");
    console.assert(numGetter() < 0, "Number is not negative");
    console.assert(arrGetter().length === 3, "Array length is not 3");
    console.assert(typeof funcGetter() === "function", "Func is not a function");
    // Test other console methods with different types of arguments
    console.warn((numGetter()).toString());
    console.error(strGetter());
    console.info("important information");
    console.debug((arrGetter()).toString());
    fibaSetter(fibonacci(4, "pedro"));
    fibonacci(8, "ferreira");
    arraySetter([2, 4, 6, 8, 10]);
    mapSetter(new Map([["a", 1], ["b", 2], ["c", 3]]));
    strSetter("hello");
    iSetter(0);
    for (iSetter(0); iGetter() < arrayGetter().length; iUnary(true, false)) {
        console.log((iGetter()).toString());
    }
    for (var _i_ in mapGetter()) {
        iSetter(_i_);
        console.log((iGetter()).toString());
    }
    for (iSetter(0); iGetter() < strGetter().length; iUnary(true, false)) {
        console.log((iGetter()).toString());
    }
    for (var ii = 0; ii < arrayGetter().length; ii++) {
        console.log(ii);
    }
    for (var ii in mapGetter()) {
        console.log(ii);
    }
    for (var ii = 0; ii < strGetter().length; ii++) {
        console.log(ii);
    }
    for (var _i_ = 0; _i_ < arrayGetter().length; _i_++) {
        var a = arrayGetter()[_i_];
        console.log((a).toString());
    }
    for (var _i_ = 0; _i_ < strGetter().length; _i_++) {
        var a = strGetter()[_i_];
        console.log(a);
    }
    bSetter(0);
    for (var _i_ = 0; _i_ < arrayGetter().length; _i_++) {
        bSetter(arrayGetter()[_i_]);
        console.log((___bGetter___()).toString());
    }
    for (var _i_ = 0; _i_ < strGetter().length; _i_++) {
        bSetter(strGetter()[_i_]);
        console.log((___bGetter___()).toString());
    }
    console.log((test(9)).toString());
    cant();
    numSetter(14);
    num1Setter(0);
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
    globaSetter(1);
    globaSetter(3);
    console.log((globaGetter()).toString());
    indirect();
    console.log((globaGetter()).toString());
    globaSetter(globaGetter() * 2);
    console.log((globaGetter()).toString());
    globSetter(1);
    console.log((globGetter()).toString());
    findirect();
    console.log((globGetter()).toString());
    globSetter(globGetter() * 2);
    console.log((globGetter()).toString());
    newaSetter(0);
    newbSetter("hello");
    cSetter(newaGetter() == 0);
    console.log((aGetter()).toString());
    console.log(__bGetter__());
    console.log((main()).toString());
    glSetter(10);
    console.log((comp()).toString());
    console.log((uncomp(3)).toString());
    var Car = /** @class */ (function () {
        function Car(type, model, year) {
            this.type = type;
            this.model = model;
            this.year = year;
        }
        Car.prototype.getModel = function () {
            return this.model;
        };
        return Car;
    }());
    ;
    carSetter(new Car("Fiat", "500", 2001));
    futureWork();
    console.log((carGetter().getModel()).toString());
    scoSetter(10);
    console.log(otherScope());
    arrowSetter("->");
    console.log((fibo_ex(5)).toString());
    console.log((getArray("hello")).toString());
    console.log(printStringgood("hi"));
    console.log(printString("aaa"));
    printString2("hello");
    fibo_ex2(5);
    getArrayL2("hello");
    arrSetter([1, 2, 3]);
    varfSetter(function autoFunc8026(x) {
        return Math.pow(x, 2);
    });
    doubleSetter(function autoFunc8060(x) {
        return x * 2;
    });
    console.log((doubleGetter()(5)).toString());
    console.log((varfGetter()(12)).toString());
    arrayStuff();
    aaaSetter(void (0));
    bbbSetter(void (0));
    cccSetter(void (3));
    dddSetter(void (4));
    wecanbevoid();
    console.log("Hello from webinar.js");
    console.log((divideNumbers(22, 77)).toString());
}
_main_();
