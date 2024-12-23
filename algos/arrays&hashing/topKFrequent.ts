function topKFrequent(nums: number[], k: number): number[] {
    const result: number[] = [];
    const map = {};
    const t = [];

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) map[nums[i]]++;
        else map[nums[i]] = 1;
    }

    for (let key in map) {
        t.push([key, map[key]]);
    }

    t.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < k; i++) {
        result.push(Number(t[i][0]));
    }

    return result;
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
