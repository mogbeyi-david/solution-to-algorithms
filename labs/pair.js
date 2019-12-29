function pair(array) {
  let result = new Map();
  for (let index = 0; index < array.length; index++) {
    result.set(array[index][0], array[index][array[index].length - 1]);
  }
  return result;
}

