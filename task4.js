function capitalize(string) {
  if (string.length === 0) {
    throw new Error('Insert a string to capitalize');
  } else if (typeof string != 'string') {
    throw new Error('Insert a string to capitalize');
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

module.exports = capitalize;
