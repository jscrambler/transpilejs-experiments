@external("./scopes_exporter.js", "scoSetter")
declare function scoSetter(value: number): void;

function otherScope(): string {
    console.log("Entering function otherScope");
    let sco: string = "aaaa";
    return sco;
}
export function main(): void {
    scoSetter(10);
    console.log(otherScope());
}
