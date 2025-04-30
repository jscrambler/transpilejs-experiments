function glGetter(): number { return gl; }
function glSetter(value: number): void { gl = value; }
function glUnary(inc: boolean, pre: boolean): number {
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
var gl: number = 10;
function mult(a: number, b: number): number {
    console.log("Entering function mult");
    const arr = [1, 2, "aaa"];
    console.log((arr).toString());
    return a * b;
}
function comp(): number {
    console.log("Entering function comp");
    const res: number = 5 + mult(2, 3);
    return res;
}
function useGL(): number {
    console.log("Entering function useGL");
    return 2 * glGetter();
}
function uncomp(n: number): number {
    console.log("Entering function uncomp");
    return n * useGL();
}
function main(): void {
    glSetter(10);
    console.log((comp()).toString());
    console.log((uncomp(3)).toString());
}
main();
