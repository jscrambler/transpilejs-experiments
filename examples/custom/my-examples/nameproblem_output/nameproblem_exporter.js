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
export function ___bGetter___() { return b; }
export function bSetter(value) { b = value; }
export function cGetter() { return c; }
export function cSetter(value) { c = value; }
export var a = 0;
export var b;
export var c;
