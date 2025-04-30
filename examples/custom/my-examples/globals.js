let a = 1;

function indirect(){
    a = 20;
}

a = 3;
console.log(a);
indirect();
console.log(a);
a *= 2;
console.log(a);
