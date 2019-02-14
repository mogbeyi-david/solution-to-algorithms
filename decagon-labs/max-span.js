function maxSpan(array) {
  let maxSpan = 0;
  for (let index = 0; index < array.length; index++) {
    let lastIndex = array.lastIndexOf(array[index]);
    let span = (lastIndex - index) + 1;
    if (span > maxSpan) maxSpan = span
  }
  return maxSpan;
}