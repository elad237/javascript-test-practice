const Calculator = require('./task3.js');

describe('add', () => {
  test('add1', () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test('add2', () => {
    expect(Calculator.add(2, 2)).toBe(4);
  });

  test('addError', () => {
    expect(() => {
      Calculator.add(2, 'hello');
    }).toThrow('Insert numbers');
  });
});

describe('subtract', () => {
  test('subtract1', () => {
    expect(Calculator.subtract(2, 1)).toBe(1);
  });

  test('subtract2', () => {
    expect(Calculator.subtract(-3, 1)).toBe(-4);
  });

  test('subtractError', () => {
    expect(() => {
      Calculator.subtract(1, 'hello');
    }).toThrow('Insert numbers');
  });
});

describe('divide', () => {
  test('divide1', () => {
    expect(Calculator.divide(2, 2)).toBe(1);
  });

  test('divide2', () => {
    expect(Calculator.divide(4, 2)).toBe(2);
  });

  test('divideError', () => {
    expect(() => {
      Calculator.divide(1, 'hello');
    }).toThrow('Insert numbers');
  });
});

describe('multiply', () => {
  test('multiply1', () => {
    expect(Calculator.multiply(2, 2)).toBe(4);
  });

  test('multiply2', () => {
    expect(Calculator.multiply(4, 2)).toBe(8);
  });

  test('multiplyError', () => {
    expect(() => {
      Calculator.multiply(1, 'hello');
    }).toThrow('Insert numbers');
  });
});
