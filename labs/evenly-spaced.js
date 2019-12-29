function evenlySpaced(a, b, c) {
  let array = [a, b, c].sort((a, b) => a - b);
  return array[1] - array[0] === array[2] - array[1];
}
