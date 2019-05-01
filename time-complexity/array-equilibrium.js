function solution(array) {
  let minDifference = 0;
  let difference;
  for (let index = 1; index < array.length; index++) {
    difference = splitAndAdd(array, index);
    console.log(difference);
  }
  minDifference < difference ? minDifference += 0 : minDifference = difference;
  return minDifference;
}

function splitAndAdd(array, index) {
  let firstPartSum = 0;
  let secondPartSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i < index) {
      firstPartSum += array[i];
    } else {
      secondPartSum += array[i];
    }
  }
  return Math.abs(firstPartSum - secondPartSum);
}

console.log(solution([3, 1, 2, 4, 3]));