var sco;

function otherScope(){
    let sco = "aaaa";
    return sco;
}

sco = 10;

console.log(otherScope());
