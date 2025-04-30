export let num = 14, num1 = 0;

export let num2 = 1;
export let sum = num1++;
export let i = 0;
for (i = 0; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
}

export let fibo = num2;

const arrow = "->";
const arr = [0, 3, arrow.length, 4.5];

console.log("Fibo: " + fibo.toString() + ", Array" + arrow + arr[3].toString());

export function f(){
    console.log(5);
    return 5;
}

export function getArrayL(arg) {
    const l = arg.length + f();
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}

export function mathThing(a, b){
    const num3 = a + num2;
    return num3 * b;
}

console.log(getArrayL("hello"));
console.log(mathThing(2, 5));

function n(arg){
    let c = num + num1 + num2 + sum + i + fibo + arr[0];
    console.log(arrow);
    console.log(c);
    console.log(arg);
}
