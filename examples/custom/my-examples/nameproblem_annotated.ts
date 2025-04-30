function _aGetter_(): number { return a; }
function _aSetter_(value: number): void { a = value; }
function aUnary(inc: boolean, pre: boolean): number {
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
function ___bGetter___(): string { return b; }
function bSetter(value: string): void { b = value; }
function cGetter(): boolean { return c; }
function cSetter(value: boolean): void { c = value; }
let a: number = 0;
let b: string;
let c: boolean;
function aGetter(): number {
    console.log("Entering function aGetter");
    return _aGetter_() + 5;
}
function aSetter(val: boolean): void {
    console.log("Entering function aSetter");
    cSetter(val);
}
function __bGetter__(): string {
    console.log("Entering function __bGetter__");
    return ___bGetter___() + " jk";
}
function main(): string {
    console.log("Entering function main");
    aSetter(false);
    if (cGetter()) {
        return ___bGetter___();
    }
    return "no " + ___bGetter___();
}
function _main_(): void {
    _aSetter_(0);
    bSetter("hello");
    cSetter(_aGetter_() == 0);
    console.log((aGetter()).toString());
    console.log(__bGetter__());
    console.log(main());
}
_main_();
