const solution = (number) => {

    let result = [0, 1];

    for (let i = 2; i < number; i++) {
        result.push(result[i - 1] + result[i - 2])
    }
    return result[number - 1];
};

console.log(solution(2));