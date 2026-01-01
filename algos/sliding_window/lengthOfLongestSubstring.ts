export function lengthOfLongestSubstring(s: string): number {
  const used = new Set()
  let left = 0
  let right = 0
  let max = 0

  while (right < s.length) {
    if (!used.has(s[right])) {
      used.add(s[right])
      right++
    } else {
      used.delete(s[left])
      left++
    }

    if (max < used.size) max = used.size
  }

  return max
}
