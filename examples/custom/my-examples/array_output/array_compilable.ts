@external("./array_exporter.js", "aSetter")
declare function aSetter(value: number[]): void;
@external("./array_exporter.js", "aGetter")
declare function aGetter(): number[];
@external("./array_exporter.js", "aElementSetter")
declare function aElementSetter(value: number, index: number): void;
@external("./array_exporter.js", "indSetter")
declare function indSetter(value: number): void;
@external("./array_exporter.js", "resSetter")
declare function resSetter(value: number): void;
@external("./array_exporter.js", "aElementPusher")
declare function aElementPusher(value: number, unshift: boolean): number;
@external("./array_exporter.js", "popSetter")
declare function popSetter(value: number): void;
@external("./array_exporter.js", "popGetter")
declare function popGetter(): number;
@external("./array_exporter.js", "shiftSetter")
declare function shiftSetter(value: number): void;
@external("./array_exporter.js", "shiftGetter")
declare function shiftGetter(): number;
@external("./array_exporter.js", "aSplice")
declare function aSplice(start: number, deleteCount: number, items: number[]): number[];
@external("./array_exporter.js", "remSetter")
declare function remSetter(value: number[]): void;
@external("./array_exporter.js", "remGetter")
declare function remGetter(): number[];
@external("./array_exporter.js", "remremSetter")
declare function remremSetter(value: number[]): void;
@external("./array_exporter.js", "remremGetter")
declare function remremGetter(): number[];
@external("./array_exporter.js", "indGetter")
declare function indGetter(): number;
@external("./array_exporter.js", "aElementDeleter")
declare function aElementDeleter(shift: boolean): number;

export function main(): void {
    aSetter([1, 2, 3, 4, 5]);
    console.log((aGetter()).toString());
    // Assign new value at index 2
    aElementSetter(33, 2);
    console.log((aGetter()).toString());
    indSetter(3);
    aElementSetter(333, indGetter());
    console.log((aGetter()).toString());
    // Assign new value at computed index
    aElementSetter(0, (indGetter() + 2.5) * 0);
    console.log((aGetter()).toString());
    resSetter(aGetter()[i32(indGetter())]);
    console.log((aGetter()).toString());
    // Get value at computed index
    resSetter(aGetter()[i32((indGetter() + 2.5) * 0)]);
    console.log((aGetter()).toString());
    // Test push and pop
    aElementPusher(6, false);
    console.log((aGetter()).toString());
    popSetter(aElementDeleter(false));
    console.log((popGetter()).toString());
    console.log((aGetter()).toString());
    // Test shift and unshift
    aElementPusher(0, true);
    console.log((aGetter()).toString());
    shiftSetter(aElementDeleter(true));
    console.log((shiftGetter()).toString());
    console.log((aGetter()).toString());
    // Test splice
    console.log((aSplice(2, 2, [])).toString());
    console.log((aGetter()).toString());
    remSetter(aSplice(0, 1, [444, 909]));
    console.log((remGetter()).toString());
    console.log((aGetter()).toString());
    remremSetter(aSplice(1, aGetter().length, []));
    console.log((remremGetter()).toString());
    console.log((aGetter()).toString());
}
