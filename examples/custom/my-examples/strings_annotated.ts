export function printString(arg: string): string {
    console.log("Entering function printString");
    const arrow: string = "->";
    return arg + " " + arrow + " " + arg.length.toString();
}
function main(): void {
    printString("hello");
}
main();
