function convertStringToObject(string) {
    let object = {};
    for (let i = 0; i < string.length; i++) {
        object[string[i]] = true
    }
    return object;
}

function determineOneAway(firstString, secondString) {
    let firstStringAsObject = convertStringToObject(firstString);
    let secondStringAsObject = convertStringToObject(secondString);

    let count = 0;
    for (const element in firstStringAsObject) {
        if (firstStringAsObject.hasOwnProperty(element)) {
            if (!secondStringAsObject[element]) {
                count++;
            }
        }
    }
    return count <= 1;
}
