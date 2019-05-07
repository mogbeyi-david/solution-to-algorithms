function binarySearch(array, element) {
  let start = 0;
  let stop = array.length - 1;
  let mid = Math.floor((start + stop) / 2);

  while (array[mid] !== element && start < stop) {
    if (array[mid] > element) {
      stop = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + stop) / 2);
  }
  return array[mid] === element;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));