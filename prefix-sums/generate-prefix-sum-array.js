const generatePrefixSumArray = (array) => {
    for (let i = 1; i < array.length; i++) {
        array[i] = array[i] + array[i - 1];
    }
    return array
};

console.log(generatePrefixSumArray([4, 2, 2, 5, 1, 5, 8]));