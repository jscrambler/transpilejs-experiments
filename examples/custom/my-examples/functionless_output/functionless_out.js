import * as __import0 from "./functionless_exporter.js";
async function instantiate(module, imports = {}) {
  const __module0 = imports["./functionless_exporter.js"];
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
    "./functionless_exporter.js": Object.assign(Object.create(__module0), {
      num1Unary(inc, pre) {
        // ../examples/custom/my-examples/functionless_output/functionless_compilable/num1Unary(bool, bool) => f64
        inc = inc != 0;
        pre = pre != 0;
        return __module0.num1Unary(inc, pre);
      },
      iUnary(inc, pre) {
        // ../examples/custom/my-examples/functionless_output/functionless_compilable/iUnary(bool, bool) => f64
        inc = inc != 0;
        pre = pre != 0;
        return __module0.iUnary(inc, pre);
      },
      arrowSetter(value) {
        // ../examples/custom/my-examples/functionless_output/functionless_compilable/arrowSetter(~lib/string/String) => void
        value = __liftString(value >>> 0);
        __module0.arrowSetter(value);
      },
      arrowGetter() {
        // ../examples/custom/my-examples/functionless_output/functionless_compilable/arrowGetter() => ~lib/string/String
        return __lowerString(__module0.arrowGetter()) || __notnull();
      },
      arrSetter(value) {
        // ../examples/custom/my-examples/functionless_output/functionless_compilable/arrSetter(~lib/array/Array<f64>) => void
        value = __liftArray(__getF64, 3, value >>> 0);
        __module0.arrSetter(value);
      },
      arrGetter() {
        // ../examples/custom/my-examples/functionless_output/functionless_compilable/arrGetter() => ~lib/array/Array<f64>
        return __lowerArray(__setF64, 4, 3, __module0.arrGetter()) || __notnull();
      },
    }),
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
  const adaptedExports = Object.setPrototypeOf({
    getArrayL(arg) {
      // ../examples/custom/my-examples/functionless_output/functionless_compilable/getArrayL(~lib/string/String) => f64
      arg = __lowerString(arg) || __notnull();
      return exports.getArrayL(arg);
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
  function __liftArray(liftElement, align, pointer) {
    if (!pointer) return null;
    const
      dataStart = __getU32(pointer + 4),
      length = __dataview.getUint32(pointer + 12, true),
      values = new Array(length);
    for (let i = 0; i < length; ++i) values[i] = liftElement(dataStart + (i << align >>> 0));
    return values;
  }
  function __lowerArray(lowerElement, id, align, values) {
    if (values == null) return 0;
    const
      length = values.length,
      buffer = exports.__pin(exports.__new(length << align, 1)) >>> 0,
      header = exports.__pin(exports.__new(16, id)) >>> 0;
    __setU32(header + 0, buffer);
    __dataview.setUint32(header + 4, buffer, true);
    __dataview.setUint32(header + 8, length << align, true);
    __dataview.setUint32(header + 12, length, true);
    for (let i = 0; i < length; ++i) lowerElement(buffer + (i << align >>> 0), values[i]);
    exports.__unpin(buffer);
    exports.__unpin(header);
    return header;
  }
  function __notnull() {
    throw TypeError("value must not be null");
  }
  let __dataview = new DataView(memory.buffer);
  function __setU32(pointer, value) {
    try {
      __dataview.setUint32(pointer, value, true);
    } catch {
      __dataview = new DataView(memory.buffer);
      __dataview.setUint32(pointer, value, true);
    }
  }
  function __setF64(pointer, value) {
    try {
      __dataview.setFloat64(pointer, value, true);
    } catch {
      __dataview = new DataView(memory.buffer);
      __dataview.setFloat64(pointer, value, true);
    }
  }
  function __getU32(pointer) {
    try {
      return __dataview.getUint32(pointer, true);
    } catch {
      __dataview = new DataView(memory.buffer);
      return __dataview.getUint32(pointer, true);
    }
  }
  function __getF64(pointer) {
    try {
      return __dataview.getFloat64(pointer, true);
    } catch {
      __dataview = new DataView(memory.buffer);
      return __dataview.getFloat64(pointer, true);
    }
  }
  return adaptedExports;
}
export const {
  memory,
  f,
  getArrayL,
  mathThing,
  main,
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
    "./functionless_exporter.js": __maybeDefault(__import0),
  }
))(new URL("functionless_out.wasm", import.meta.url));
function __maybeDefault(module) {
  return typeof module.default === "object" && Object.keys(module).length == 1
    ? module.default
    : module;
}
