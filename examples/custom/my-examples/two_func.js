function fibo_ex(num){
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

function getArrayL(arg) {
    const l = arg.length;
    const arr = [0, 3, 2.0, 4.5, l];
    return arr.length;
}

fibo_ex(5);
getArrayL("hello");
