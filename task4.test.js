const task4 = require('./task4.js');

test('capitalize', () => {
  expect(task4('he')).toBe('He');
});

test('capitalizeError', () => {
  expect(() => {
    task4('');
  }).toThrow('Insert a string to capitalize');
});

test('capitalizeError2', () => {
  expect(() => {
    task4(2);
  }).toThrow('Insert a string to capitalize');
});
