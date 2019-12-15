const maxSubArray = (xs, max = 0, curr = 0) => {
    if (xs.length < 1) {
        return max;
    }
    const [head, ...tail] = xs;
    const _curr = curr + head > 0 ? curr + head : 0;
    return maxSubArray(tail, max > _curr ? max : _curr, _curr)
};

