function importFile(content) {
  return "data:text/javascript;base64," + btoa(content);
}
const imports = {
  "gensync": "./gensync.mjs",
  "@babel/traverse": "./node_modules/@babel/traverse/lib/index.js",
  "@babel/types": "./node_modules/@babel/types/lib/index.js",
  "@babel/parser": "./node_modules/@babel/parser/lib/index.js",
  "@babel/template": "./node_modules/@babel/template/lib/index.js",
  "@babel/helpers": "./node_modules/@babel/helpers/lib/index.js",
  "@babel/code-frame": "./node_modules/@babel/code-frame/lib/index.js",
  "@babel/helper-module-transforms": "./node_modules/@babel/helper-module-transforms/lib/index.js",
  "semver": "./semver.mjs",
  "module": './module.mjs',
  /*
  "url": importFile("export default {};"),
  "path": importFile("export default {};"),
  "stream/web": importFile("export default {};"),
  "sharp": importFile("export default {};"),
  "onnxruntime-node": importFile("export default {};"),
  "onnxruntime-web": importFile(`
    //await import("https://cdnjs.cloudflare.com/ajax/libs/onnxruntime-web/1.15.0/ort.es6.min.js");
    await import("https://cdnjs.cloudflare.com/ajax/libs/onnxruntime-web/1.14.0/ort.es6.min.js");
    //http://127.0.0.1/transformer/onnxruntime/js/common/dist/
    //await import("http://127.0.0.1/transformer/onnxruntime/js/common/dist/ort-common.js");
    //await import("http://127.0.0.1/transformer/onnxruntime/js/web/dist/ort-webgl.js");
    //await import("https://cdnjs.cloudflare.com/ajax/libs/onnxruntime-web/1.14.0/ort.es6.min.js");
    let ONNX = globalThis.ort;
    export default ONNX;
    export {
      ONNX
    };
  `),
  */
};
const importmap = document.createElement("script");
importmap.type = "importmap";
importmap.textContent = JSON.stringify({imports});
document.body.appendChild(importmap);
