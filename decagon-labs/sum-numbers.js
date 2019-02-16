function sumNumbers(string) {
  let stringOfNumbers = '';
  let dotTracker = 0;
  let sum = 0;
  for (let index = 0; index < string.length; index++) {
    let currentCharacter = string[index];
    if (isNumber(currentCharacter)) {
      stringOfNumbers += currentCharacter;
      dotTracker = 0;
    } else if (!isNumber(currentCharacter) && !dotTracker) {
      stringOfNumbers += '.';
      dotTracker++;
    }
  }
  stringOfNumbers.split('.').map(function (value) {
    if (isNumber(value)) {
      sum += parseInt(value)
    }
  });
  return sum;
}

function isNumber(character) {
  return !isNaN(parseInt(character));
}