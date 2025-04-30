function uncomp_dependency(a, b) {
    const arr = [1, 2, "aaa"];
    console.log(arr);
    return a * b;
}
export function uncomp_not_dependecy(){
    const arr = [1, 2, "aaa"];
    console.log(arr);
    const res = 5 + comp_called(3);
    return res;
}
function comp_called(n){
    const a = uncomp_dependency(4,5);
    return 2 * n * a;
}
function comp_notcalled(n){
    return n * 2;
}
console.log(comp_called(3));