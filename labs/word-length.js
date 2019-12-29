function wordLength(arrayOfStrings) {
  let result = new Map();
  for (let index = 0; index < arrayOfStrings.length; index++) {
    let currentString = arrayOfStrings[index];
    if (!result.get(currentString)) result.set(currentString, currentString.length);
  }
  return result;
}