function canBalance(array) {
  let newArray;
  for (let index = 1; index < array.length; index++) {
    newArray = Array.from(array);
    let secondPart = newArray.splice(index, newArray.length);
    let firstPart = newArray;
    if (sum(firstPart) === sum(secondPart)) return [firstPart.length, secondPart.length]
  }
  return -1;
}

function sum(arrayOfNumbers) {
  return arrayOfNumbers.reduce(function (currentValue, accumulator) {
    return accumulator += currentValue;
  });
}

