const solution = (numberOfSocks, arrayOfSocks) => {
    let arrayOfSocksAsObject = {};
    let arrayOfSocksPair = [];

    for (let item of arrayOfSocks) {
        if (arrayOfSocksAsObject[item]) {
            arrayOfSocksAsObject[item]++
        } else {
            arrayOfSocksAsObject[item] = 1;
        }
    }

    for (let property in arrayOfSocksAsObject) {
        if (arrayOfSocksAsObject.hasOwnProperty(property)) {
            let element = arrayOfSocksAsObject[property];
            let numberOfPairs;
            if (element > 1) {
                numberOfPairs = Math.floor(element / 2);
                arrayOfSocksPair.push(numberOfPairs);
            }
        }
    }

    if (arrayOfSocksPair.length === 0) {
        return 0
    }

    return arrayOfSocksPair.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
};


console.log(solution(2, []));