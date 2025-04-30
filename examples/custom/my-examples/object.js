class Car {
    type;
    model;
    year;

    constructor(type, model, year) {
        this.type = type;
        this.model = model;
        this.year = year;
    }

    getModel() {
        return this.model;
    }

};


const car = new Car("Fiat", "500", 2001);

function futureWork() {
    console.log("Objects aren't supported yet!");
}

futureWork();
console.log(car.getModel());