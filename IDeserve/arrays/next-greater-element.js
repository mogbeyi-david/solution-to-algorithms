function solution(array) {
    let stack = [array[0]];
    let result = [];
    let pairGreaterElementToElement = {};

    for (let index = 1; index < array.length; index++) {
        let currentElement = array[index];
        if (stack.length === 0) {
            stack.push(currentElement);
        } else if (currentElement <= stack[stack.length - 1]) {
            stack.push(currentElement)
        } else {
            while (currentElement > stack[stack.length - 1]) {
                result.push(currentElement);
                pairGreaterElementToElement[stack[stack.length - 1]] = currentElement
                stack.pop();
                if (stack.length === 0) {
                    stack.push(currentElement);
                    break
                }

                if (currentElement <= stack[stack.length - 1]) {
                    stack.push(currentElement)
                    break
                }
            }
        }
    }

    for (let element of stack) {
        pairGreaterElementToElement[element] = null;
    }


    return pairGreaterElementToElement
}

console.log(solution([98, 3, 2, 10, 6, 8, 1, 4, 12, 7, 4]));
