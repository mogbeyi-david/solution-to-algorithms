function isPrime(number) {

    if (number === 2) return true;

    let target = Math.ceil(Math.sqrt(number)) + 1;
    let isPrime = true;
    for (let i = 2; i < target; i++) {
        if ((number % i) === 0) {
            isPrime = false
        }
    }
    return isPrime;
}

function solution(number) {

    let numberOfCyclicPrimes = 0;
    let reverseVersion;
    for (let i = 2; i < number; i++) {
        if ((i % 2 === 0) && i !== 2) {
            continue
        }
        if (isPrime(i)) {
            reverseVersion = parseInt(i.toString().split("").reverse().join(""));
            if (isPrime(reverseVersion)) {
                numberOfCyclicPrimes++
            }
        }
    }
    return numberOfCyclicPrimes;
}

console.time("Start");
console.log(solution(10000000));
console.timeEnd("Start");