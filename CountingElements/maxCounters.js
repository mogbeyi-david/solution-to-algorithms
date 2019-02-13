function solution(numberOfCounters, arrayOfOperations) {
  let counters = [];
  for (let i = 0; i < numberOfCounters; i++) {
    counters.push(0);
  }

  for (let index = 0; index < arrayOfOperations.length; index++) {
    let operation = arrayOfOperations[index];
    if (operation <= numberOfCounters) {
      counters[operation - 1]++;
    } else {
      let maximumCounter = Math.max(...counters);
      counters = counters.map((value) => {
        value = maximumCounter;
        return value;
      });
    }
  }
  return counters;
}

solution(5, [3, 6]);