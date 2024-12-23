function groupAnagrams(strs: string[]): string[][] {
    const map: { [key: string]: number } = {};
    const result: string[][] = [];

    for (let i = 0; i < strs.length; i++) {
        const hash = strs[i].split("").sort().join("");

        if (map[hash] !== undefined) result[map[hash]].push(strs[i]);
        else {
            map[hash] = result.push([strs[i]]) - 1
        }
    }

    return result;
}