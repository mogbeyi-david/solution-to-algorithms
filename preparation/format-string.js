function solution(number) {
    let string = "" + number;
    let result = [];
    for (let i = 0; i < string.length; i++) {
        result.push(string[i], ",");
    }
    result.pop();
    return result.join("");
}

console.log(solution("123456"));