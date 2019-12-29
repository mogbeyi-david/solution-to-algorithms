function socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks) {
  let seperatedDirtySocks = seperateSocks(dirtySocks);
  for (let sock in seperatedDirtySocks) {
    let currentSock = seperatedDirtySocks[sock];
    if (isEven(currentSock) && numberMachineCanWash > currentSock) {
      floodArray(cleanSocks, sock, currentSock);
      numberMachineCanWash -= currentSock;
    }
    if (isEven(currentSock) && numberMachineCanWash < currentSock) {
      floodArray(cleanSocks, sock, numberMachineCanWash);
      numberMachineCanWash = 0;
    }
    if (!isEven(currentSock) && numberMachineCanWash > currentSock) {
      floodArray(cleanSocks, sock, currentSock - 1);
      numberMachineCanWash -= currentSock;
    }
    if (!isEven(currentSock) && numberMachineCanWash < currentSock) {
      floodArray(cleanSocks, sock, numberMachineCanWash);
      numberMachineCanWash = 0;
    }
  }
  return cleanSocks;
}

console.log(socksLaundering(2, [1, 2, 3, 1, 2, 3], 6, [3, 3, 4, 1, 2, 7, 9], 7));

function seperateSocks(arrayOfSocks) {
  let result = {};
  for (let sock of arrayOfSocks) {
    if (!result[sock]) {
      result[sock] = 1;
    } else {
      result[sock]++;
    }
  }
  return result;
}

function isEven(number) {
  return number % 2 === 0;
}

function floodArray(array, value, number) {
  for (let i = 0; i < number; i++) {
    array.push(value);
  }
  return true;
}