function solution(array) {
  let keyValueOccurrences = array.reduce(function (object, key) {
    object[key] = ++object[key] || 1;
    return object;
  }, {});

  for (let key in keyValueOccurrences) {
    if (keyValueOccurrences.hasOwnProperty(key) && keyValueOccurrences[key] % 2 !== 0) {
      return parseInt(key);
    }
  }
}