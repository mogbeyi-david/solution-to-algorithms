function solution(array) {
    let currentSum = 0;
    let globalSum = -Infinity;

    for (let i = 1; i < array.length; i++) {
        currentSum = Math.max(currentSum, currentSum + array[i]);
        globalSum = Math.max(currentSum, globalSum)
    }
    return globalSum;
}

console.log(solution([1, -2, 3, -3]));