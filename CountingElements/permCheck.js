function solution(array) {
  array.sort((a, b) => {
    return a - b
  });
}

console.log(solution([1, 2, 3, 0]));