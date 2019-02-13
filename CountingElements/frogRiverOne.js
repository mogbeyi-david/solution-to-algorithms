function solution(x, array) {
  let steps = new Set();
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= x) {
      steps.add(array[i]);
      if (steps.size === x) return i;
    }
  }
  return -1;
}

console.log(solution(6, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));