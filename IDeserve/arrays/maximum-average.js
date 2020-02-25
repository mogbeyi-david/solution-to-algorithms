function solution(array, size) {
    let maximumAverage = -Infinity;
    let currentAverage = 0;
    let initialSum = 0;

    for (let index = 0; index < size; index++) {
        initialSum += array[index]
    }

    for (let index = size; index < array.length; index++) {
        initialSum = initialSum + array[index] - array[index - size];
        currentAverage = initialSum / size;
        maximumAverage = Math.max(currentAverage, maximumAverage);
    }

    return maximumAverage
}


console.log(solution([11, -8, 16, -7, 24, -3, 2], 3))
