let a = 0;
let b;
b = "hello";
let c = a == 0;
function aGetter(){
    return a + 5;
}
function aSetter(val){
    c = val;
}
function __bGetter__(){
    return b + " jk";
}
function main(){
    aSetter(false);
    if(c){
        return b;
    }
    return "no " + b;
}
console.log(aGetter());
console.log(__bGetter__());
console.log(main());
