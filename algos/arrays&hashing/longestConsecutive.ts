function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;

    const sorted_nums = nums.sort((a, b) => a - b);

    let longest = [1];

    for (let i = 0; i < nums.length - 1; i++) {
        if (sorted_nums[i] + 1 === sorted_nums[i + 1])
            longest[longest.length - 1]++;
        else if (sorted_nums[i] === sorted_nums[i + 1]) {}
        else longest.push(1);
    }

    return Math.max(...longest);
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// console.log(sorted_nums[i] + 1, sorted_nums[i + 1]);