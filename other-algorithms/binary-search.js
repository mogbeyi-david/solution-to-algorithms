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
