function solution(string) {
    let givenArray = string.split("");
    givenArray = givenArray.filter((element) => element !== " ")
    let givenArrayAsObject = {};
    for (const item of givenArray) {
        if (!givenArrayAsObject[item]) {
            givenArrayAsObject[item] = 1
        } else {
            givenArrayAsObject[item]++
        }
    }

    let count = 0;

    for (const property in givenArrayAsObject) {
        if (givenArrayAsObject.hasOwnProperty(property)) {
            if ((givenArrayAsObject[property] % 2) !== 0) {
                count++;
                if (count > 1) {
                    return false
                }
            }
        }
    }

    return true
}