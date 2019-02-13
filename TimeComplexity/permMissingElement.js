function solution(array) {
  array.sort(function (a, b) {
    return a - b;
  });

  for (let i = 1; i <= array.length; i++) {
    if (i !== array[i - 1]) {
      return i;
    }
  }
  return array.length + 1;
}
