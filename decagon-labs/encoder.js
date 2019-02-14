function encoder(raw, codeWords) {
  let rawWithoutDuplicates = Array.from(new Set(raw));
  let resultObject = {};
  let result = [];
  for (let index = 0; index < rawWithoutDuplicates.length; index++) {
    resultObject[rawWithoutDuplicates[index]] = codeWords[index];
  }

  for (let i = 0; i < raw.length; i++) {
    result.push(resultObject[raw[i]]);
  }
  return result;
}
