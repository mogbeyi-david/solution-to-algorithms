function solution(array, element) {
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (array[mid] !== element && start < end) {
        if (array[mid] > element) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }

        mid = Math.ceil((start + end) / 2);
    }

    return array[mid] === element;
}

console.log(solution([1], 1))
