function calculateCharCode(string) {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        result += string.charCodeAt(i);
    }
    return result
}

function solution(listOfWords, givenWord) {
    let hashedListOfWords = {};
    let givenWordValue = calculateCharCode(givenWord);
    let anagrams = [];

    for (let element of listOfWords) {
        hashedListOfWords[element] = calculateCharCode(element);
    }

    for (let element in hashedListOfWords) {
        if (hashedListOfWords.hasOwnProperty(element)) {
            let sortedGivenWord = givenWord.split("").sort().join("");
            let sortedElement = element.split("").sort().join("");
            if ((givenWordValue === hashedListOfWords[element]) && (sortedGivenWord === sortedElement)) {
                anagrams.push(element)
            }
        }
    }
    return anagrams
}

console.log(solution(["cat", "dog", "tac", "god", "act"], "dgo"));