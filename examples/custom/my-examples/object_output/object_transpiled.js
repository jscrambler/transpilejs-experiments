import { futureWork } from './object_out.js';
import { carSetter, carGetter } from './object_exporter.js';
function main() {
    var Car = /** @class */ (function () {
        function Car(type, model, year) {
            this.type = type;
            this.model = model;
            this.year = year;
        }
        Car.prototype.getModel = function () {
            return this.model;
        };
        return Car;
    }());
    ;
    carSetter(new Car("Fiat", "500", 2001));
    futureWork();
    console.log((carGetter().getModel()).toString());
}
main();
