function solution(array) {
    array.sort((a, b) => {
        return a - b;
    });

    array = array.filter((element) => {
        return element > 0;
    });

    if (array.length < 2) {
        return 0
    }

    if (array.length === 3) {
        if ((array[0] + array[1]) > array[2]) {
            return 1
        } else {
            return 0
        }
    }

    for (let i = 0; i < array.length - 3; i++) {
        if ((array[i] + array[i + 1]) > array[i + 2]) {
            return 1
        }
    }
    return 0
}
