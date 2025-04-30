
export function main(): void {
    (function autoFunc1(): void {
        console.log("Hi, crocodile!");
    })();
    (function autoFunc51(): void {
        console.log("See you later, aligator!");
    }());
}
