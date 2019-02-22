function solution(array) {
  let numberOfZeros = 0;
  let result = 0;

  for (let index = 0; index < array.length; index++) {
    if (result > 1000000000) return -1;

    if (array[index] === 0) {
      numberOfZeros++;
    }
    if (array[index] === 1) {
      result += numberOfZeros;
    }
  }
  return result;
}

console.log(solution([0, 1, 0, 1, 1]));