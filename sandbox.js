function getFactors(number) {
    let output = [number];
    let target = Math.floor(Math.sqrt(number));
    for (let index = 2; index <= target; index++) {
        if (number % index === 0) {
            output.push(index);
            output.push(number / index);
        }
    }
    return output;
}

function solution(area) {
    let factors = getFactors(area);
    let factorsAsObject = {};
    let perimeters = [];

    for (let element of factors) {
        factorsAsObject[element] = area / element
    }

    for (let property in factorsAsObject) {
        if (factorsAsObject.hasOwnProperty(property)) {
            perimeters.push(2 * (parseInt(property) + factorsAsObject[property]))
        }
    }

    return Math.min(...perimeters);
}
