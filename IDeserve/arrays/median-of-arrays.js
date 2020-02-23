function solution(firstArray, secondArray) {
    let n = firstArray.length;
    let resultArray = firstArray.concat(secondArray);
    resultArray.sort((a, b) => {
        return a - b
    });


    return (resultArray[n-1] + resultArray[n]) / 2;
}

console.log(solution([3, 2, 1], [5, 4, 6]))
