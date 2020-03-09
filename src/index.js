const PythonTranspiler = require('./python-transpiler');
const evaluate = require('./python-eval');

function transpile(text) {
  return PythonTranspiler.transpile(text);
}

module.exports = {
  PythonTranspiler,
  transpile,
  evaluate,
};
