function solution(array, k) {
  if (array.length === 0) return array;
  for (let i = 0; i < k; i++) {
    array.unshift(array.pop())
  }
  return array;
}

console.log(solution([], 5));