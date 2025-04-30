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
export var sco;
