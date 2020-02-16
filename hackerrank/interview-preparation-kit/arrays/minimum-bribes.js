function minimumBribes(array) {

    for (let index = 0; index < array.length; index++) {
        let spacesMoved = (index + 1) - array[index];
        let positiveSpacesMoved = Math.abs(spacesMoved);
        if (positiveSpacesMoved > 2 && spacesMoved < 0) {
            console.log("Too chaotic");
            return "Too chaotic";
        }
    }

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temporaryVariable = array[i];
                array[i] = array[j];
                array[j] = temporaryVariable
                count++
            }
        }
    }
    console.log(count)
    return count
}

