@external("./fibonacci_exporter.js", "aSetter")
declare function aSetter(value: number): void;

function fibonacci(num: number, ze: string): number {
    console.log("Entering function fibonacci");
    let num1: number = 0;
    let num2: number = 1;
    let sum: number;
    console.log(ze);
    for (let i: number = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}
export function main(): void {
    aSetter(fibonacci(4, "pedro"));
    fibonacci(8, "ferreira");
}
