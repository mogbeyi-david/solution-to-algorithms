function stringSplosion(string) {
  let result = '';
  for (let index = 0; index <= string.length; index++) {
    result += string.substring(0, index);
  }
  return result;
}
