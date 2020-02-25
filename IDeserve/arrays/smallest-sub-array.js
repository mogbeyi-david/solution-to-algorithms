function solution(targetSum, array) {


    let minimumWindowSize = Infinity;
    let currentWindowSum = 0;
    let windowStart = 0;
    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        currentWindowSum += array[windowEnd];
        while (currentWindowSum >= targetSum) {
            minimumWindowSize = Math.min(minimumWindowSize, windowEnd - windowStart + 1);
            currentWindowSum -= array[windowStart];
            windowStart++;
        }
    }

    return minimumWindowSize
}


console.log(solution(8, [4, 2, 2, 7, 8, 1, 2, 8, 10]))
