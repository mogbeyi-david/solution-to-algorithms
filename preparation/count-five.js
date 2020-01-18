function solution(array, integer) {
    let numberOfFive = 0;
    let arrayForFiveOccurrence = [];
    let numberOfOtherNumbers = 0;
    let arrayForOtherNumberOccurrence = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] === integer) {
            numberOfFive++;
        }
        arrayForFiveOccurrence.push(numberOfFive)
    }

    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] !== integer) {
            numberOfOtherNumbers++;
        }
        arrayForOtherNumberOccurrence.push(numberOfOtherNumbers);
    }
    arrayForOtherNumberOccurrence = arrayForOtherNumberOccurrence.reverse();
    for (let i = 0; i < arrayForFiveOccurrence.length; i++) {
        if (arrayForFiveOccurrence[i + 1] === arrayForOtherNumberOccurrence[i]) {
            return i + 1
        }
    }

    return -1
}