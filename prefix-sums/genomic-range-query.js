function solution(dnaSequence, firstQueryPoints, secondQueryPoints) {
  const minimalImpactFactors = [];
  for (let index = 0; index < firstQueryPoints.length; index++) {
    const firstPoint = firstQueryPoints[index];
    const secondPoint = secondQueryPoints[index];
    const rangeOfInterest = getRange(dnaSequence, firstPoint, secondPoint);
  }
}

function getRange(dnaSequence, lengthOfQuery) {
  for (let index = 0; index < lengthOfQuery; index++) {
    const firstPoint = lengthOfQuery[index];
    const secondPoint = lengthOfQuery[index];
    const rangeOfInterest = getRange(dnaSequence, firstPoint, secondPoint);
  }
}