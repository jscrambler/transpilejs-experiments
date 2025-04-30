function scoGetter(): number { return sco; }
function scoSetter(value: number): void { sco = value; }
function scoUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        scoSetter(scoGetter() + 1);
    }
    else {
        scoSetter(scoGetter() - 1);
    }
    if (pre) {
        return scoGetter();
    }
    else {
        return inc ? scoGetter() - 1 : scoGetter() + 1;
    }
}
var sco: number;
function otherScope(): string {
    console.log("Entering function otherScope");
    let sco: string = "aaaa";
    return sco;
}
function main(): void {
    scoSetter(10);
    console.log(otherScope());
}
main();
