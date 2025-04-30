function aGetter(): number { return a; }
function aSetter(value: number): void { a = value; }
function aUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        aSetter(aGetter() + 1);
    }
    else {
        aSetter(aGetter() - 1);
    }
    if (pre) {
        return aGetter();
    }
    else {
        return inc ? aGetter() - 1 : aGetter() + 1;
    }
}
let a: number = 1;
function indirect(): void {
    console.log("Entering function indirect");
    aSetter(20);
}
function main(): void {
    aSetter(1);
    aSetter(3);
    console.log((aGetter()).toString());
    indirect();
    console.log((aGetter()).toString());
    aSetter(aGetter() * 2);
    console.log((aGetter()).toString());
}
main();
