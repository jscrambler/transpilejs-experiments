function carGetter(): Car { return car; }
function carSetter(value: Car): void { car = value; }
let car: Car;
function futureWork(): void {
    console.log("Entering function futureWork");
    console.log("Objects aren't supported yet!");
}
function main(): void {
    class Car {
        type;
        model;
        year;
        constructor(type, model, year) {
            this.type = type;
            this.model = model;
            this.year = year;
        }
        getModel(): any {
            return this.model;
        }
    }
    ;
    carSetter(new Car("Fiat", "500", 2001));
    futureWork();
    console.log((carGetter().getModel()).toString());
}
main();
