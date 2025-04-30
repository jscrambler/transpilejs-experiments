import * as __import0 from "./combined_exporter.js";
async function instantiate(module, imports = {}) {
  const __module0 = imports["./combined_exporter.js"];
  const adaptedImports = {
    env: Object.assign(Object.create(globalThis), imports.env || {}, {
      "console.log"(text) {
        // ~lib/bindings/dom/console.log(~lib/string/String) => void
        text = __liftString(text >>> 0);
        console.log(text);
      },
      abort(message, fileName, lineNumber, columnNumber) {
        // ~lib/builtins/abort(~lib/string/String | null?, ~lib/string/String | null?, u32?, u32?) => void
        message = __liftString(message >>> 0);
        fileName = __liftString(fileName >>> 0);
        lineNumber = lineNumber >>> 0;
        columnNumber = columnNumber >>> 0;
        (() => {
          // @external.js
          throw Error(`${message} in ${fileName}:${lineNumber}:${columnNumber}`);
        })();
      },
    }),
    "./combined_exporter.js": Object.assign(Object.create(__module0), {
      cSetter(value) {
        // ../examples/custom/my-examples/combined_output/combined_compilable/cSetter(bool) => void
        value = value != 0;
        __module0.cSetter(value);
      },
      newbGetter() {
        // ../examples/custom/my-examples/combined_output/combined_compilable/newbGetter() => ~lib/string/String
        return __lowerString(__module0.newbGetter()) || __notnull();
      },
      arrowGetter() {
        // ../examples/custom/my-examples/combined_output/combined_compilable/arrowGetter() => ~lib/string/String
        return __lowerString(__module0.arrowGetter()) || __notnull();
      },
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    fibonacci(num, ze) {
      // ../examples/custom/my-examples/combined_output/combined_compilable/fibonacci(f64, ~lib/string/String) => f64
      ze = __lowerString(ze) || __notnull();
      return exports.fibonacci(num, ze);
    },
    getArrayL(arg) {
      // ../examples/custom/my-examples/combined_output/combined_compilable/getArrayL(~lib/string/String) => f64
      arg = __lowerString(arg) || __notnull();
      return exports.getArrayL(arg);
    },
    aSetter(val) {
      // ../examples/custom/my-examples/combined_output/combined_compilable/aSetter(bool) => void
      val = val ? 1 : 0;
      exports.aSetter(val);
    },
    __bGetter__() {
      // ../examples/custom/my-examples/combined_output/combined_compilable/__bGetter__() => ~lib/string/String
      return __liftString(exports.__bGetter__() >>> 0);
    },
    otherScope() {
      // ../examples/custom/my-examples/combined_output/combined_compilable/otherScope() => ~lib/string/String
      return __liftString(exports.otherScope() >>> 0);
    },
    printString(arg) {
      // ../examples/custom/my-examples/combined_output/combined_compilable/printString(~lib/string/String) => ~lib/string/String
      arg = __lowerString(arg) || __notnull();
      return __liftString(exports.printString(arg) >>> 0);
    },
    getArray(arg) {
      // ../examples/custom/my-examples/combined_output/combined_compilable/getArray(~lib/string/String) => f64
      arg = __lowerString(arg) || __notnull();
      return exports.getArray(arg);
    },
    printStringgood(arg) {
      // ../examples/custom/my-examples/combined_output/combined_compilable/printStringgood(~lib/string/String) => ~lib/string/String
      arg = __lowerString(arg) || __notnull();
      return __liftString(exports.printStringgood(arg) >>> 0);
    },
    printString2(arg) {
      // ../examples/custom/my-examples/combined_output/combined_compilable/printString2(~lib/string/String) => ~lib/string/String
      arg = __lowerString(arg) || __notnull();
      return __liftString(exports.printString2(arg) >>> 0);
    },
    getArrayL2(arg) {
      // ../examples/custom/my-examples/combined_output/combined_compilable/getArrayL2(~lib/string/String) => f64
      arg = __lowerString(arg) || __notnull();
      return exports.getArrayL2(arg);
    },
  }, exports);
  function __liftString(pointer) {
    if (!pointer) return null;
    const
      end = pointer + new Uint32Array(memory.buffer)[pointer - 4 >>> 2] >>> 1,
      memoryU16 = new Uint16Array(memory.buffer);
    let
      start = pointer >>> 1,
      string = "";
    while (end - start > 1024) string += String.fromCharCode(...memoryU16.subarray(start, start += 1024));
    return string + String.fromCharCode(...memoryU16.subarray(start, end));
  }
  function __lowerString(value) {
    if (value == null) return 0;
    const
      length = value.length,
      pointer = exports.__new(length << 1, 2) >>> 0,
      memoryU16 = new Uint16Array(memory.buffer);
    for (let i = 0; i < length; ++i) memoryU16[(pointer >>> 1) + i] = value.charCodeAt(i);
    return pointer;
  }
  function __notnull() {
    throw TypeError("value must not be null");
  }
  return adaptedExports;
}
export const {
  memory,
  can,
  comba,
  fibonacci,
  test,
  f,
  getArrayL,
  mathThing,
  indirect,
  findirect,
  aGetter,
  aSetter,
  __bGetter__,
  comp,
  uncomp,
  futureWork,
  otherScope,
  printString,
  getArray,
  fibo_ex,
  printStringgood,
  printString2,
  fibo_ex2,
  getArrayL2,
  wecanbevoid,
  divideNumbers,
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
    "./combined_exporter.js": __maybeDefault(__import0),
  }
))(new URL("combined_out.wasm", import.meta.url));
function __maybeDefault(module) {
  return typeof module.default === "object" && Object.keys(module).length == 1
    ? module.default
    : module;
}
