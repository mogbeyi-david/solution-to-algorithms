function word0(arrayOfStrings) {
  let result = {};
  for (let index = 0; index < arrayOfStrings.length; index++) {
    let currentString = arrayOfStrings[index];
    if(!result[currentString])result[currentString] = 0;
  }
  return result;
}