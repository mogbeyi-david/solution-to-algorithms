function binarySearch(array, value) {
  let start = 0;
  let stop = array.length - 1;
  let middle = Math.floor((start + stop) / 2);
  let counter = 0;

  while (array[middle] !== value && start < stop) {
    if (array[middle] > value) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + stop) / 2);
    counter++;
  }
  if (array[middle] === value) {
    return {
      index: array.indexOf(value),
      count: counter
    }
  }
  return {
    index: -1,
    count: 0
  };
}

console.log(binarySearch([2], 2));