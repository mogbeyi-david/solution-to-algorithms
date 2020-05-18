function sumArray(array) {
    let result = 0;
    for (let index = 0; index < array.length; index++) {
        result += array[index]
    }
    return result
}

function formingMagicSquare(matrix) {
    // get duplicate numbers
    let magicNumber = 15;
    const allElements = [];
    let duplicates = [];
    let elementInFocus;
    let sumOfCurrentRow;
    let differenceFromMagicNumber;
    let result = 0;
    let elementBeforeModification;

    let sumOfRows = matrix.map((rows) => {
        return sumArray(rows)
    })
    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            elementInFocus = matrix[row][column];
            if (allElements.includes(elementInFocus)) {
                duplicates.push(elementInFocus)
            }
            allElements.push(elementInFocus);
        }
    }

    for (let row = 0; row < 3; row++) {
        for (let column = 0; column < 3; column++) {
            elementInFocus = matrix[row][column];
            if (duplicates.includes(elementInFocus)) {
                // get the sum of the row where the element in focus is
                sumOfCurrentRow = sumOfRows[row];
                differenceFromMagicNumber = magicNumber - sumOfCurrentRow;
                if (differenceFromMagicNumber !== 0) {
                    elementBeforeModification = elementInFocus;
                    elementInFocus += differenceFromMagicNumber;
                    console.log("elementInFocus", elementInFocus)
                    duplicates.push(elementInFocus);
                    result += Math.abs(differenceFromMagicNumber);
                    duplicates = duplicates.filter((element) => {
                        return element !== elementBeforeModification
                    })
                    console.log("duplicates", duplicates)
                }

            }
        }
    }
    console.log(matrix)
    return result

}


console.log(formingMagicSquare([[7, 6, 5], [7, 2, 8], [5, 3, 4]]))
