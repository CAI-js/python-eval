const evaluator = require('@caijs/eval');
const { forEach, range, print, getIndex, len } = require('./helper');
const PythonTranspiler = require('./python-transpiler');

function evaluate(str, context, allowChanges) {
  if (!context) {
    context = context ? { ...context } : {};
  }
  if (!context.forEach) {
    context.forEach = forEach;
  }
  if (!context.range) {
    context.range = range;
  }
  if (!context.print) {
    context.print = print;
  }
  if (!context.getIndex) {
    context.getIndex = getIndex;
  }
  if (!context.len) {
    context.len = len;
  }
  const transpiled = PythonTranspiler.transpile(str);
  return evaluator.evaluate(transpiled, context, allowChanges);
}

module.exports = evaluate;
