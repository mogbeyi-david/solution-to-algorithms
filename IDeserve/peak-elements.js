function solution(array) {
    let results = [];

    if (array[0] >= array[1]) {
        results.push(array[0])
    }

    if (array[array.length - 1] >= array[array.length - 2]) {
        results.push(array[array.length - 1])
    }

    for (let index = 1; index < array.length - 1; index++) {
        let previousElement = array[index - 1];
        let nextElement = array[index + 1];
        let currentElement = array[index];

        if (currentElement >= previousElement && currentElement >= nextElement) {
            results.push(currentElement)
        }
    }

    return results

}


console.log(solution([40, 10, 20, 5, 45, 50, 65, 90, 35, 25]))
console.log(solution([5, 8, 15, 28, 36, 48, 68, 52, 32, 17]))
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(solution([5, 4, 3, 2, 1]))
console.log(solution([10, 10, 10]))
