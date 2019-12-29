function solution(string) {
    let array = string.split("");
    let leftBracketCountArray = [];
    let rightBracketCountArray = [];

    let leftBracketCount = 0;
    let rightBracketCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === "(") {
            leftBracketCount++
        }
        leftBracketCountArray.push(leftBracketCount)
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === ")") {
            rightBracketCount++
        }
        rightBracketCountArray.unshift(rightBracketCount);
    }


    for (let i = 0; i < leftBracketCountArray.length; i++) {
        if (leftBracketCountArray[i] === rightBracketCountArray[i]) {
            return i + 1;
        }
    }

    return string.length
}

console.log(solution("(((("));