function stringCompression(string) {
    let count;
    if (string.length === 0) {
        return string;
    }

    if (string.length > 0) {
        count = 1;
    } else {
        count = 0
    }
    let elementCounts = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i + 1]) {
            count++
        } else {
            elementCounts.push(string[i]);
            elementCounts.push(count);
            count = 1;
        }
    }
    let compressedString = elementCounts.join("");

    if (compressedString.length >= string.length) {
        return string
    } else {
        return compressedString
    }
}