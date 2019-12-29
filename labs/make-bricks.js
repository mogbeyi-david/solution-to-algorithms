function makeBricks(numberOfSmallBricks, numberOfBigBricks, goal) {
  let maxNumberOfBigBricksNeeded = Math.floor(goal / 5);
  let maxNumberOfSmallBricksNeeded = goal % 5;
  return numberOfBigBricks >= maxNumberOfBigBricksNeeded && numberOfSmallBricks >= maxNumberOfSmallBricksNeeded;
}