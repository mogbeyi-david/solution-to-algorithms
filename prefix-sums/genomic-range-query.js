const solution = (string, P, Q) => {
    let result = [];
    let nucleotides = ["A", "C", "G", "T"];

    for (let index = 0; index < P.length; index++) {
        let slice = string.slice(parseInt(P[index]), parseInt(Q[index]) + 1);
        for (let index = 0; index < 4; index++) {
            if (slice.indexOf(nucleotides[index]) !== -1) {
                result.push(index + 1);
                break;
            }
        }
    }
    console.log(result)
};

solution("CAGCCTA", [2, 5, 0], [4, 5, 6]);