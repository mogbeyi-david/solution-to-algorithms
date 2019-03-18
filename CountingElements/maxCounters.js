function solution(number, array) {
  let counters = [];
  for (let i = 0; i < number; i++) { //Build counters array
    counters.push(0);
  }

  for (let index = 0; index < array.length; index++) {
    if (array[index] <= number) {
      counters = increase(counters, array[index] - 1);
    }

    if (array[index] > number) {
      counters = maxCounter(counters)
    }
  }

  return counters;
}

console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]));

function increase(array, index) {
  array[index]++;
  return array;
}

function maxCounter(array) {
  const maximum = Math.max(...array);
  for (let index = 0; index < array.length; index++) {
    array[index] = maximum;
  }
  return array;
}
