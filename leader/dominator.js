function solution(array) {
    let arrayAsObject = {};
    let dominator = '';
    let numberOfDominatorOccurrence = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (arrayAsObject[array[i]]) {
            arrayAsObject[array[i]]++
        } else {
            arrayAsObject[array[i]] = 1;
        }
    }

    for (let property in arrayAsObject) {
        if (arrayAsObject.hasOwnProperty(property)) {
            if (arrayAsObject[property] > numberOfDominatorOccurrence) {
                dominator = property;
                numberOfDominatorOccurrence = arrayAsObject[property];
            }
        }
    }
    let result;
    if (numberOfDominatorOccurrence > (array.length / 2)) {
        for (let i = 0; i < array.length; i++) {
            if (parseInt(array[i]) === parseInt(dominator)) {
                result = i;
                break;
            }
        }
    } else {
        result = -1
    }

    return result;
}