function solution(array) {
  array.sort(function (a, b) {
    return a - b;
  });
  if (array[array.length - 1] <= 0) return 1;
  let filteredArray = array.filter(function (value) {
    return value > 0;
  });

  let uniqueArray = Array.from(new Set(filteredArray));
  for (let tracker = 1, index = 0; tracker < uniqueArray[uniqueArray.length - 1]; tracker++, index++) {
    if (tracker !== uniqueArray[index]) return tracker;
  }
  return uniqueArray[uniqueArray.length - 1] + 1;
}