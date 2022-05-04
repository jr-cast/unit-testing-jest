function stringLength(str) {
  if (str.length > 0 && str.length <= 10) {
    return str.length
  } else {
    throw Error('Please check string length')
  }
}

module.exports = stringLength;