"""
Solution 1
Time: O(n)
Space: O(n)

Notes:
easy but less efficients
"""

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        index = 0
        max_len = 0
        temp = []
        while index <= len(s) - 1:
            temp.append(s[index])
            if len(temp) == len(set(temp)):
                max_len = len(temp)
            else:
                temp = temp[1:]
            index = index + 1
        return max_len