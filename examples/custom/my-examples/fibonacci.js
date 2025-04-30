let a;
a = fibonacci(4, "pedro");
function fibonacci(num, ze) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    console.log(ze);
    for (let i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
fibonacci(8, "ferreira");
    