function bubbleSort(array) {
  for (let index = 0; index < array.length; index++) {
    for (let innerIndex = 0; innerIndex < array.length; innerIndex++) {
      if (array[index] < array[innerIndex]) {
        let temp = array[index];
        array[index] = array[innerIndex];
        array[innerIndex] = temp;
      }
    }
  }
  return array;
}