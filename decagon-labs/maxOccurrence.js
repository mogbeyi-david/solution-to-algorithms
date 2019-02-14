function maxOccurrence(decimalNumber) {
  let binaryNumber = decimalNumber.toString(2);
  let occurrences = [];
  let counter = 0;
  for (let index = 0; index < binaryNumber.length; index++) {
    console.log('Counter', counter);
    if (binaryNumber[index] !== '0') {
      occurrences.push(counter);
      counter = 0;
    } else {
      counter++;
    }
  }
  occurrences.push(counter);
  return Math.max(...occurrences);
}

console.log(maxOccurrence(-200));