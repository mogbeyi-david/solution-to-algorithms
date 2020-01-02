function solution(array) {
    let currentSum = 0;
    let globalSum = -Infinity;

    for (let i = 0; i < array.length; i++) {
        currentSum = Math.max(array[i], currentSum + array[i]);
        globalSum = Math.max(globalSum, currentSum)
    }
    return globalSum;
}