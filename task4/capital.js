function capital(str) {
  let lower = str.toLowerCase();
  let first = lower[0].toUpperCase();
  return first + lower.slice(1);
}

module.exports = capital;