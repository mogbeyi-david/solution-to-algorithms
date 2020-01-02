function solution(string) {

    let stringAsObject = {};
    let maxCharacter = "";
    let currentCharacterCount = 0;

    for (let i = 0; i < string.length; i++) {
        if (!stringAsObject[string[i]]) {
            stringAsObject[string[i]] = 1
        } else {
            stringAsObject[string[i]]++
        }
    }

    for (let element in stringAsObject) {
        if (stringAsObject.hasOwnProperty(element)) {
            if (currentCharacterCount < stringAsObject[element]) {
                currentCharacterCount = stringAsObject[element];
                maxCharacter = element;
            }
        }
    }
    return maxCharacter;
}

console.log(solution("jk"));