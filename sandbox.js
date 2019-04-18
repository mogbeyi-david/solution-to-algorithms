function deepCopyArray(array) {
  // Deep way to copy an array
  return JSON.parse(JSON.stringify(array));
}

function shallowCopyArray(array) {
  const result = Array.from(array);
  array.push('testing');
  return [array, result];
}

console.log(shallowCopyArray([1, 2, 3]));

