function countingValleys(numberOfSteps, path) {
    let pathArray = path.split("");
    let pathWeightArray = [];
    let count = 0;

    for (let element of pathArray) {
        if (element === "D") {
            count--;
        } else {
            count++
        }
        pathWeightArray.push(count)
    }

    let result = 0;
    for (let index = 0; index < pathWeightArray.length; index++) {
        if (pathWeightArray[index] === 0 && pathWeightArray[index + 1] && pathWeightArray[index + 1] < 0) {
            result++;
        }
    }

    if (pathWeightArray[0] < 0) {
        result++
    }

    return result
}