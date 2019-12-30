function solution(price, amount) {
    const changeSet = [1, 2, 5, 10, 20, 50, 100];
    let change = price - amount;

    if (change < 0) {
        return -1;
    }

    return changeSet.reverse().map((eachChangeSet) => {
        let changeCount = Math.floor(change / eachChangeSet);
        change -= (changeCount * eachChangeSet);
        return changeCount;
    }).reverse();
}

console.log(solution(222, 200))
