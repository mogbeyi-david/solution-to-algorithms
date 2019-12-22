const solution = (string) => {
    let result = "";
    string = string.trim();
    if (string === "") {
        return "Nothing to strip";
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            result += string[i]
        } else {
            result += "%20";
        }
    }
    return result
}

console.log(solution("      "))