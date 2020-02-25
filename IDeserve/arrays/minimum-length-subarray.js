const solution = (array, target) => {

    let sumOfElementsInCurrentWindow = 0;
    let currentWindowSize = 0;
    let windowStart = 0
    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) {
        sumOfElementsInCurrentWindow += array[windowEnd];
        while (sumOfElementsInCurrentWindow >= target) {
            if (sumOfElementsInCurrentWindow === target) {
                currentWindowSize = windowEnd - windowStart + 1
                sumOfElementsInCurrentWindow -= array[windowStart];
                windowStart++
            } else {
                sumOfElementsInCurrentWindow -= array[windowStart];
                windowStart++
            }
        }
    }
    return currentWindowSize
}

console.log(solution([15, 5], 20))
