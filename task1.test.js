const task1 = require('./task1.js');

test('stringLength', () => {
  expect(task1('hello')).toBe(5);
});

test('stringLengthError', () => {
  expect(() => {
    task1('');
  }).toThrow('The string is too short or long');
});
