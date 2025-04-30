
function arrayManipulations(n: number): number {
    console.log("Entering function arrayManipulations");
    const arr: number[] = [700];
    for (let i: number = 0; i < n; i++) {
        arr.push(i * 3);
    }
    arr.reverse();
    for (let i: number = 0; i < arr.length; i++) {
        arr[i32(i)] = arr[i32(i)] / 4;
    }
    return arr[i32(arr.length - 1)];
}
export function main(): void {
    // Test with different scales
    //[100000, 500000, 1000000]
    console.log((arrayManipulations(1000000)).toString());
}
