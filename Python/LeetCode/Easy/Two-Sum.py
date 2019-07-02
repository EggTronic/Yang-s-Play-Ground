"""
Solution 1
Time: O(n^2)
Space: O(n)

Notes:
xrange uses less memory than range and much faster than range
"""


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in xrange(len(nums)-1):
            for j in xrange(i+1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]


"""
Solution 2
Time: O(n)
Space: O(n)

Notes:
dict uses far less time to search the match, but requires more memory space
"""


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numsDict = {nums[i]: i for i in range(len(nums))}
        for i in range(len(nums)):
            complement = target - nums[i]
            if complement in numsDict.keys() and i != numsDict.get(complement):
                return [i, numsDict.get(complement)]
