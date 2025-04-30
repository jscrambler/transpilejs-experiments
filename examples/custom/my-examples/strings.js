export function printString(arg) {
    const arrow = "->";
    return arg + " " + arrow + " " + arg.length.toString();
}

printString("hello");