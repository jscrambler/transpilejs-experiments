@external("./globals_exporter.js", "aSetter")
declare function aSetter(value: number): void;
@external("./globals_exporter.js", "aGetter")
declare function aGetter(): number;

function indirect(): void {
    console.log("Entering function indirect");
    aSetter(20);
}
export function main(): void {
    aSetter(1);
    aSetter(3);
    console.log((aGetter()).toString());
    indirect();
    console.log((aGetter()).toString());
    aSetter(aGetter() * 2);
    console.log((aGetter()).toString());
}
