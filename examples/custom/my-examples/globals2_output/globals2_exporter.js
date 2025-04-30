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
export var glob = 1;
