import * as __import0 from "./nameproblem_exporter.js";
async function instantiate(module, imports = {}) {
  const __module0 = imports["./nameproblem_exporter.js"];
  const adaptedImports = {
    "./nameproblem_exporter.js": Object.assign(Object.create(__module0), {
      bSetter(value) {
        // ../examples/custom/my-examples/nameproblem_output/nameproblem_compilable/bSetter(~lib/string/String) => void
        value = __liftString(value >>> 0);
        __module0.bSetter(value);
      },
      cSetter(value) {
        // ../examples/custom/my-examples/nameproblem_output/nameproblem_compilable/cSetter(bool) => void
        value = value != 0;
        __module0.cSetter(value);
      },
      ___bGetter___() {
        // ../examples/custom/my-examples/nameproblem_output/nameproblem_compilable/___bGetter___() => ~lib/string/String
        return __lowerString(__module0.___bGetter___()) || __notnull();
      },
      cGetter() {
        // ../examples/custom/my-examples/nameproblem_output/nameproblem_compilable/cGetter() => bool
        return __module0.cGetter() ? 1 : 0;
      },
    }),
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
  };
  const { exports } = await WebAssembly.instantiate(module, adaptedImports);
  const memory = exports.memory || imports.env.memory;
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
  return exports;
}
export const {
  memory,
  _main_,
} = await (async url => instantiate(
  await (async () => {
    try { return await globalThis.WebAssembly.compileStreaming(globalThis.fetch(url)); }
    catch { return globalThis.WebAssembly.compile(await (await import("node:fs/promises")).readFile(url)); }
  })(), {
    "./nameproblem_exporter.js": __maybeDefault(__import0),
  }
))(new URL("nameproblem_out.wasm", import.meta.url));
function __maybeDefault(module) {
  return typeof module.default === "object" && Object.keys(module).length == 1
    ? module.default
    : module;
}
