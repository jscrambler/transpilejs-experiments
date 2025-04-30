function uncomp_dependency(a: number, b: number): number {
    console.log("Entering function uncomp_dependency");
    const arr = [1, 2, "aaa"];
    console.log((arr).toString());
    return a * b;
}
export function uncomp_not_dependecy(): number {
    console.log("Entering function uncomp_not_dependecy");
    const arr = [1, 2, "aaa"];
    console.log((arr).toString());
    const res: number = 5 + comp_called(3);
    return res;
}
function comp_called(n: number): number {
    console.log("Entering function comp_called");
    const a: number = uncomp_dependency(4, 5);
    return 2 * n * a;
}
function comp_notcalled(n: any): number {
    console.log("Entering function comp_notcalled");
    return n * 2;
}
function main(): void {
    console.log((comp_called(3)).toString());
}
main();
