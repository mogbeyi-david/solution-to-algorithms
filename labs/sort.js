function sort(array) {
  return Array.from(new Set(array)).sort((a, b) => a - b);
}
