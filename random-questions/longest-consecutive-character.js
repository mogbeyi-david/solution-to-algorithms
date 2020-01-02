function solution(string) {
    let array = string.split("");

    let maxCount = 0;
    let maxCharacter = "";
    let currentElementCount = 1;
    let result = {};

    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            currentElementCount++;
        } else {
            if (currentElementCount > maxCount) {
                maxCount = currentElementCount;
                maxCharacter = array[i];
            }
            currentElementCount = 1;
        }
    }

    result[maxCharacter] = maxCount;
    return result;
}
