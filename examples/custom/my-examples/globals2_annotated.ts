function globGetter(): number { return glob; }
function globSetter(value: number): void { glob = value; }
function globUnary(inc: boolean, pre: boolean): number {
    if (inc) {
        globSetter(globGetter() + 1);
    }
    else {
        globSetter(globGetter() - 1);
    }
    if (pre) {
        return globGetter();
    }
    else {
        return inc ? globGetter() - 1 : globGetter() + 1;
    }
}
let glob: number = 1;
function findirect(): void {
    console.log("Entering function findirect");
    globSetter(20);
}
function main(): void {
    globSetter(1);
    console.log((globGetter()).toString());
    findirect();
    console.log((globGetter()).toString());
    globSetter(globGetter() * 2);
    console.log((globGetter()).toString());
}
main();
