function solution(array, number) {
    let countOfNumberTracker = [];
    let countOfOtherNumberTracker = [];
    let countOfNumber = 0;
    let countOfOtherNumbers = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            countOfNumber++
        }
        countOfNumberTracker.push(countOfNumber);
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] !== number) {
            countOfOtherNumbers++
        }
        countOfOtherNumberTracker.unshift(countOfOtherNumbers);
    }

    for (let i = 0; i < countOfNumberTracker.length; i++) {
        if (countOfNumberTracker[i] === countOfOtherNumberTracker[i + 1]) {
            return i + 1
        }
    }

    return -1;
}

console.log(solution([2, 2, 2, 3, 2, 2, 2, 1, 1, 1, 1, 1, 1], 2));