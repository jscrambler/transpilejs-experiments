@external("./void_exporter.js", "notlikethiswecant")
declare function notlikethiswecant(): void;

function wecanbevoid(): void {
    console.log("The call of the void");
}
export function main(): void {
    wecanbevoid();
    notlikethiswecant();
}
