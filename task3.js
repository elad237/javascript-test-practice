class Calculator {
  static add(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('Insert numbers');
    } else {
      return a + b;
    }
  }

  static subtract(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('Insert numbers');
    } else {
      return a - b;
    }
  }

  static divide(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('Insert numbers');
    } else {
      return a / b;
    }
  }

  static multiply(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
      throw new Error('Insert numbers');
    } else {
      return a * b;
    }
  }
}

module.exports = Calculator;
