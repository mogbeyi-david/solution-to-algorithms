function reverse(integer) {
    let convertedInteger;
    if (integer < 0) {
        convertedInteger = integer * (-1);
    } else {
        convertedInteger = integer;
    }

    let stringVersion = convertedInteger.toString();
    stringVersion = stringVersion.split("").reverse().join("");
    let reversedInteger = parseInt(stringVersion);

    if (integer < 0) reversedInteger = reversedInteger * (-1);
    if (reversedInteger === Number.MAX_VALUE) return 0;
    if (reversedInteger >= (Math.pow(2, 31) - 1)) {
        return 0
    }

    if (reversedInteger <= (Math.pow(-2, 31))) {
        return 0;
    }
    return reversedInteger;
}

console.log(reverse("-2147483648"))
