import { test } from './forinof_out.js';
import { arraySetter, mapSetter, strSetter, iSetter, iGetter, arrayGetter, iUnary, mapGetter, strGetter, bSetter, bGetter } from './forinof_exporter.js';
function a() {
    console.log("Entering function a");
    var oi = void (0);
}
function main() {
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
        var a_1 = arrayGetter()[_i_];
        console.log((a_1).toString());
    }
    for (var _i_ = 0; _i_ < strGetter().length; _i_++) {
        var a_2 = strGetter()[_i_];
        console.log(a_2);
    }
    bSetter(0);
    for (var _i_ = 0; _i_ < arrayGetter().length; _i_++) {
        bSetter(arrayGetter()[_i_]);
        console.log((bGetter()).toString());
    }
    for (var _i_ = 0; _i_ < strGetter().length; _i_++) {
        bSetter(strGetter()[_i_]);
        console.log((bGetter()).toString());
    }
    console.log((test(9)).toString());
}
main();
