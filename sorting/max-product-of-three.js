const solution = (array) => {
    array.sort((a, b) => {
        return a - b
    });
    let l = array.length;
    let productOfLastThreeElements = array[l - 1] * array[l - 2] * array[l - 3];
    let productOfLastTwoAndFirst = array[l - 1] * array[l - 2] * array[0];
    let productOfLastAndFirstTwo = array[l - 1] * array[0] * array[1];
    return Math.max(productOfLastThreeElements, productOfLastTwoAndFirst, productOfLastAndFirstTwo);
};

console.log(solution([3, 2, 1, 10, -5, -6, -20]))