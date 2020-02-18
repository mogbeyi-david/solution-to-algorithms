function generatePrefixSumArray(array) {
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i] + array[i - 1]
    }
    return array
}

function calculateSliceAverage(array, startIndex, stopIndex) {
    if (startIndex !== 0 && (!array[startIndex - 1] || !array[stopIndex])) {
        return Infinity
    }

    if (startIndex > stopIndex) {
        return Infinity;
    }

    if (startIndex === 0) {
        return (array[stopIndex] - 0) / (stopIndex - (startIndex - 1))
    }

    return (array[stopIndex] - array[startIndex - 1]) / (stopIndex - (startIndex - 1))
}


function solution(array) {
    array = generatePrefixSumArray(array);
    let minimumSliceAverage = Infinity;
    let sliceAverage;
    let minSliceAverageIndex;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            sliceAverage = calculateSliceAverage(array, i, j);
            if (sliceAverage < minimumSliceAverage){
                minimumSliceAverage = sliceAverage;
                minSliceAverageIndex = i
            }
        }
    }
    return minSliceAverageIndex
}
