
function stringManipulations(n: number): string {
    console.log("Entering function stringManipulations");
    let str: string = "";
    for (let i: number = 0; i < n; i++) {
        str += String.fromCharCode(i32(65 + (i % 26))); // Create a long string of A-Z repeated
    }
    return str;
}
export function main(): void {
    // Test with different scales
    //[100000, 500000, 1000000]
    console.log(stringManipulations(1000000));
}
