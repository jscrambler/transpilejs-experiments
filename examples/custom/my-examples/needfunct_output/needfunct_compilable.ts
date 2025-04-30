@external("./needfunct_exporter.js", "glSetter")
declare function glSetter(value: number): void;
@external("./needfunct_exporter.js", "mult")
declare function mult(a: number, b: number): number;
@external("./needfunct_exporter.js", "glGetter")
declare function glGetter(): number;

function comp(): number {
    console.log("Entering function comp");
    const res: number = 5 + mult(2, 3);
    return res;
}
function useGL(): number {
    console.log("Entering function useGL");
    return 2 * glGetter();
}
function uncomp(n: number): number {
    console.log("Entering function uncomp");
    return n * useGL();
}
export function main(): void {
    glSetter(10);
    console.log((comp()).toString());
    console.log((uncomp(3)).toString());
}
