function wordCount(arrayOfStrings) {
  let result = {};
  for (let index = 0; index < arrayOfStrings.length; index++) {
    let currentString = arrayOfStrings[index];
    !result[currentString] ? result[currentString] = 1 : result[currentString]++;
  }
  return result;
}

console.log(wordCount([1, 1, 1, 2, 2, 2, 5, 7, 8, 1, '1', '1']));
