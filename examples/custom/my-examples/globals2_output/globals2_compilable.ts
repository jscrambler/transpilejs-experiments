@external("./globals2_exporter.js", "globSetter")
declare function globSetter(value: number): void;
@external("./globals2_exporter.js", "globGetter")
declare function globGetter(): number;

function findirect(): void {
    console.log("Entering function findirect");
    globSetter(20);
}
export function main(): void {
    globSetter(1);
    console.log((globGetter()).toString());
    findirect();
    console.log((globGetter()).toString());
    globSetter(globGetter() * 2);
    console.log((globGetter()).toString());
}
