function rotLeft(array, digit) {

    function leftRotateArray(array) {
        let firstElement = array.shift();
        array.push(firstElement);
        return array
    }

    for (let count = 0; count < digit; count++){
        leftRotateArray(array)
    }
    return array
}

