const arr = [1, 2, 3];
let varf = x => x ** 2;
let double;
double = function(x) {
    return x * 2;
}

console.log(double(5));
console.log(varf(12));

function arrayStuff() {
    const strArr = ['a', 'b', 'c'];
    console.log(strArr.map(x => "hello" + x)); // ["helloa", "hellob", "helloc"]
}
arrayStuff();
