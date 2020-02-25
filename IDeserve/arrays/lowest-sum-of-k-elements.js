function solution(array, numberOfElements) {
    let sums = [];
    let sumOfFirstKElements = 0;
    for (let i = 0; i < numberOfElements; i++) {
        sumOfFirstKElements += array[i];
    }

    for (let i = numberOfElements; i < array.length; i++) {
        sumOfFirstKElements = sumOfFirstKElements + array[i] - array[i - numberOfElements];
        sums.push(sumOfFirstKElements)
    }

    return Math.max(...sums)
}


console.log(solution([4, 2, 1, 7, 8, 1, 2, 8, 1, 0, 100], 3))
