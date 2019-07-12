"""
Solution 1
Time: O(m+n)
Space: O(m+n)

Notes:
easy to understand but slow
"""

# iteratively combine 2 arrays into a map with accending order


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        e1 = False  # end of nums1
        e2 = False  # end of nums2
        h1 = 0  # head pointer of nums1
        h2 = 0  # head pointer of nums2
        target = {}
        counter = 0
        while len(target) < len(nums1)+len(nums2):
            if not e1 and not e2:
                if nums1[h1] > nums2[h2]:
                    target[counter] = nums2[h2]
                    if h2 < len(nums2)-1:
                        h2 += 1
                    else:
                        e2 = True
                    counter += 1
                    for value in nums2[h2:]:
                        if value < nums1[h1]:
                            target[counter] = value
                            counter += 1
                        else:
                            target[counter] = nums1[h1]
                            if h1 < len(nums1)-1:
                                h1 += 1
                            else:
                                e1 = True
                            counter += 1
                            break
                if nums1[h2] <= nums2[h2]:
                    target[counter] = nums1[h1]
                    if h1 < len(nums1)-1:
                        h1 += 1
                    else:
                        e1 = True
                    counter += 1
                    for value in nums1[h1:]:
                        print(value)
                        if value < nums2[h2]:
                            target[counter] = value
                            counter += 1
                        else:
                            target[counter] = nums2[h2]
                            if h2 < len(nums2)-1:
                                h2 += 1
                            else:
                                e2 = True
                            counter += 1
                            break
        print(target, len(target), h2, h1)


"""
Solution 2
Time: O(log(m+n))
Space: O(m+n)

Notes:
Fast and less code to implement
"""


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
