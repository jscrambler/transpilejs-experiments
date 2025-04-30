const arrow = "->";
function printString(arg) {
    const arrow = "->";
    return arg + " " + arrow + " " + arg.length.toString();
}
function getArray(arg) {
    const a = printStringgood("hi");
    const l = arg.length;
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}
function fibo_ex(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    for (let i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
function printStringgood(arg) {
    const a = 99;
    console.log(a);
    return arg + " " + arrow + " " + arg.length.toString();
}
console.log(fibo_ex(5));
console.log(getArray("hello"));
console.log(printStringgood("hi"));
console.log(printString("aaa"));