function solution(array, number) {
    let result = [];

    let slidingWindow = [];
    for (let index = 0; index < number; index++) {
        slidingWindow.push(array[index]);
    }

    result.push(Math.max(...slidingWindow));

    for (let index = number; index < array.length; index++) {
        slidingWindow.shift();
        slidingWindow.push(array[index]);
        result.push(Math.max(...slidingWindow))
    }

    return result;

}

console.log(solution([9, 6, 11, 8, 10, 5, 4, 13, 93, 14], 4))
