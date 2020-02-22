function solution(string) {
    let stack = [];
    let validCharacters = ["[", "{", "(", ")", "}", "]"];
    let popedElement;

    if (!string.length) {
        return 1
    }

    for (let i = 0; i < string.length; i++) {
        let element = string[i];
        if (validCharacters.indexOf(element) === -1) {
            return 0
        }
        if (element === "{") {
            stack.push(element)
        } else if (element === "[") {
            stack.push(element)
        } else if (element === "(") {
            stack.push(element)
        } else if (element === ")") {
            popedElement = stack.pop();
            if (popedElement !== "(") {
                return 0
            }
        } else if (element === "]") {
            popedElement = stack.pop();
            if (popedElement !== "[") {
                return 0
            }
        } else if (element === "}") {
            popedElement = stack.pop();
            if (popedElement !== "{") {
                return 0
            }
        }
    }

    return 1;
}

console.log(solution("+)(+()"))
