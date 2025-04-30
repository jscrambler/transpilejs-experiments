@external("./varfunct_exporter.js", "arrSetter")
declare function arrSetter(value: number[]): void;
@external("./varfunct_exporter.js", "varfSetter")
declare function varfSetter(value: (x: number) => number): void;
@external("./varfunct_exporter.js", "doubleSetter")
declare function doubleSetter(value: (x: number) => number): void;
@external("./varfunct_exporter.js", "doubleGetter")
declare function doubleGetter(): (x: number) => number;
@external("./varfunct_exporter.js", "varfGetter")
declare function varfGetter(): (x: number) => number;
@external("./varfunct_exporter.js", "arrayStuff")
declare function arrayStuff(): void;

export function main(): void {
    arrSetter([1, 2, 3]);
    varfSetter(function autoFunc33(x: number): number {
        return x ** 2;
    });
    doubleSetter(function autoFunc67(x: number): number {
        return x * 2;
    });
    console.log((doubleGetter()(5)).toString());
    console.log((varfGetter()(12)).toString());
    arrayStuff();
}
