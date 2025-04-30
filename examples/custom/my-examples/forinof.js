const array = [2, 4, 6, 8, 10];
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
const str = 'hello';
let i = 0;
for (i in array) {
    console.log(i);
}
for (i in map) {
    console.log(i);
}
for (i in str) {
    console.log(i);
}

for (const ii in array) {
    console.log(ii);
}
for (const ii in map) {
    console.log(ii);
}
for (const ii in str) {
    console.log(ii);
}

for (let a of array) {
    console.log(a);
}
for (let a of str) {
    console.log(a);
}

let b = 0;
for (b of array) {
    console.log(b);
}
for (b of str) {
    console.log(b);
}

function test(n) {
    const testArray = [3, 7, 8, 8, 10];
    let res = n;
    for (let c of testArray) {
        let _i_ = 1;
        res += c + _i_;
    }
    return res;
}

function a(){
    let oi = void 0;
}

console.log(test(9));