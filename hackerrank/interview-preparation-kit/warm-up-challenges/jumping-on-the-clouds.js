const jumpingOnClouds = (array) => {
    let arrayWithValues = array.map((element, index) => {
        return index
    });

    let validLandingSpots = [];

    for (let i = 0; i < arrayWithValues.length; i++) {
        if (array[i] === 0) {
            validLandingSpots.push(arrayWithValues[i])
        }
    }

    let count = 0;

    for (let index = 0; index < validLandingSpots.length - 1;) {
        if ((validLandingSpots[index + 2]) && (validLandingSpots[index + 2] - validLandingSpots[index]) === 2) {
            index += 2;
            count++;
        } else if ((validLandingSpots[index + 1]) && (validLandingSpots[index + 1] - validLandingSpots[index]) >= 1) {
            index += 1;
            count++
        }
    }

    return count;
};