"""
Solution 1
Time: O(n^2)
Space: O(n)

Notes:
xrange uses less memory than range and much faster than range
"""
class Solution(object):
    def twoSum(self, nums, target):
        for i in xrange(len(nums)-1):
            for j in xrange(i+1,len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
    