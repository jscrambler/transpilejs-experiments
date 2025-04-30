@external("./nameproblem_exporter.js", "_aSetter_")
declare function _aSetter_(value: number): void;
@external("./nameproblem_exporter.js", "bSetter")
declare function bSetter(value: string): void;
@external("./nameproblem_exporter.js", "cSetter")
declare function cSetter(value: boolean): void;
@external("./nameproblem_exporter.js", "_aGetter_")
declare function _aGetter_(): number;
@external("./nameproblem_exporter.js", "___bGetter___")
declare function ___bGetter___(): string;
@external("./nameproblem_exporter.js", "cGetter")
declare function cGetter(): boolean;

function aGetter(): number {
    console.log("Entering function aGetter");
    return _aGetter_() + 5;
}
function aSetter(val: boolean): void {
    console.log("Entering function aSetter");
    cSetter(val);
}
function __bGetter__(): string {
    console.log("Entering function __bGetter__");
    return ___bGetter___() + " jk";
}
function main(): string {
    console.log("Entering function main");
    aSetter(false);
    if (cGetter()) {
        return ___bGetter___();
    }
    return "no " + ___bGetter___();
}
export function _main_(): void {
    _aSetter_(0);
    bSetter("hello");
    cSetter(_aGetter_() == 0);
    console.log((aGetter()).toString());
    console.log(__bGetter__());
    console.log(main());
}
