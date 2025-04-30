export function aGetter() { return a; }
export function aSetter(value) { a = value; }
export function aUnary(inc, pre) {
    if (inc) {
        aSetter(aGetter() + 1);
    }
    else {
        aSetter(aGetter() - 1);
    }
    if (pre) {
        return aGetter();
    }
    else {
        return inc ? aGetter() - 1 : aGetter() + 1;
    }
}
export var a;
