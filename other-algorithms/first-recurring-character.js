function solution(string) {
    let array = string.split("");
    let arrayAsObject = {};
    for (let element of array) {
        if (!arrayAsObject[element]) {
            arrayAsObject[element] = true
        } else {
            return element
        }
    }

    return null
}

console.log(solution("ABC"));