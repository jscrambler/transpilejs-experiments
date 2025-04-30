import { can } from './functional_out.js';
function cant() {
    console.log("Entering function cant");
    console.log("Can't do this");
    var arr = [1, "a"];
    can();
}
function main() {
    cant();
}
main();
