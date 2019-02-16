function wordCount(arrayOfStrings) {
  let result = {};
  for (let index = 0; index < arrayOfStrings.length; index++) {
    let currentString = arrayOfStrings[index];
    !result[currentString] ? result[currentString] = 1 : result[currentString]++;
  }
  return result;
}
