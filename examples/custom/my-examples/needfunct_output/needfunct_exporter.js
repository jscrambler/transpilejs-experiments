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
export var gl = 10;
export function mult(a, b) {
    console.log("Entering function mult");
    var arr = [1, 2, "aaa"];
    console.log((arr).toString());
    return a * b;
}
