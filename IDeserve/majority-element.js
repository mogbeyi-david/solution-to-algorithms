const solution = (array) => {
    const numberOfOccurrences = Math.ceil(array.length / 2);
    let arrayAsObject = {};
    for (const element of array) {
        if (!arrayAsObject[element]) {
            arrayAsObject[element] = 1
        } else {
            arrayAsObject[element]++
        }
    }


    for (let property in arrayAsObject) {
        if (arrayAsObject.hasOwnProperty(property)) {
            if (arrayAsObject[property] > numberOfOccurrences) {
                return property
            }
        }
    }

    return null;
};

console.log(solution([1, 7, 8, 2, 6, 8, 1, 3, 2, 8]))
console.log(solution([2, 6, 2, 2, 6, 2, 2, 8, 2, 1]))
