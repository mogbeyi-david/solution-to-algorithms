const solution = (firstString, secondString) => {
    firstString = firstString.split("").sort().join("");
    secondString = secondString.split("").sort().join("");
    return firstString === secondString
};