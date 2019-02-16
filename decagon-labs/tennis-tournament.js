function solution(players, courts) {
  return Math.floor((players / 2)) > courts ? courts : Math.floor(players / 2);
}