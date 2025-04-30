function fibo_ex(num: number): number {
    console.log("Entering function fibo_ex");
    let num1: number = 0;
    let num2: number = 1;
    let sum: number;
    for (let i: number = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
function getArrayL(arg: string): number {
    console.log("Entering function getArrayL");
    const l = arg.length;
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}
function main(): void {
    fibo_ex(5);
    getArrayL("hello");
}
main();
