const evaluate = require('../src/python-eval');

describe('Python Evaluate', () => {
  describe('Execute', () => {
    test('It should exeucute a simple code', async () => {
      const script = `
if n > 3:
  n += 1
n + 2
`;
      const context = { n: 5 };
      const actual = evaluate(script, context);
      expect(context.n).toEqual(6);
      expect(actual).toEqual(8);
    });
  });
});
