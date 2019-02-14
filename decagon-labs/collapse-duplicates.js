function collapseDuplicates(string) {
  return Array.from(new Set(string.split(''))).join('');
}