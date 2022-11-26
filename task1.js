function stringLength(string) {
  if (string.length < 10 && string.length > 0) {
    return string.length;
  } else {
    throw new Error('The string is too short or long');
  }
}

module.exports = stringLength;
