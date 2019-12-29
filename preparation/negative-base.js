function solution(number) {

    if (number === 0) return "0";


    let converted = "";

    while (number !== 0) {
        let remainder = number % (-2);
        number = parseInt(number / (-2));

        if (remainder < 0) {
            remainder += ((-1) * (-2));
            number += 1
        }
        converted = remainder.toString() + converted
    }
    return converted.split("").reverse();
}

console.log(solution(-39));
