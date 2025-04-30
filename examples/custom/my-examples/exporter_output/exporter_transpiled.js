import { comp_called, main } from './exporter_out.js';
export function uncomp_not_dependecy() {
    console.log("Entering function uncomp_not_dependecy");
    var arr = [1, 2, "aaa"];
    console.log((arr).toString());
    var res = 5 + comp_called(3);
    return res;
}
main();
