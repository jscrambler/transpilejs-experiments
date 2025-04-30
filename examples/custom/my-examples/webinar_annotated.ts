function divideNumbers(a: number, b: number): number {
    console.log("Entering function divideNumbers");
    return a / b;
}
function main(): void {
    console.log('Hello from webinar.js');
    console.log((divideNumbers(22, 77)).toString());
}
main();
