const solution = (string) => {
    let object = {};
    for (let i = 0; i < string.length; i++) {
        if (object[string[i]]) {
            return false
        } else {
            object[string[i]] = true
        }
    }
    return true
};

console.log(solution(" k"));