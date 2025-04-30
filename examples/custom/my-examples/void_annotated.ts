function wecanbevoid(): void {
    console.log("The call of the void");
}
function notlikethiswecant(): void {
    let a = void (1);
    console.log("The call of the other void");
}
function main(): void {
    wecanbevoid();
    notlikethiswecant();
}
main();
