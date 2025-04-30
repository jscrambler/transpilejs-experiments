
function arithmeticOperations(n: number): number {
    console.log("Entering function arithmeticOperations");
    let result: number = 0;
    for (let i: number = 0; i < n; i++) {
        const a: number = i * 3;
        const b: number = i / 4;
        const c: number = i % 7;
        const d: number = i ** 2;
        const e: number = a + b + c + d;
        result += e;
    }
    return result;
}
export function main(): void {
    // Test with different scales
    //[1000000, 5000000, 10000000]
    console.log((arithmeticOperations(10000000)).toString());
}
