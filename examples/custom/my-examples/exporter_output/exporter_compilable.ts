@external("./exporter_exporter.js", "uncomp_dependency")
declare function uncomp_dependency(a: number, b: number): number;

export function comp_called(n: number): number {
    console.log("Entering function comp_called");
    const a: number = uncomp_dependency(4, 5);
    return 2 * n * a;
}
function comp_notcalled(n: any): number {
    console.log("Entering function comp_notcalled");
    return n * 2;
}
export function main(): void {
    console.log((comp_called(3)).toString());
}
