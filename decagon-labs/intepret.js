function interpret(firstOperand, arrayOfOperators, arrayOfOperands) {
  let result = evaluate(firstOperand, arrayOfOperators[0], arrayOfOperands[0]);
  if (result === -1) return -1;
  for (let index = 1; index < arrayOfOperands.length; index++) {
    result = evaluate(result, arrayOfOperators[index], arrayOfOperands[index]);
    if (result === -1) return -1;
  }
  return result;
}

console.log(interpret(10, ['*', '$', '+'], [5, 3, 2]));

function evaluate(firstOperator, operand, secondOperator) {
  if (operand === '+') {
    return firstOperator + secondOperator;
  }

  if (operand === '-') {
    return firstOperator - secondOperator;
  }

  if (operand === '*') {
    return firstOperator * secondOperator;
  }

  return -1;
}