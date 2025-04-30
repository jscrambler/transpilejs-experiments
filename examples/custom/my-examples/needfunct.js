var gl = 10;

function mult(a, b) {
    const arr = [1, 2, "aaa"];
    console.log(arr);
    return a * b;
}

function comp(){
    const res = 5 + mult(2, 3);
    return res;
}

function useGL(){
    return 2 * gl;
}

function uncomp(n){
    return n * useGL();
}

console.log(comp());
console.log(uncomp(3));
