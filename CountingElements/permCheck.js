function solution(array) {
  array.sort((a, b) => {
    return a - b
  });
  if (array[0] !== 1) return 0;

  for (let index = 0; index < array.length - 1; index++) {
    if (array[index + 1] !== (array[index] + 1)) {
      return 0;
    }
  }
  return 1;
}