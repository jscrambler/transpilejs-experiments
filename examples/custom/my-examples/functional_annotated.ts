function cant(): void {
    console.log("Entering function cant");
    console.log("Can't do this");
    function can(): void {
        console.log("Can do this");
    }
    const arr = [1, 'a'];
    can();
}
function main(): void {
    cant();
}
main();
