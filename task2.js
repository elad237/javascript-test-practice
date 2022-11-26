function reverseString(string) {
  if (string.length === 0) {
    throw new Error('There is no string');
  } else {
    return string.split('').reverse().join('');
  }
}

module.exports = reverseString;
