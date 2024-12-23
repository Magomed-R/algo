import { describe, expect, test } from "@jest/globals";
import lengthOfLongestSubstring from "../../algos/sliding_window/lengthOfLongestSubstring";

test('first', () => {
    const s = "abcabcbb"
    
    expect(lengthOfLongestSubstring(s)).toBe(3)
})

test('second', () => {
    const s = "bbbbb"
    
    expect(lengthOfLongestSubstring(s)).toBe(1)
})

test('third', () => {
    const s = "pwwkew"
    
    expect(lengthOfLongestSubstring(s)).toBe(3)
})