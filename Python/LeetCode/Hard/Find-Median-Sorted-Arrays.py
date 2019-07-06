# Improving


class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        h1 = 0
        h2 = 0
        target = {}
        counter = 0
        if nums1[h1] > nums2[h2]:
            target[counter] = nums2[h2]
            counter += 1
            for value in nums2[h2+1:]:
                if value < nums1[h1]:
                    target[counter] = value
                    counter += 1
                else:
                    target[counter] = nums1[h1]
                    counter += 1
                    break
            h2 += 1
        else:
            target[counter] = nums1[h1]
            counter += 1
            for value in nums1[h1+1:]:
                if value < nums2[h2]:
                    target[counter] = value
                    counter += 1
                else:
                    target[counter] = nums2[h2]
                    counter += 1
                    break
            h1 += 1

        print(target)
# 0 1 5
# 2 4 6
