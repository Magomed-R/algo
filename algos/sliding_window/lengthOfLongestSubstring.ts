export default

function lengthOfLongestSubstring(s: string): number {
    let start = 0
    let end = 0
    let longest = 0

    for (let i = 0; i < s.length;) {
        const window = s.slice(start, end+1)

        if (window.includes(s[i])) start++
        else {
            end++
            i++
        }

        if (end - start > longest) longest = end - start
    }

    return longest
};


const s = "pwwkew"
    
lengthOfLongestSubstring(s)