//! so slow (4500ms)
// function isPalindrom(s: string) {
//   return s.split('').reverse().join('') === s
// }

// export function longestPalindrome(s: string): string {
//   let longest = ''

//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j <= s.length; j++) {
//       const curr = s.slice(i, j)

//       if (isPalindrom(curr)) {
//         if (longest.length < curr.length) longest = curr
//       }
//     }
//   }

//   return longest
// }

//* fast (600ms)
// function isPalindrom(s: string) {
//   let l = 0,
//     r = s.length - 1
//   while (l <= r) {
//     if (s[l] !== s[r]) return false
//     l++, r--
//   }
//   return true
// }

// export function longestPalindrome(s: string): string {
//   let longest = ''

//   for (let i = 0; i < s.length * 2; i++) {
//     let l = Math.floor(i / 2)
//     let r = Math.floor(i / 2) + (i % 2 === 1 ? 1 : 0)

//     while (isPalindrom(s.slice(l, r + 1))) {
//       const sliced = s.slice(l, r + 1)
//       if (longest.length < sliced.length) longest = sliced
//       if (!s[l - 1] || !s[r + 1]) break
//       l--, r++
//     }
//   }

//   return longest
// }

//~ AI
export function longestPalindrome(s: string): string {
  let start = 0,
    maxLen = 0

  for (let i = 0; i < s.length; i++) {
    expand(i, i)
    expand(i, i + 1)
  }

  return s.slice(start, start + maxLen)

  function expand(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      const len = right - left + 1
      if (len > maxLen) {
        start = left
        maxLen = len
      }
      left--
      right++
    }
  }
}
